import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearchChange(search);
  };
  return (
    <>
      <p>
        Cari artikel : <input type='text' onChange={onSearchChange} />
      </p>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
    </>
  );
}

export default Search;
