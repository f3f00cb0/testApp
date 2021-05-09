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

      $directory = '/home/ubuntu/App/public';
      $scanned_directory = array_diff(scandir($directory), array('..', '.'));
      $files = [];
      $i = 0;
      foreach ($scanned_directory as $temp_filename){
        if(str_ends_with($temp_filename, '.mp3')){
          $files[] = $temp_filename;
        }
      }

      var_dump($files);

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
}