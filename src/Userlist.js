import React from 'react';
import Card from './components/Card';


const Userlist=({User})=>{

	const compo=User.map((user,i)=>{
	 return	<Card key={i} id={User[i].id} name={User[i].name} email={User[i].email}/>
	})


	return(
		<div>
           {compo}
        </div>   
    );	
}
export default Userlist;