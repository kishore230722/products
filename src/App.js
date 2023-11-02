import './App.css';
import Products from './products';
import { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import products from './data'
import Items from './items';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const itemsPerPage = 12



const handlePageChange = (selectedPage) => {
  setCurrentPage(selectedPage.selected);
};
 

 
 

 
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  
 
  
 
  
  useEffect (() =>{
    
    setTotalPages(Math.ceil(products.length/itemsPerPage))
    
   },[])

 
  

  const FilteredData = (products, selected)=> {
    let filteredProducts = products;

   
   

    
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, priceRange }) =>
          category === selected ||
          priceRange === selected
      );
      
     
    }
    let startIndex = currentPage * itemsPerPage
      let endIndex = startIndex + itemsPerPage
      const subset = filteredProducts.slice(startIndex,endIndex);
     
         
        
         
          
       
        
      
     
      
 

    return subset.map(
      ({ img, title, description, price }) => (
        <Items
          
          img={img}
          title={title}
          
          
          price={price}
          description={description}
        />
      )
    );
  }

  const result = FilteredData(products, selectedCategory);

  return (
    <>
    
    <Sidebar handleChange={handleChange} />
    <Products result = {result} totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    

    </>
  )
}

export default App;

