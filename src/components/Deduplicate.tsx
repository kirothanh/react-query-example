import { useQuery } from "@tanstack/react-query"

const fetchRandomNumber = () => {
  return Math.random()
}

const Deduplicate = () => {
  const {data} = useQuery({
    queryKey: ['randomNumber'], queryFn: fetchRandomNumber
  })

  return (
    <div>
      <p>Random Number Is: {data}</p>
    </div>
  )
}

export default Deduplicate