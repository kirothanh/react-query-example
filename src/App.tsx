// import WithTanstackQuery from "./components/WithTanstackQuery";
// import Deduplicate from "./components/Deduplicate";
// import StaleTime from "./components/StaleTime";
// import RefetchInterval from "./components/RefetchInterval";
// import MutatingData from "./components/MutatingData";
// import { useState } from "react";
// import PostsQuery from "./components/PostsQuery";
// import PostsMutation from "./components/PostsMutation";

// Custom CSS
// import CustomCheckbox from "./utils/CustomCheckbox";
// import CustomRatio from "./utils/CustomRatio";
import SwitchBox from "./utils/SwitchBox";

export default function App() {
  // const [isMounted, setIsMounted] = useState(false);

  return (
    <div>
      {/* <WithTanstackQuery /> */}

      {/* <Deduplicate /> 
      <Deduplicate />  */}

      {/* <StaleTime /> */}

      {/* <RefetchInterval /> */}

      {/* <MutatingData /> */}

      {/* <button className="p-4 bg-black text-amber-50" onClick={() => setIsMounted(prev => !prev)}>Toggle</button>
      {isMounted && <PostsQuery />} */}

      {/* <PostsMutation />
      <PostsQuery /> */}

      {/* <CustomCheckbox /> */}
      {/* <CustomRatio /> */}
      <SwitchBox />
    </div>
  )
}
