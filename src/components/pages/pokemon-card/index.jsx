// import React, { useState, useEffect } from "react";

// import { getPokemon } from '../../../usecases/pokemon';
// import color from '../../../config/color.json'

// export const PokemonCard = (props) => {
//   const { name } = props;
//   const [pokemon, setPokemon] = useState();
//   useEffect(() => {
//     getPokemon(name).then(res => {
//       setPokemon(res);
//     });
//   });

//   const ShowData = () => {
//     if (pokemon) {
//       return(
//         <>
//           <div className='card-img'>
//             <img src={pokemon.sprites.front_default} alt='' />
//           </div>
//           <h2>{pokemon.name}</h2>
//           <div>
//             {
//               pokemon.types.map(type => {
//                 return (
//                   <div className='card-type' style={{ backgroundColor: color[type.type.name] }}>
//                     {type.type.name}
//                   </div>
//                 )
//               })
//             }
//           </div>
//         </>
//       )
//     }
//   };
//   // console.log(`pokemon: ${JSON.stringify(pokemon)}`)
//   return(
//     <>
//       {ShowData()}
//     </>
//   )
// };

import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getPokemon } from '../../../usecases/pokemon';
// import color from '../../../config/color.json'

export const PokemonCard = (props) => {
  const { name } = props;
  const history = useHistory();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    getPokemon(name).then(res => {
      setPokemon(res);
    });
  });

  return (
    <>
      {pokemon && (
        <Card>
          <CardActionArea>
            <CardMedia>
              <img src={pokemon.sprites.front_default} alt='' />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {pokemon.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => { history.push(`/pokemon/${pokemon.name}`) }}>
              Show More
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
