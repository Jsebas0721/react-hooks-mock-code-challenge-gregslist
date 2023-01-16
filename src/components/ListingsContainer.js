import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {

  const listOfItems = listings.map(listing => (
    <ListingCard  key={listing.id} listingItem={listing} onDeleteListing={onDeleteListing}/>
  ))

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listOfItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
