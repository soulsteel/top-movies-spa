import React from "react";

import "./Pagination.css";

function Pagination() {
  
  function createPageRange(limit) {
    let links = [];
    for(let i = 1; i <= limit; i++) {
      links.push(<a href="#">i</a>);
    }
    return links;
  }

  return (
    <div className="pagination">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
    </div>
  );
}

export default Pagination;