import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    title: "Super Mario Bros",
    releaseDate: "1985-09-13",
    console: "NES",
    genre: "Platformer",
    description: "Classic platformer game featuring Mario and Luigi.",
    image: "https://www.yourdecoration.nl/cdn/shop/files/pyramid-pp33381-super-mario-bros-3-nes-cover-poster-61x91-5cm_d1124a18-7f8d-4838-bad7-9eaa88a99e7c.jpg?v=1728297169",
  },
  {
    id: 2,
    title: "The Legend of Zelda",
    releaseDate: "1986-02-21",
    console: "NES",
    genre: "Action-Adventure",
    description: "Epic adventure game featuring Link and Princess Zelda.",
    image: "https://via.placeholder.com/150",
  },
];

function GameLibrary() {
  return (
    <section className="game-library">
      <h2>Библиотека игр</h2>
      <div className="game-list">
        {games.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id} className="game-item">
            <img src={game.image} alt={game.title} />
            <span>{game.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GameLibrary;