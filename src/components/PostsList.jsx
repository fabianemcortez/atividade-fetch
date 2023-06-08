/* 
END POINT: https://dummyjson.com/posts
Rendereizar os campos: title, body, reactions
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";

export default function PostsList() {
  const [postsList, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPostsList() {
      const response = await axios.get("https://dummyjson.com/posts");
      console.log(response);
      setPosts(response.data.posts);
    }

    fetchPostsList();
  }, []);

  return (
    <div>
      <div>
        {postsList.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.reactions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


