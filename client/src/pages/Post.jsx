import { useLocation } from "react-router";
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <div class="grid-container">
       
    <div class="grid-box1">
    <img className='boxicon' src={user} />
    <h1>Manager</h1>
    </div>

    <div class="grid-box2">
    <img className='boxicon' src={call} />
       <h1>Call Center</h1>
    </div>
  
</div>
  );
};

export default Post;
