import React from "react";
import Row from "./Row";

const UpperBody = () => {
  return (
    <div className="upperbody">
      <Row title="Repos" />
      <Row title="Followers" />
      <Row title="Following" />
      <Row title="Gists" />
    </div>
  );
};

export default UpperBody;
