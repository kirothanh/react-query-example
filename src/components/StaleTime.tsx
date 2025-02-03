import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const fetchTodoList = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const StaleTime = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
    staleTime: 5000
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error when fetch data: {error.message}</h1>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StaleTime;
