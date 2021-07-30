<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UsersSongs;
use App\Form\UsersSongsType;
use App\Repository\UsersSongsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/users/songs")
 */
class UsersSongsController extends AbstractController
{

    private $token;

    public function __construct(TokenStorageInterface $token)
    {
        $this->token = $token;
    }


    /**
     * @Route("/", name="users_songs_index", methods={"GET"})
     */
    public function index(UsersSongsRepository $usersSongsRepository): Response
    {
        return $this->render('users_songs/index.html.twig', [
            'users_songs' => $usersSongsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="users_songs_new", methods={"GET","POST"})
     */
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $usersSong = new UsersSongs();
        $form = $this->createForm(UsersSongsType::class, $usersSong);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form['song']->getData();

            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

            try {
                $file->move(
                    $this->getParameter('brochures_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }
            $user = $this->token->getToken()->getUser();
            $userId = $user->getId();
            $usersSong->setUser($userId);
            $usersSong->setSong($newFilename);
            /*$file->move('userssong', $file->getClientOriginalName());*/
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($usersSong);
            $entityManager->flush();

            return $this->redirectToRoute('users_songs_index');
        }

        return $this->render('users_songs/new.html.twig', [
            'users_song' => $usersSong,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="users_songs_show", methods={"GET"})
     */
    public function show(UsersSongs $usersSong): Response
    {
        return $this->render('users_songs/show.html.twig', [
            'users_song' => $usersSong,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="users_songs_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, UsersSongs $usersSong): Response
    {
        $form = $this->createForm(UsersSongsType::class, $usersSong);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('users_songs_index');
        }

        return $this->render('users_songs/edit.html.twig', [
            'users_song' => $usersSong,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="users_songs_delete", methods={"POST"})
     */
    public function delete(Request $request, UsersSongs $usersSong): Response
    {
        if ($this->isCsrfTokenValid('delete'.$usersSong->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($usersSong);
            $entityManager->flush();
        }

        return $this->redirectToRoute('users_songs_index');
    }
}
