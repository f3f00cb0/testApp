<?php

namespace App\Controller;

use App\Repository\UsersSongsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Titre;
use App\Service\AddContent;
use App\Entity\Album;
use App\Form\Type\AlbumType;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


class HomeController extends AbstractController
{
    private $token;

    public function __construct(TokenStorageInterface $token)
    {
        $this->token = $token;
    }


    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        $number = 15;

        $message = "Hello";

        $directory = '/home/ubuntu/App/public';
        $scanned_directory = array_diff(scandir($directory), array('..', '.'));
        $files = [];
        foreach ($scanned_directory as $temp_filename) {
            if (str_ends_with($temp_filename, '.mp3')) {
                $files[] = $temp_filename;
            }
        }

        //var_dump($files);

        /*
        $finder = new Finder();
        // find all files in the current directory
        $finder->in('src/Controller/music');

        foreach ($finder as $file) {
          $absoluteFilePath = var_dump($file->getRealPath());
          $fileNameWithExtension = $file->getRelativePathname();

          // ...
        }
        */

        return $this->render('home/index.html.twig', [
            'number' => $number,
            'message' => $message,
            'files' => $files
        ]);
    }


    /**
     * @Route("/affiches")
     */
    public function ShowAffichesDev(): Response
    {
        $message = 'Affiches';
        return $this->render('affiches/index.html.twig', [
            'message' => $message
        ]);
    }

    /**
     * @Route("/ajoutMusique")
     */
    public function AjoutMusique(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $message = 'not';
        $request = Request::createFromGlobals();
        $nomTitre = $request->request->get('name');
        $artisteTitre = $request->request->get('artiste');
        $albumTitre = $request->request->get('album');
        $pathTitre = $nomTitre . '.mp3';
        $titres = $this->getDoctrine()->getRepository(Titre::class)->findAll();
        dump($titres);
        if ($nomTitre !== null && $artisteTitre !== null && $albumTitre !== null) {
            $titre = new Titre();
            $titre->setNom($nomTitre);
            $titre->setPath($pathTitre);
            $titre->setArtiste(1);
            $titre->setAlbum(1);
            $em->persist($titre);
            $em->flush();
            $message = 'ok';
        }

        return $this->render('home/ajoutmusique.html.twig', [
            'titres' => $titres,
            'message' => $message,
            'id' => $nomTitre
        ]);
    }

    /**
     * @Route("/ajoutAlbum")
     */
    public function AjoutAlbum(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $message = 'not';
        $request = Request::createFromGlobals();
        $nomTitre = $request->request->get('name');
        $artisteTitre = $request->request->get('artiste');
        $albumTitre = $request->request->get('album');
        $pathTitre = $nomTitre . '.mp3';
        $titres = $this->getDoctrine()->getRepository(Titre::class)->findAll();
        dump($titres);
        if ($nomTitre !== null && $artisteTitre !== null && $albumTitre !== null) {
            $titre = new Titre();
            $titre->setNom($nomTitre);
            $titre->setPath($pathTitre);
            $titre->setArtiste(1);
            $titre->setAlbum(1);
            $em->persist($titre);
            $em->flush();
            $message = 'ok';
        }

        return $this->render('home/ajoutmusique.html.twig', [
            'titres' => $titres,
            'message' => $message,
            'id' => $nomTitre
        ]);
    }

    /**
     * @Route("/ajout")
     */
    public function Ajout(AddContent $addContent): Response
    {
        $message = 'not';
        $request = Request::createFromGlobals();
        $context = $request->request->get('context');
        dump($context);
        $content = $addContent->persistContent('bags', $context);

        $album = new Album();
        $formAlbum = $this->createForm(AlbumType::class, $album);

        if ($formAlbum->isSubmitted() && $formAlbum->isValid()) {

        }

        return $this->render('home/ajout.html.twig', [
            'formalbum' => $formAlbum->createView(),
            'titres' => 'e',
            'message' => $message
        ]);
    }

    /**
     * @Route("/profile", name="profile", methods={"GET", "POST"})
     */
    public function seeUserProfil(UsersSongsRepository $usersSongsRepository): Response
    {
        $user = $this->token->getToken()->getUser();
        $userId = $user->getId();
        /** UsersSongsRepository $usersSongRepository */
        $usersSongs = $usersSongsRepository->findBy(['user' => $userId]);
        $message = "eh c'est la page profile";
        dd($usersSongs);
        return $this->render('home/profile.html.twig', [
            'message' => $message,
            'user_songs' => $usersSongs
        ]);
    }
}