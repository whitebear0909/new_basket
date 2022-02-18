<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;

use Validator;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::get();
        return $tasks;
    }

    public function show($id)
    {
        return Task::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $req_task = [
            'is_completed' => $request->is_completed,
        ];

        Task::where('id', $id)->update($req_task);
        $task = Task::findOrFail($id);
        
        return response()
            ->json(
                [
                    'success' => true,
                    'data' => $task
                ]
            );
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'task_name' => 'required|string|max:255',
            'task_description' => 'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());       
        }

        $task = Task::create($request->all());
        return response()
            ->json(
                [
                    'success' => true,
                    'data' => $task
                ]
            );
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return '';
    }
}