import { useEffect, useState } from "react";
import { Card_Home } from "./Card_Home";

const List = ({ content }) => {
  return (
    <section className="container">
      <ul className="row list-unstyled">
        {content.map((elem, index) => {
          return <Card_Home key={index} url={elem.url} />;
        })}
      </ul>
    </section>
  );
};

export { List };