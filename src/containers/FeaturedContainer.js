import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import socketIOClient from "socket.io-client";

import { fetchFeatured, fetchVotes } from "../api";

const FeaturedContainer = ({ match }) => {
  const [featured, setFeatured] = useState([]);
  const [votes, setVotes] = useState(null);

  useEffect(() => {
    const tools = featured.map(tool => ({
      ...tool,
      votes: votes.find(vote => vote.tool === tool._id).votes
    }));
    console.log(tools);

    setFeatured(tools);
  }, [votes]);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:8000/");
    socket.on("updateVotes", data => setVotes(data));

    fetchFeatured().then(data => {
      setFeatured(data);
      fetchVotes().then(data => setVotes(data));
    });
  }, []);

  return <Cards tools={featured} title="Featured" />;
};

export default FeaturedContainer;
