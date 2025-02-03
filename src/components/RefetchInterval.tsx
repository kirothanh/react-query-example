import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchTodoList = async (todoId: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  return response.data;
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const {data, isLoading, error} = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodoList(currentId),
    refetchInterval: 5000
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId(prevId => prevId < 200 ? prevId + 1 : 1)
    }, 5000)
  
    return () => clearInterval(interval)
  }, [])

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error when fetch data: {error.message}</h1>;

  return (
    <div>
      <h1>Todo</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button className="mt-[20px] bg-amber-800 text-white " onClick={() => setCurrentId(prevId => prevId < 200 ? prevId + 1: 1)}>Next Todo</button>
    </div>
  )
}

export default RefetchInterval