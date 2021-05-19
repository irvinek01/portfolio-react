import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import MyContact from "./pages/MyContact";
import MyResume from "./pages/MyResume";

class Portfolio extends Component {
  state = {
    currentPage: "About Me",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "My Work":
        return <MyWork />;

      case "My Contacts":
        return <MyContact />;

      case "My Resume":
        return <MyResume />;

      default:
        return <AboutMe />;
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
