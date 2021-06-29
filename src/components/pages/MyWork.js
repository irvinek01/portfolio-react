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
                  <p>A Word Defining Web App with Pictures</p>
                </label>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox second">
              <a href="https://neighborhood-appage.herokuapp.com/">
                <label>
                  <p>Neighborhood Watch</p>
                  <p>A Place Rating Reviewer</p>
                </label>
              </a>
            </div>
            <div className="col-md-5 col-sm-5 workBox third">
              <a href="https://medianmen-chromesthesia.herokuapp.com/">
                <label>
                  <p>Chromesthesia</p>
                  <p>A Music Video Playlist App with the concept of said title</p>
                </label>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-5 workBox fourth">
              <a href="https://aj-google-books.herokuapp.com/">
                <label>
                  <p>Google Books</p>
                  <p>Book Search Engine</p>
                </label>
              </a>
            </div>
            <div className="col-md-5 col-sm-5 workBox fifth">
              <a href="https://irvinek01.github.io/employee-directory-react/">
                <label>
                  <p>Employee Directory</p>
                  <p>usign React!</p>
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
