<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ChicagoTrafficController extends AbstractController
{
    /**
     * @Route("/", name="chicago_traffic")
     */
    public function index()
    {
        return $this->render('chicago_traffic/index.html.twig');
    }
}
