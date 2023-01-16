import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const[listings, setListings] = useState([])
  const [search, setSearch]= useState("");
  const filteredList = listings.filter(listing => listing.description.toLowerCase().includes(search));

  console.log(search);
  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(listings => {
      setListings(listings)
    });
  },[])
  
  function HandleDeleteListing(listingObj){
    const updateListings = listings.filter(listing => listing.id !== listingObj.id);
    setListings(updateListings);
  }
    
 

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer listings={filteredList} onDeleteListing={HandleDeleteListing}/>
    </div>
  );
}

export default App;
