/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Header() {
  return (
    <section className="header">
      <div className="header-left">
        <h1 className="header-title">
          Peaky Blinder: รู้จักแก๊งนักเลงย่านเบอร์มิงแฮมในชีวิตจริง ที่คุณจะไม่
          ‘ฟู้กกิ้ง’ ด้วยเป็นอันขาด
        </h1>
        <div className="header-category">
        <a href="https://adaybulletin.com/category/know/easteregg">Easter Egg</a>
        </div>

        <div className="header-date">
        19 Oct 2019
        </div>

        <div className="header-author">
        <span class="header-author-label">เรื่องโดย:</span>
        <h3 className="header-author-name">
           กฤตนัย จงไกรจักร
        </h3>
        </div>

      </div>
      <div className="header-right">
        <img
          src="https://sgp1.digitaloceanspaces.com/adaybulletin/2019/10/ETE-06-WEB-.jpg"
          className="header-image"
        />
      </div>
    </section>
  );
}

export default Header;
