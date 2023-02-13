import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card_Collection } from "../components/Card_Collection";
import { Card_Home } from "../components/Card_Home";
import { CustomFooter } from "../components/CustomFooter";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";
import { SingleMovie } from "./SingleMovie";

const SingleCollection = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);

  const fetchGetSingleCollection = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:8080/api/collection/collectionname?sanitizeCollectionName=" +
          location.state.sanitizeCollectionName
      );

      const data = await response.json();
      console.log(data);
      setContent(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setIsLoading(false);
  };

  let final = "";
  let finalMovies = "";

  if (isLoading) {
    final = <Loading />;
  }

  if (content != null) {
    final = content;

    content.movies.map((elem, index) => {
      return (
        <Card_Collection
          key={index}
          title={elem.title}
          genre={elem.genre}
          url={elem.image}
        />
      ); //CONTINUE HERE
    });
  }

  useEffect(() => {
    console.log("location from collection", location);

    fetchGetSingleCollection();
  }, []);

  return (
    <section className="mainSectionBg ">
      <Navbar />
      <section className="mt-5 text-light cssFontTextMontserrat">
        {final.collectionName}
      </section>
      <div className="text-light cssFontTextMontserrat">
        {final.collectionDescription}
      </div>
      <div className="text-light cssFontTextMontserrat">{}</div>
      {/*ERROR HERE */}
      <CustomFooter />
    </section>
  );
};

export { SingleCollection };
