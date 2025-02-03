import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo
  );

  if(result.status !== 201) throw new Error("Error when post todo");

  return result.data;
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const {mutate, error, status} = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;

    mutate({title, completed: false})
    setTitle("")
  };

  return (
    <div>
      <h1>Send data</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <input
          className="border"
          type="text"
          placeholder="Type something here..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="bg-black text-white" type="submit">
          { status === "pending" ? "Adding..." : "Add Todo"}
        </button>

        {error && <h1>Error Occured: {error.message}</h1>}
        {status === "success" && <h1>Todo added success</h1>}
      </form>
    </div>
  );
};

export default MutatingData;
