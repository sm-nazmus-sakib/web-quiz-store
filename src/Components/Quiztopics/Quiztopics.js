import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiztopic from "../Quiztopic/Quiztopic";

const Quiztopics = () => {
  const QuizTopic = useLoaderData();
  return (
    <div className="px-2">
      <div className="text-center bg-blue-600 py-2 text-white rounded-lg font-semibold">
        <h1 className="text-2xl"> Welcome to Web Quiz Store </h1>
        <p>The Best quiz store for free.</p>
      </div>
      <div className="md:mt-2 mt-5 lg:mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
        {QuizTopic.data.map((topic) => (
          <Quiztopic key={topic.id} topic={topic}></Quiztopic>
        ))}
      </div>
      <footer className="text-center text-white font-bold bg-blue-600 rounded">
        <p><small>Copyright © 2022 web quiz store.</small></p>
      </footer>
    </div>
  );
};

export default Quiztopics;
