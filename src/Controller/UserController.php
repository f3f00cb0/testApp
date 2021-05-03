<?php


namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends AbstractController
{
    public function newUser(Request $request): Response
    {
        $user = new User();
        $user->setEmail('Entrez votre adresse mail');
        $user->setPassword('*****');
        $user->setUsername('Entre votre nom d\'utilisateur');

        $form = $this->createForm();

        return $this->render('home/index.html.twig', [
            'number' => 200,
        ]);
    }
}