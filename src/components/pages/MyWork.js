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
            <div className="col-md-10 col-sm-10 workBox first">
              <a href="https://irvinek01.github.io/world-of-words/">
                <label>
                  <p>World of Words</p>
                  <p>A Word Defining Web App</p>
                </label>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox second">
              <a href="https://neighborhood-appage.herokuapp.com/">
                <label>
                  <p>Neighborhood Watch</p>
                  <p>A Rating Reviewer</p>
                </label>
              </a>
            </div>
            <div className="col-md-5 col-sm-5 workBox third">
              <a href="https://aj-tech-blog.herokuapp.com/">
                <label>
                  <p>Tech Blog</p>
                  <p>A Blogsite</p>
                </label>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox fourth">
              <a href="#">
                <label>
                  <p>Figure 4</p>
                  <p>Left</p>
                </label>
              </a>
            </div>
            <div className="col-md-5 col-sm-5 workBox fifth">
              <a href="#">
                <label>
                  <p>Figure 5</p>
                  <p>Right</p>
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyWork;
