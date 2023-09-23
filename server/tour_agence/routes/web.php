<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

// Get Home Page
Route::get('/', [HomeController::class, 'index']);


// Get Group Middleware is Admin Panel
Route::middleware('role:admin')->prefix('admin_panel')->group( function (){

//    Get Admin Panel URI
    Route::get('/', [AdminController::class, "index"]);

//    Get Users in Table
    Route::get('/users', [AdminController::class, "get_users"]);

//    Get Number of Registered Users and Hotels
    Route::get('/', [AdminController::class, "count_registered"]);

//  Get List Hotels
    Route::get('/list_hotels', [AdminController::class, "list_hotels"]);

//    Get Hotel Form
    Route::get('/create_hotels', [AdminController::class, "hotel_form"])->name('form_data');

//    Post Hotel Create
    Route::post('/create_hotels/create', [AdminController::class, "create_hotels"]);

//    Get Images list
    Route::get('/images/{images}', [AdminController::class, "get_image"])->name('image.show');

//    Delete Hotels is Database

    Route::match(['get', 'delete'], 'list_hotels/{id}', [AdminController::class, "delete_hotels"])->name('hotels.delete');

});


