import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App(){



  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(items => {
        setItems(items)
    })
    }, [])

  
  function handleDelete(deleteditem) {
    const updateArrary = items.filter((item) => item.id !== deleteditem)
    setItems(updateArrary)
  }


  const updatedSearch = items.filter(
    (item) => item.description.toLowerCase().includes(search.toLowerCase())
    )



//   const updatedSearch = (searchWord) => {
//    let searchFiltered = items.filter(item => {
//     return item.description.toLowerCase().includes(searchWord.toLowerCase())
// })
//   setItems(searchFiltered)
// }



  
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer items={updatedSearch} deleteFunction={handleDelete} />
    </div>
  );
}

export default App;


