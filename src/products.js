import React from 'react'
import './products.css'
import ReactPaginate from 'react-paginate'


function Products({result,totalPages,handlePageChange,currentPage}) {
  return (
    <>
      <h1 className='h1'>Products</h1>
      <section className="card-container">{result}</section>
      <div className='card-container-1'>
      <ReactPaginate 
        containerClassName={"pagination-container"}
        pageLinkClassName = {'page'}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        
    />
      </div>
      
     

    </>
  )

 
}

export default Products
