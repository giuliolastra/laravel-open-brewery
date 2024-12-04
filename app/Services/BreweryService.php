<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class BreweryService
{
    private const BASE_URL = 'https://api.openbrewerydb.org/v1/breweries';

    public function list(string $page = "1"): Collection
    {
        return collect(Http::get(self::BASE_URL . '?page=' . $page)->json());
    }
}
