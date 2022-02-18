<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Authentication Controllers */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/current', [AuthController::class, 'current'])->middleware('auth:sanctum');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

/* using middleware */
Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::get('/tasks', [TaskController::class, 'index']); //get all task
  Route::post('/tasks', [TaskController::class, 'store']); //create task
  Route::post('/tasks/{id}', [TaskController::class, 'update'])->middleware(['can:isManager']); //update task by id
});