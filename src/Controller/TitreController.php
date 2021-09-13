<?php

namespace App\Controller;

use App\Entity\Titre;
use App\Form\TitreType;
use App\Repository\TitreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/titre")
 */
class TitreController extends AbstractController
{
    /**
     * @Route("/", name="titre_index", methods={"GET"})
     */
    public function index(TitreRepository $titreRepository): Response
    {
        return $this->render('titre/index.html.twig', [
            'titres' => $titreRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="titre_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $titre = new Titre();
        $form = $this->createForm(TitreType::class, $titre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($titre);
            $entityManager->flush();

            return $this->redirectToRoute('titre_index');
        }

        return $this->render('titre/new.html.twig', [
            'titre' => $titre,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="titre_show", methods={"GET"})
     */
    public function show(Titre $titre): Response
    {
        return $this->render('titre/show.html.twig', [
            'titre' => $titre,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="titre_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Titre $titre): Response
    {
        $form = $this->createForm(TitreType::class, $titre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('titre_index');
        }

        return $this->render('titre/edit.html.twig', [
            'titre' => $titre,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="titre_delete", methods={"POST"})
     */
    public function delete(Request $request, Titre $titre): Response
    {
        if ($this->isCsrfTokenValid('delete'.$titre->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($titre);
            $entityManager->flush();
        }

        return $this->redirectToRoute('titre_index');
    }
}
