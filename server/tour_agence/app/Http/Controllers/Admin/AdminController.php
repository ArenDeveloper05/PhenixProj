<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use function PHPUnit\Framework\callback;

class AdminController extends Controller
{
//    Home Page Admin Panel
    public function index()
    {
        return view('/admin.home.index');
    }


//    Get Number of Registered Users and Hotels
    public function count_registered()
    {
        $usersCount = User::count();
        $hotelsCount = Hotel::count();
        return view('/admin.home.index', [
            "users_count" => $usersCount,
            "hotels_count" => $hotelsCount
        ]);
    }

//    Get Users in Table
    public function get_users()
    {
        $get_users = User::all();
        return view('/admin.users.users', [
            "get_users" => $get_users
        ]);
    }


//    Get list hotels

    public function list_hotels()
    {
        $hotels = Hotel::all();

        return view('/admin.hotels.list_hotels', [
            "hotels" => $hotels
        ]);
    }

//    Get hotel form
    public function hotel_form()
    {
        return view('/admin.hotels.create_hotels', [
            'success' => 0
        ]);
    }

//    Create Hotels
    public function create_hotels(Request $request)
    {
        $data_request = $request->only('name', 'desc', 'star', 'price', 'duration', 'image');

        $validator = Validator::make($data_request, [
            'name' => ['required', 'string', 'max:255'],
            'desc' => ['required', 'string', 'max:255'],
            'star' => ['required', 'integer'],
            'price' => ['required', 'integer'],
            'duration' => ['required', 'string'],
        ]);

        if ($validator->fails() && !$request->hasFile('image')) {
            return view('/admin.hotels.create_hotels', [
                'success' => 1
            ]);
        }

        $image = $request->file('image');
        $images = $image->getClientOriginalName();

        // Сохраните изображение в нужной папке
        $image->storeAs('/admin/images', $images);

        $hotels = Hotel::create([
            'name' => $data_request['name'],
            'desc' => $data_request['desc'],
            'star' => $data_request['star'],
            'price' => $data_request['price'],
            'duration' => $data_request['duration'],
            'image' => $images
        ]);

        if (!$hotels) {
            return view('/admin.hotels.create_hotels', [
                'success' => 1
            ]);
        }
        $hotels->save();
        return view('/admin.hotels.create_hotels', [
            'success' => 2
        ]);
    }

//    Get Images is Database
    public function get_image($images)
    {
        $path = storage_path('app/admin/images/' . $images);
        if (file_exists($path)) {
            return response()->file($path);
        } else {
            abort(404);
        }
    }

//    Delete Hotels is Database

    public function delete_hotels($id)
    {
        $hotels = Hotel::where('id', $id)->first();
        if ($hotels)
        {
            $hotels->delete();
        }
        return back()->with("created is database success ok!");
    }

}
