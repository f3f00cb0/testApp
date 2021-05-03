<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
  /**
  * @Route("/")
  */
  public function home()
  {
      $number = 15;

      $message = "Hello fdp";

      return $this->render('home/index.html.twig', [
          'number' => $number,
          'message' => $message
      ]);
  }

  /**
   * @Route("/home")
   */
  public function homepage(){
    $message = "Hello fdp bis zebi";
    return $this->render('home/index.html.twig', [
      'number' => 16,
      'message' => $message
    ])
  }
}