@extends('layouts.admin.admin')

@section('title', 'Forms')

@section('content')
<div class="container mt-5">
    <h1 class="animate__animated animate__zoomInDown text-center text-secondary font-italic">HOTELS FORM CREATED</h1>
    <a class="bg-black text-secondary p-2 rounded" href="/admin_panel/list_hotels">Back to list</a>
    @if($success === 2 )
        <div class="alert alert-success" role="alert">
            Hotel created success ok!
        </div>
    @elseif($success === 1)
        <div class="alert alert-danger" role="alert">
            Invalid Data!
        </div>
    @endif
    <form  action="/admin_panel/create_hotels/create" method="POST" class="form-group mt-5" enctype="multipart/form-data">
        @csrf
        <label for="hotel_name">Hotel Name</label>
        <input class="form-control" type="text" name="name" id="hotel_name">
        <label for="descripion">Description</label>
        <textarea class="form-control" name="desc" id="descripion" cols="30" rows="10"></textarea>
        <label for="star">Star</label>
        <input class="form-control" type="number" name="star" id="star">
        <label for="price">Price</label>
        <input class="form-control" type="number" name="price" id="price">
        <label for="duration">Duration</label>
        <input class="form-control" type="text" name="duration" id="duration">
        <label for="image">Image</label>
        <input class="form-control" type="file" name="image" id="image">
        <button class="bg-success rounded p-2 mt-3 hover" type="submit">Add Hotel</button>
    </form>
</div>
@endsection
