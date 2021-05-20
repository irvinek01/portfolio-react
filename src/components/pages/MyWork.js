import React from "react";

const MyWork = () => (
  <div className="pageContainer flex">
    <div className="row">
      <div className="col-l-4 col-md-4 col-sm-4">
        <h2 className="pageHeading">My Work</h2>
      </div>
      <div className="col-l-8 col-md-8 col-sm-8 content">
        <div className="workContent">
          <div className="row">
            <div className="col-md-10 col-sm-10 big workBox">
              <a href="https://irvinek01.github.io/world-of-words/">
                <span>
                  <h3>World of Words</h3>
                  <p>A Word Defining Web App</p>
                </span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox">
              <a href="https://neighborhood-appage.herokuapp.com/">
                <span>
                  <h3>Neighborhood Watch</h3>
                  <p>A Rating Review Web App</p>
                </span>
              </a>
            </div>
            <div className="col-md-5 col-sm-5 workBox">
              <a href="https://aj-tech-blog.herokuapp.com/">
                <span>
                  <h3>Tech Blog</h3>
                  <p>A Blogsite</p>
                </span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox">
              <span>
                <h3>Figure 4</h3>
                <p>Left</p>
              </span>
            </div>
            <div className="col-md-5 col-sm-5 workBox">
              <span>
                <h3>Figure 5</h3>
                <p>Right</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyWork;
