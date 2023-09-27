import { useAppDispatch, useAppSelector } from "../../../store/app/hook";
import { addTodo, removeTodo } from "../../../store/slices/todoSlice";

const TodoPage = () => {
  const todoData = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const AddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genaratedID = Date.now();
    const form = e.currentTarget;
    const task = form.task.value;
    const taskData = { id: genaratedID, task };
    dispatch(addTodo(taskData));
    form.reset();
  };
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/cc/34/8c/cc348c137906f8adc37ce32a08027e7f.jpg')] bg-cover bg-fixed">
      <div className="section dark:bg-black/30">
        <div className="w-10/12 mx-auto">
          <h1 className="text-center font-bold mb-2 uppercase">
            Add Your daily task here
          </h1>
          <form onSubmit={AddTodo} className="mb-5 text-center">
            <input
              required
              type="text"
              name="task"
              className="border-[1px] p-1 border-emerald-700 text-black"
            />
            <button
              type="submit"
              className="btn-sm uppercase bg-emerald-400 hover:bg-emerald-600 text-black hover:text-white ml-2"
            >
              Add Task
            </button>
          </form>
          <div className="grid grid-cols-1 gap-2 max-w-3xl mx-auto">
            {todoData &&
              todoData.map((data, index) => (
                <div
                  key={data.id}
                  className="bg-white/50 hover:bg-white/70 shadow-md hover:shadow-lg p-5 rounded-lg flex justify-between"
                >
                  <div>
                    <p className="text-black">
                      {index + 1}. {data.task} (ID: {data.id})
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(removeTodo(data.id));
                    }}
                    className="btn-sm bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
