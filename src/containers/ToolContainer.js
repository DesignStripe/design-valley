import React, { useState, useEffect } from "react";
import Tool from "../components/Tool";
import Cards from "../components/Cards";
import { Row, Col } from "react-flexbox-grid";

import { fetchToolById, fetchRelated } from "../api";
import Spinner from "../components/Spinner";

const ToolContainer = ({ match }) => {
  const { id } = match.params;
  const [tool, setTool] = useState(null);
  const [relatedTools, setRelatedTools] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchToolById(id).then(res => {
      setTool(res);
    });
    fetchRelated(id).then(data => {
      setIsReady(true);
      setRelatedTools(data);
    });
  }, [id]);

  if (!isReady) return <Spinner />;

  return (
    <Col>
      <Tool {...tool} id={tool._id} />
      <div style={{ marginTop: "4rem" }} />
      <Cards
        tools={relatedTools}
        title={"Related Tools:"}
        isReady={isReady}
        isRelated
      />
    </Col>
  );
};

export default ToolContainer;
