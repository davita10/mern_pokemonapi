import React, { useState, useEffect } from "react";

const PokeApi = () => {
  // STATE
  const [pokes, setPokes] = useState([]);

  // BUTTON HANDLER
  //   const buttonHandler = (e) => {
  useEffect(() => {
    console.log("use Effect running");
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((results) => {
        return results.json();
      })
      // TRANSLATED TO JSON
      .then((res) => {
        console.log(res);
        setPokes(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    //   <div>
    //     <button onClick={buttonHandler}>Fetch Pokemon</button>
    //   {/* //   </div> */}

    <ul>
      <h1>Pokemon!</h1>
      {/* DISPLAY POKEMON */}
      {pokes.map((poke, index) => {
        return (
          <li key={index}>
            <h2>
              {index + 1}: {poke.name}
            </h2>
          </li>
        );
      })}
    </ul>
  );
};
// };

export default PokeApi;
