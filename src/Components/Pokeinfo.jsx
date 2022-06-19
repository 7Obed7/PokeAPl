import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h2
            style={{
              textTransform: "uppercase",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            {data.name}
          </h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h5>{poke.ability.name}</h5>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h6>
                    <b>
                      {poke.stat.name}:{poke.base_stat}
                    </b>
                  </h6>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
