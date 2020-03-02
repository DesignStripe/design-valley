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
  const [isRelatedReady, setIsRelatedReady] = useState(false);

  useEffect(() => {
    fetchToolById(id).then(res => {
      setTool(res);
      setIsReady(true);
    });
    fetchRelated(id).then(data => {
      setRelatedTools(data);
      setIsRelatedReady(true);
    });
  }, [id]);

  if (!isReady) return <Spinner />;

  console.log(tool);

  return (
    <Col>
      <BackButton />
      <Tool {...tool} id={tool._id} />
      <div style={{ marginTop: "4rem" }} />
      <Cards
        tools={relatedTools}
        title={"Related Tools:"}
        isReady={isRelatedReady}
        isRelated
      />
    </Col>
  );
};

export default ToolContainer;
