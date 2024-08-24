import React from "react";

const Information = ({ planet }) => {
  return (
    <article className="container">
      {planet.information.map((info, index) => (
        <React.Fragment key={index}>
          <h4 className="title">{info.title}</h4>
          <p className="text">{info.text}</p>
        </React.Fragment>
      ))}
    </article>
  );
};

export default Information;
