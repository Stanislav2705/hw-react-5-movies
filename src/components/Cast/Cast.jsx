import { castActorsFilm } from "fakeApi";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import defaultImage from "../../Image/default-poster.jpg"

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    castActorsFilm(movieId).then(setActors);
  }, [movieId])

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {actors?.cast.map(({ name,original_name, character, id, profile_path }) => {
        const IMG = profile_path ? `${IMG_URL}/${profile_path}` : defaultImage
        return (
          <li key={id}>
            <img src={IMG} alt={original_name} width='160' />
            <title>{name}</title>
            <p>Character: {character}</p>
          </li>
        )
      })}
    </ul>
  )
}
