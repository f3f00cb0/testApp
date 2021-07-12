<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Titre;
use App\Service\AddContent;
use App\Entity\Album;
use App\Form\AlbumType;


class HomeController extends AbstractController
{
  /**
  * @Route("/")
  */
  public function home()
  {
      $number = 15;

      $message = "Hello fdp";

      $directory = '/home/ubuntu/App/public';
      $scanned_directory = array_diff(scandir($directory), array('..', '.'));
      $files = [];
      $i = 0;
      foreach ($scanned_directory as $temp_filename){
        if(str_ends_with($temp_filename, '.mp3')){
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
   * @Route("/home")
   */
  public function homepage(){
    $message = "Hello fdp bis zebi zebi";
    return $this->render('home/index.html.twig', [
      'number' => 16,
      'message' => $message
    ]);
  }

  /**
   * @Route("/affiches")
   */
  public function ShowAffichesDev(){
    $message = 'Affiches';
    return $this->render('affiches/index.html.twig', [
      'message' => $message
    ]);
  }

  /**
   * @Route("/ajoutMusique")
   */
  public function AjoutMusique(){
      $em = $this->getDoctrine()->getManager();
      $message = 'not';
      $request = Request::createFromGlobals();
      $nomTitre = $request->request->get('name');
      $artisteTitre = $request->request->get('artiste');
      $albumTitre = $request->request->get('album');
      $pathTitre = $nomTitre.'.mp3';
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
    public function AjoutAlbum(){
        $em = $this->getDoctrine()->getManager();
        $message = 'not';
        $request = Request::createFromGlobals();
        $nomTitre = $request->request->get('name');
        $artisteTitre = $request->request->get('artiste');
        $albumTitre = $request->request->get('album');
        $pathTitre = $nomTitre.'.mp3';
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
    public function AjoutArtiste(AddContent $addContent){
        $message = 'not';
        $request = Request::createFromGlobals();
        $context = $request->request->get('context');
        dump($context);
        $content = $addContent->persistContent('bags', $context);

        $album = new Album();
        $formAlbum = $this->createForm(AlbumType::class, $album);

        if ($formAlbum->isSubmitted() && $formAlbum->isValid()){

        }

        return $this->render('home/ajout.html.twig', [
            'formalbum' => $formAlbum->createView(),
            'titres' => 'e',
            'message' => $message
        ]);
    }
}