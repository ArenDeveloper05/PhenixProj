@extends('layouts.admin.admin')

@section('title', 'Hotels')

@section('content')
        <div class="container pt-3">
            <h1 class="animate__animated animate__zoomInDown text-center text-secondary font-italic">HOTELS LIST PAGE</h1>
            <a href="/admin_panel/create_hotels" class="text-decoration-none bg-success p-1 rounded">Create</a>
            @if($hotels)
            <table class="table table-striped table-dark m-5">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Star</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Image</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Update Date</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                @foreach($hotels as $hotel)
                    <tr>
                        <th scope="row">{{ $hotel->id }}</th>
                        <td>{{ $hotel->name }}</td>
                        <td>{{ $hotel->desc }}</td>
                        <td>{{ $hotel->star }}</td>
                        <td>{{ $hotel->duration }}</td>
                        <td style="max-width: 70px; min-height: 50px"><img style="width: 100%; height: 100%" src="{{ route('image.show', ['images' => $hotel->image]) }}" alt="{{ $hotel->name }}"></td>
                        <td>{{ $hotel->created_at->format('d.m.Y, H:i') }}</td>
                        <td>{{ $hotel->updated_at->format('d.m.Y, H:i') }}</td>
                        <td><a href="{{route('hotels.delete', ['id' => $hotel->id])  }}" class="text-decoration-none bg-danger p-1 rounded">Delete</a></td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            @elseif($success === 2)
                <div class="alert alert-success" role="alert">
                    Hotel created success ok!
                </div>
            @else
            <tr class="list-group">
                <li class="list-group-item list-group-item-danger mt-3">No registered hotels :(</li>
            </tr>
            @endif
    </div>
        <footer class="main-footer text-center">
            <strong>Copyright &copy; 2014-<script>document.write(new Date().getFullYear())</script> <a href="/">Admin Panel</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
            </div>
        </footer>
@endsection

