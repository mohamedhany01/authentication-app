import React from "react";
import notFoundImg from "../../images/undraw_page_not_found_re_e9o6.svg";
const NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <section className="not-found">
            <h1>Sorry, Page Not Found</h1>
            <figure>
              <img src={notFoundImg} alt="404 Not found" />
            </figure>
          </section>
        </main>
      </div>
    </>
  );
};

export default NotFound;
