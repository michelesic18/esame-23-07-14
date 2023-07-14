import React from "react";
import People from "./componetsApp2/people";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./componetsApp2/home";
import PeopleInfo from "./componetsApp2/PeopleInfo";

function app2() {
  console.log(People);
  return (
    <div className="flex flex-col justify-center items-center">
      <header>
        <h1 className="font-extrabold text-4xl mb-8">Personaggi famosi</h1>
      </header>

      {/* route chiaramente copia incollata da internet */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home People={People} />} />
          <Route
            path="/char/:charname"
            element={<PeopleInfo People={People} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default app2;
