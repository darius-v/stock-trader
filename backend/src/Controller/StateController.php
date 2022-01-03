<?php

namespace App\Controller;

use App\Entity\State;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class StateController extends AbstractController
{
    #[Route('/', name: 'getState')]
    public function getState(EntityManagerInterface $em): JsonResponse
    {
        $state = $em->getRepository(State::class)->findBy([]);

        if (empty($state)) {
            return new JsonResponse('not_found');
        } else {
            /** @var State $state */
            $state = $state[0];
            return new JsonResponse($state->getState());
        }
    }

    #[Route('/save-state', name: 'saveState')]
    public function saveState(EntityManagerInterface $em, Request $request): JsonResponse
    {
        $state = $em->getRepository(State::class)->findBy([]);

        if (empty($state)) {
            $state = new State();
            $state->setState($request->get('state'));
            $em->persist($state);
        } else {
            /** @var State $state */
            $state = $state[0];
            $state->setState($request->get('state'));
        }
        $em->flush();

        return new JsonResponse($state->getState());
    }
}