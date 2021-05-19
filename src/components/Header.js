import React from "react";
import Pic from "../assets/images/pic1.jpg";

function HeaderItem({ active, page, handlePageChange }) {
  let href = "";
  if (page === "My Resume") {
    href =
      "https://docs.google.com/document/d/1MEl8yV8Zkg7MKrkB_qpMcOCaPdVlqDN87q4sL92LuqE/edit?usp=sharing";
  } else {
    href = `#${page.toLowerCase()}`;
  }

  const className = active ? "nav-link active" : "nav-link text-white";
  const onClick = () => handlePageChange(page);
  return (
    <li className="nav-item " key={page}>
      <a href={href} onClick={onClick} className={className}>
        {page}
      </a>
    </li>
  );
}

function Header({ currentPage, handlePageChange }) {
  const pageNames = ["About Me", "My Work", "My Contact", "My Resume"];
  const HeaderItems = pageNames.map((page) => (
    <HeaderItem
      key={page}
      active={page === currentPage}
      page={page}
      handlePageChange={handlePageChange}
    />
  ));
  return (
    <div className="bg-dark text-white d-flex ">
      <div className="col p-3 mb-2 ">
        <div className="row justify-content-center">
          <ul className="nav nav-tabs">{HeaderItems}</ul>
        </div>
        <div className="row justify-content-center">
          <img
            src={Pic}
            alt="AJ Profile"
            style={{
              height: "125px",
              width: "125px",
              padding: "0.5%",
              margin: "0.5%",
              border: "3px Solid rgb(255, 255, 255)",
              borderRadius: "20% 20% 0 20%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
