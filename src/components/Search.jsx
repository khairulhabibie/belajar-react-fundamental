import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearchChange(search);
  };
  return (
    <>
      <div>
        Cari artikel : <input onChange={onSearchChange} />
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
