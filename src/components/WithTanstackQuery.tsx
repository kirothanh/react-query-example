import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodoList = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return response.data;
}

const WithTanstackQuery = () => {
  const {data, isLoading, error} = useQuery({ queryKey: ['todos'], queryFn: fetchTodoList })

  if(isLoading) return <h1>Loading...</h1>

  if(error) return <h1>Error when fetch data: {error.message}</h1>

  return (
    <>
      <div>Data</div>
      <div>{data?.map((todo: Todo) => (
        <div className='flex items-center gap-2' key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
        </div>
      ))}</div>

      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
    </>
  )
}

export default WithTanstackQuery