import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col } from "react-flexbox-grid";

import Tool from "../pages/Tool";

import Cards from "../components/Cards";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

import { fetchToolById, fetchRelated } from "../api";

const ToolContainer = ({ match }) => {
  const { id } = match.params;
  const [tool, setTool] = useState(null);
  const [relatedTools, setRelatedTools] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const toolPromise = fetchToolById(id).then(res => {
      setTool(res);
    });
    const relatedPromise = fetchRelated(id).then(data => {
      setRelatedTools(data);
    });
    Promise.all([toolPromise, relatedPromise]).then(() => {
      setIsReady(true);
    });
  }, [id]);

  if (!isReady) return <Spinner />;

  return (
    <Col>
      <BackButton />
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
