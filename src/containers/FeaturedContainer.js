import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

import { fetchFeatured, fetchVotes } from "../api";

const FeaturedContainer = ({ match }) => {
  const [featured, setFeatured] = useState([]);
  const [votes, setVotes] = useState(null);

  const { socket, ip, fingerprint } = useSelector(state => state.userSession);

  // TODO: socket.io testing here
  // useEffect(() => {
  //   const tools = featured.map(tool => ({
  //     ...tool,
  //     votes: votes.find(vote => vote.tool === tool._id).votes
  //   }));
  //   console.log(tools);

  //   setFeatured(tools);
  // }, [votes]);
  //
  // useEffect(() => {
  //   const socket = socketIOClient("http://localhost:8000/");
  //   socket.on("updateVotes", data => setVotes(data));

  //   fetchFeatured().then(data => {
  //     setFeatured(data);
  //     fetchVotes().then(data => setVotes(data));
  //   });
  // }, []);

  useEffect(() => {
    if (socket) {
      socket.on("getInitialVotes", data => console.log(data));
      socket.on("updateVotes", data => console.log(data));
    }
    fetchFeatured().then(data => setFeatured(data));
  }, [socket]);

  return <Cards tools={featured} title="Featured" />;
};

export default FeaturedContainer;
