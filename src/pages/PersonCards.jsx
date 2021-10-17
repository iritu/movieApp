import { useEffect, useState } from 'react';
import PersonCardComponent from '../pCard.jsx';
import PersonModel from '../model/personClass.jsx';
//import LocalNavBar from './localNavBar.jsx';
// import axios from 'axios';
import usersData from '../persons.json';
import CardsLine from './Cards/CardsLine.jsx'; 

// This page renders when :  http://localhost:3000/#/Persons



function PersonCards(props){

  // const pathPre = process.env.PUBLIC_URL; //define server path
  // const [users, getUsers] = useState(); //prepare the state 

  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("fname");


  // const tempArray = [
  //   new PersonModel("Dianna", "Ross", "10/20/1971", "images/p1.jpg","http://ynet.com"),
  //   new PersonModel("Dean", "Martin", "11/20/1978", "images/p2.jpg","http://ynet.com")
  //  ]; 

    //get users data from api(json)
    const[persons, setPersons] = useState ([]);
  
    useEffect( ()=>{
        setPersons(usersData.map(  
            (person)=> 
              new PersonModel(person.FirstName, 
                              person.LastName, 
                              person.BirthDay, 
                              person.Image, 
                              person.Link)))},[]);


    
    // 1) Filter the actors based on the filterText
    const filtererdActors = persons.filter(actor => 
      actor.FirstName.toLowerCase().includes(filterText.toLowerCase()) || 
      actor.LastName.toLowerCase().includes(filterText.toLowerCase()));

    // 2) Sort the actors array
    filtererdActors.sort((actor1, actor2) => {
      if (actor1[sortBy] > actor2[sortBy]) {
        return 1;
      } else if (actor1[sortBy] < actor2[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    });


    const cardsLine = filtererdActors.map(PersonModel => <PersonCardComponent  PersonModel={PersonModel} />)
    
    
    return(
     
      <div> 
          {/* local nav bar with searc  */}
          <form className="d-flex">
            <input type="text" placeholder="Filter actors" value={filterText}
                onChange={e => setFilterText(e.target.value)}/>
                <select value={sortBy} 
                       onChange={e => setSortBy(e.target.value)}
                       className="form-control">
                       <option value="fname">First Name</option>
                       <option value="lname">Last Name</option>
                </select>
          </form>
                    
        {/* end nav bar */}

        <CardsLine cardsLine={cardsLine}/>

      </div>
    );
  
  }

  export default PersonCards;