<?php

use App\Http\Controllers\Api\Brew;
use Illuminate\Support\Facades\Route;

Route::get('/brew', [Brew::class, 'list'])->name('api.brew')->middleware('auth:sanctum');
