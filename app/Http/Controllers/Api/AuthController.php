<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'first_name' => 'required|string|max:255',
            'second_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:5'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors(),
            ]);       
        }
        
        $user = User::create([
            'first_name' => $request->first_name,
            'second_name' => $request->second_name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
         ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                    'success' => true, 
                    'data' => $user,
                    'access_token' => $token, 
                    'token_type' => 'Bearer'
                ]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password')))
        {
            return response()
                ->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        return response()->json([
                'success' => true,
                'message' => 'User login successfully',
                'token' => auth()->user()->createToken('tokens')->plainTextToken,
                'user' => auth()->user(),
            ]);
    }

    // method for user logout and delete token
    public function logout()
    {
        auth()->user()->tokens()->delete();

        $response = [
            'success' => true,
            'message' => "Succefully Logout",
        ];
        return response()->json($response);
    }

    public function current()
    {
        $response = [
            'success' => true,
            'user' => auth()->user(),

        ];

        return response()->json($response);
    }
}