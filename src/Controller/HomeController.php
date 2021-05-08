<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;

class HomeController extends AbstractController
{
  /**
  * @Route("/")
  */
  public function home()
  {
      $number = 15;

      $message = "Hello fdp";

      $finder = new Finder();
      // find all files in the current directory
      $finder->in(__DIR__);

      foreach ($finder as $file) {
        $absoluteFilePath = var_dump($file->getRealPath());
        $fileNameWithExtension = $file->getRelativePathname();
    
        // ...
    }
      return $this->render('home/index.html.twig', [
          'number' => $number,
          'message' => $message
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
}