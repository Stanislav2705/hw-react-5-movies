import { castActorsFilm } from "fakeApi";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import defaultImage from "../../Image/default-poster.jpg"
import { Img, List, ListItem, Text, Title } from "./Cast.styled";

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    castActorsFilm(movieId).then(setActors);
  }, [movieId])

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {actors?.cast.map(({ name,original_name, character, id, profile_path }) => {
        const IMG = profile_path ? `${IMG_URL}/${profile_path}` : defaultImage
        return (
          <ListItem key={id}>
            <Img src={IMG} alt={original_name} width='160' />
            <Title>{name}</Title>
            <br/>
            <Text>Character: ({character ? character : "Not info"})</Text>
          </ListItem>
        )
      })}
    </List>
  )
}
