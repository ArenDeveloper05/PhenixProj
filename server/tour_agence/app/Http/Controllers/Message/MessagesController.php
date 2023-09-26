<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    public function get_chat()
    {
        $messages = Message::all();
        return response()->json([
            "status" => true,
            "messages" => $messages
        ])->setStatusCode(200, 'Get message is success');
    }

    public function store_chat(Request $request)
    {
        $message = Message::create([
           "body" => $request->body
        ]);
        return response()->json([
            "status" => true,
            "message" => $message
        ])->setStatusCode(201,'Create messages is success');
    }
}
