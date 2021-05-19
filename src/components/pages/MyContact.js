import React from "react";

const MyContact = () => (
  <div className="pageContainer flex">
    <div className="row">
      <div className="col-l-4 col-md-4 col-sm-4">
        <h2 className="pageHeading">My Contacts</h2>
      </div>
      <div className="col-l-8 col-md-8 col-sm-8 content">
        <ul>
          <li>
            <a href="https://mail.google.com/">arvinyoung01@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/irvinek01">GitHub</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Ikinneaas/">Facebook</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/irvine-kinneas-5a8a68207/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default MyContact;
