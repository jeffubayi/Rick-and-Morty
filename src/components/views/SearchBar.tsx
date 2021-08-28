import React, { useState } from "react";

const SearchBar = ({ getQuery }:{getQuery:any}) => {
  const [text, setText] = useState("");

  const onChange = (q:string) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;