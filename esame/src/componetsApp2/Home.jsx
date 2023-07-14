import React from "react";
import People from "./people";
import { Link } from "react-router-dom";

function Home({ People }) { //IN HOME ABBIAMO IL CONTENUTO INIZALE DELLA PAGINA
  return (
    <div className="flex flex-col gap-10">
      {People.map((person) => (
        <div key={person.nome}>
          <h3>{person.nome}</h3>
          <img src={person.immagine} alt={person.nome} />
          <Link to={`/char/${person.nome}`}>
            <p className="text-center mt-4 font-bold text-lg bg-red-400 rounded-xl">
              more info
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
