import React from 'react'






function Items({img,title,price,description}) {

  
   
   
  return (
    <div className='item'>
       <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          
          <section className='card-price'>
          <div className="price">
              <h1>Rs. {price}</h1>
            </div>
            <p>{description}</p>
          </section>
        </div>
      </section>
     
    </div>
    
  )
}

export default Items
