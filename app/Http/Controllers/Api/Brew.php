<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\BreweryService;
use Illuminate\Http\Request;

class Brew extends Controller
{
    public function list(Request $request, BreweryService $breweryService)
    {
        return $breweryService->list($request->query('page') ?? 1);
    }
}
