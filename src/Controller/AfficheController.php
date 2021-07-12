<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AfficheController extends AbstractController
{
    /**
     * @Route("/affiche", name="affiche")
     */
    public function index(): Response
    {
        $message = 'Affiches';
        return $this->render('affiche/index.html.twig', [
            'controller_name' => 'AfficheController',
            'message' => $message,
        ]);
    }
}
