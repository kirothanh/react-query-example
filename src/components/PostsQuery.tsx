import { useQuery } from "@tanstack/react-query"

interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!response.ok) throw new Error("Error fetching data");
  return response.json();
}

const PostsQuery = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000
  })

  if(isLoading) return <p>Loading....</p>

  if(error) return <p>Error Occured: {error.message}</p>

  return (
    <div>
      {
        data.map((post: Post) => (
          <p key={post.id}>{post.title}</p>
        ))
      }
    </div>
  )
}

export default PostsQuery