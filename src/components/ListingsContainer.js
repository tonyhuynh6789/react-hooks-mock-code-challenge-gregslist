import React from "react";

import ListingCard from "./ListingCard";

function ListingsContainer({items,deleteFunction}) {
    // console.log(items)
    const renderItems = items.map((item) => <ListingCard key={item.id} item={item} deleteFunction={deleteFunction} />)
    // console.log(renderItems)




  return (
    <main>
      <ul className="cards">
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
