<?php


namespace App\Controller;

use App\Entity\User;
use App\Form\Type\UserType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/inscription", name="register", methods={"GET", "POST"})
     * @param Request $request
     * @return Response
     */
    public function newUser(Request $request, UserPasswordEncoderInterface $encoder): Response
    {
        if ($this->isGranted('ROLE_USER') == true) {
            return $this->redirectToRoute('home');
        }

        $user = new User();

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $user = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();

            $user->setPassword($encoder->encodePassword($user, $form->get('password')->getData()));
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_success');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/usersuccess", name="user_success", methods={"GET", "POST"})
     * @param Request $request
     * @return Response
     */
    public function userSuccess(Request $request): Response
    {
        $message = "bravo jeune";
        return $this->render('security/success.html.twig', [
            'message' => $message,
        ]);
    }
}