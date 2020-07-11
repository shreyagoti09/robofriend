import React from 'react';
//import {User} from './User';
import 'tachyons';


const Card =({id,name,email})=>{
    
   return(
   	<div className='tc bg-light-green dib pa2 br3 ma4 grow shadow5'>
   		<img alt="ima" src={`https://robohash.org/${id}?10x10`} />
	    <div>
		     <h2>{name}</h2>
		     <p> {email}</p>
	    </div>
    </div>
   	);
}

export default Card;