import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isAuth } from "../utils/Auth";

function Secret() {
  const history = useHistory();
  useEffect(() => {
    console.log(isAuth());
    isAuth() && history.push(`/`);
  }, []);
  return (
    <div>
      <h1>Secret Page Open</h1>
    </div>
  );
}

export default Secret;
