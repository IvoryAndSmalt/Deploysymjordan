<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MapController extends AbstractController
{
    /**
     * @Route("/map", name="map")
     */
    public function index()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://www.movebank.org/movebank/service/public/json?study_id=216040785&individual_id=BP_car022&individual_id=BP_car023&individual_id=BP_car043&max_events_per_individual=5&sensor_type=gps",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache"
        ),
        ));
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        
        curl_close($curl);
        
        return $this->render('map/index.html.twig', [
            'controller_name' => 'MapController',
            'json' => $response,
            'err' => $err
        ]);
    }
}
