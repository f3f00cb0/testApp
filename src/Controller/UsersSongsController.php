<?php

namespace App\Controller;

use App\Entity\UsersSongs;
use App\Form\UsersSongsType;
use App\Repository\UsersSongsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

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
    public function new(Request $request): Response
    {
        $usersSong = new UsersSongs();
        $form = $this->createForm(UsersSongsType::class, $usersSong);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form['song']->getData();
            $file->move('public', $file->getClientOriginalName());
            $usersSong->setUser($this->token->getToken()->getUser());
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
