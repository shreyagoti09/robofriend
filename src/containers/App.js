import React,{Component} from 'react';
import Userlist from '../Userlist';
//import {User} from './User';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import  '../containers/App.css';
import Scroll from '../components/Scroll';



class App extends Component{

	constructor(){

       	    	super();
                 this.state = {
                 	user:[],
                 	searchfield:''
                 }
    }
    onSearchChange=(event)=>{
    	this.setState({searchfield:event.target.value})
    }
    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response=>response.json())
    	.then(users=>this.setState({user:users}));
    	
    }
	render(){
    const {user,searchfield}=this.state;
      const filtereduser=user.filter(user=>{
      	return user.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if(!user.length){
      	return <h1>Loading</h1>
      }
      else{
      	 return(
       	 <div className="tc">
				 <h1 className='f1'>RoboFriends</h1>
				 <SearchBox searchChange={this.onSearchChange}/>
				 <Scroll>
			     	<Userlist User={filtereduser} />
			   </Scroll>	
		    </div>  
	    );
      }
	}
	
}

export default App;