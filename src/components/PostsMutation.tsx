import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

const postNewPost = async (newPost: Post) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  return response.json();
};

const PostsMutation = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: postNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["posts"]});
    },
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({queryKey: ["posts"]});
      const previousPosts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData<Post[]>(["posts"], (old = []) => [
        ...old,
        {id: Date.now(), ...newPost},
      ]);

      return {previousPosts};
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(["posts"], context?.previousPosts);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({title, body: "This is a new Post"});
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter something here...."
      />
      <button type="submit" className="bg-black text-white">
        Send
      </button>
    </form>
  );
};

export default PostsMutation;


// onMutate: Called before the mutation function is fired
// onError: Handle error case
// onSuccess: Handle success case
// onSettled: Called once the mutation either succeeds or fails