import React from 'react'

export default function Search(props) {
    function filter(event) {
        props.filterValue(event.target.value);
    }
    function display(){
        props.display();
    }
  return (
    <>
        <div className='container search' >
            <h1 className='heading'>Search properties to rent</h1>
            <input type="text" placeholder='Search with Search Bar' className='searchInput' />
            
        </div>
        <div className="container priceSearchContainer">
            <div className="priceSearch">
                    <div className="priceContainer">
                        <label className='priceName'>Price</label>
                        <select className='priceSelect' onChange={filter}>
                            <option value="3500">All</option>
                            <option value="300">$0-$300</option>
                            <option value="500">$300-$500</option>
                            <option value="2500">$500-$2,500</option>
                            <option value="2500-3500">$2,500-$3,500</option>
                        </select>
                    </div>
                    <button className='priceButton' onClick={display}>Search</button>
            </div>
        </div>
        
        

    </>
    
  )
}
