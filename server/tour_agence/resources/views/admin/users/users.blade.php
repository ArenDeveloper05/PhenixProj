@extends('layouts.admin.admin')

@section('title', 'Users')

@section('content')
<div class="container">
    <h1 class="animate__animated animate__zoomInDown text-center text-secondary font-italic">USERS LIST PAGE</h1>
@if(count($get_users))
    <table class="table table-striped table-dark m-5">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created Date</th>
            <th scope="col">Update Date</th>
            <th scope="col">Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Save</th>
        </tr>
        </thead>
        <tbody>
        @foreach($get_users as $get_user)
            <tr>
                <th scope="row">{{ $get_user->id }}</th>
                <td>{{ $get_user->name }}</td>
                <td>{{ $get_user->email }}</td>
                <td>{{ $get_user->created_at->format('d.m.Y, H:i') }}</td>
                <td>{{ $get_user->updated_at->format('d.m.Y, H:i') }}</td>
                <td>{{ $get_user->status }}</td>
                <td><a href="#" class="text-decoration-none bg-success p-1 rounded">Add</a></td>
                <td><a href="#" class="text-decoration-none bg-warning p-1 rounded">Edit</a></td>
                <td><a href="#" class="text-decoration-none bg-danger p-1 rounded">Delete</a></td>
            </tr>
        @endforeach
        </tbody>
    </table>
@else
    <tr class="list-group">
        <li class="list-group-item list-group-item-danger">No registered users :(</li>
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
