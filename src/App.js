
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { dataBook } from './helpers/constant';
import Book from './containers/Book/Book';

//Bouton générique


const App = () => {

  return ( 
  <>
  
  
    <h1 className="maintitle"> Admin Dashboard Books</h1>  
    <Book/>
    

</>
  );
}


export default App;



