import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    props.onSearchChange(search);
  };

  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      props.onSearchChange(search);
    }
  };
  return (
    <>
      <div>
        Cari artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
