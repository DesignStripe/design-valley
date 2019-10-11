import React, { useState, useEffect } from "react";
import Tool from "../components/Tool";

import { fetchToolById } from "../api/requests";
import Spinner from "../components/Spinner";

const ToolContainer = ({ match }) => {
  const { id } = match.params;
  const [tool, setTool] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchToolById(id).then(res => {
      setTool(res);
      setIsReady(true);
    });
  }, [id]);

  if (!isReady) return <Spinner />;

  return <Tool {...tool} />;
};

export default ToolContainer;
