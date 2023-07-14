import React from "react";
import { useParams, Link } from "react-router-dom";

function PeopleInfo({ People }) {
  const { charname } = useParams();
  const Person = People.find((Person) => Person.nome === charname);
  if (!Person) {
    return <div>persona non trovata</div>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-extrabold text-2xl text-center">{Person.nome}</h2>
        <img src={Person.immagine} alt="" />
        <p className="font-bold mt-4 text-center">{Person.descrizione}</p>
        <Link to="/">
          <p className="mt-6 bg-red-400 p-4 font-bold">back to home</p>
        </Link>
      </div>
    </div>
  );
}

export default PeopleInfo;
