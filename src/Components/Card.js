import React from 'react'

export default function Card(props) {
    // let data = props.data.filter((ele) => {
    //     return Number(ele.price < props.value);
    // })
  return (
    props.data.map((ele) => {
            return  <div className="card" style={{width: "18rem", display: 'inline-block',margin:'8px'}}>
            <img src={ele.url} className="card-img-top" alt="..." style={{height:'13rem'}}/>
            <div className="card-body" >
                <h5 className="card-title" style={{color: '#8555ed',display:'inline-block'}}>${ele.price}</h5><label>/month</label>
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">{ele.address}</p>
                <div style={{fontSize: 'small'}}>
                <i className="fa-solid fa-bed mx-2" style={{color: '#8555ed'}}></i><label>{ele.beds} Beds</label>
                <i className="fa-solid fa-toilet mx-2" style={{color: '#8555ed'}}></i><label>{ele.bathrooms} Bathrooms</label>
                <i className="fa-solid fa-chart-area mx-2" style={{color: '#8555ed'}}></i><label>{ele.area} m2</label>
                </div>
            </div>
         </div>
         })
  )
}
