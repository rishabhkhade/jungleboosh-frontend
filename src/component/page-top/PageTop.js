import React from "react";
import "./PageTop.scss";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function PageTop({ prev_page_name, cur_page_name, bgImage }) {
  return (
    <>
      <div
        className="parent page-top-parent bg-img-cover"
        style={{ background: `linear-gradient(#03221bc7, #03221bc7), url(${bgImage})` }}
      >
        <div className="cont page-top-cont">
          <div class="page-top-left">
            <h2>Help & Support</h2>
            <a href="/" className="breadcrums">
              {prev_page_name}
              <span>
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
              {cur_page_name}
            </a>
          </div>
          <div class="page-top-right"></div>
        </div>
      </div>
    </>
  );
}

export default PageTop;
