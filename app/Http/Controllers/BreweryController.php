<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BreweryController extends Controller
{
    public function list(Request $request, string $page = "1")
    {
        /** @var User $user */
        $user = $request->user();
        $token = $user->createToken('brew');

        $apiResponse = Http::withHeaders(['Authorization' => 'Bearer ' . $token->plainTextToken])
            ->get(
                route('api.brew'),
                ['page' => $page]
            );


        return Inertia::render('Brewery', ['results' => $apiResponse->json(), 'current' => $page]);
    }
}
