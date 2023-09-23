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

//    Create group controller AdminController
    Route::controller(AdminController::class)->group(function (){

//    Get Admin Panel URI
        Route::get('/',  "index");

//    Get Users in Table
        Route::get('/users',  "get_users");

//    Get Number of Registered Users and Hotels
        Route::get('/',  "count_registered");

//  Get List Hotels
        Route::get('/list_hotels',  "list_hotels");

//    Get Hotel Form
        Route::get('/create_hotels',  "hotel_form")->name('form_data');

//    Post Hotel Create
        Route::post('/create_hotels/create',  "create_hotels");

//    Get Images list
        Route::get('/images/{images}',  "get_image")->name('image.show');

//    Delete Hotels is Database
        Route::match(['get', 'delete'], 'list_hotels/{id}',  "delete_hotels")->name('hotels.delete');

    });
});


