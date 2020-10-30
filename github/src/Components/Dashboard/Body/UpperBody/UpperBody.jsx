import React, { useContext } from "react";
import { AppContext } from "../../../../Context/AppContext";
import Row from "./Row";

const UpperBody = () => {
  const {
    state: { githubUser },
  } = useContext(AppContext);

  if (githubUser)
    return (
      <div className="upperbody">
        <Row title="Repos" userInfo={githubUser.public_repos} />
        <Row title="Followers" userInfo={githubUser.followers} />
        <Row title="Following" userInfo={githubUser.following} />
        <Row title="Gists" userInfo={githubUser.public_gists} />
      </div>
    );
};

export default UpperBody;
