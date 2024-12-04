<?php

use App\Http\Controllers\BreweryController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function (Request $request) {
        /** @var User $user */
        $user = $request->user();
        $token = $user->createToken('api')->plainTextToken;

        return Inertia::render('Dashboard', ['token' => $token]);
    })->name('dashboard');
    Route::get('/brewery', [BreweryController::class, 'list'])->name('brewery');
    Route::get('/brewery/{page}', [BreweryController::class, 'list'])->name('brewery.paginated');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
