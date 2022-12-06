import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";


import React from 'react'

const Home = () => {
  return (
    <div className="home">
       <MainCarousel />
       <ShoppingList />
    </div>
  )
}

export default Home