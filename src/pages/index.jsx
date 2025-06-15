import postsData from "../posts";
import Article from "../components/Article";
import Search from "../components/Input";
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value) => {
    // console.log(value);
    const filterPost = posts.filter((post) => post.title.includes(value));
    setPosts(filterPost);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map(({ title, date, tags }, index) => (
        <Article {...{ title, date, tags }} key={index} />
      ))}
    </>
  );
}

export default Home;
