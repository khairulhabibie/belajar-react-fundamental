import postsData from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState();
  const onSearchChange = (value) => {
    const filterPost = posts.filter((post) => post.title.includes(value));
    setPosts(filterPost);
    setTotalPosts(filterPost.length);
  };

  useEffect(() => {
    console.log("hello world!");
    return () => {
      console.log("cleanup");
    };
  }, []);
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
