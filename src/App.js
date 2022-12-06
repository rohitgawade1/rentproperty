import './App.css';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Card from './Components/Card';
import { useState } from 'react';

let house_data = [
  {
    name: "adf",
    address: "909 woodland St.Micigan,In",
    url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: '2500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "sdf",
    address: "909 woodland St.Micigan,In",
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
    price: '510',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "gdsd",
    address: "909 woodland St.Micigan,In",
    url: 'https://www.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-260nw-555325381.jpg',
    price: '1500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "fh",
    address: "909 woodland St.Micigan,In",
    url: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg',
    price: '2500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "jgf",
    address: "909 woodland St.Micigan,In",
    url: 'https://cdn.pixabay.com/photo/2016/06/24/11/48/architecture-1477101__340.jpg',
    price: '3500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "dfjgj",
    address: "909 woodland St.Micigan,In",
    url: 'https://housegrail.com/wp-content/uploads/2022/03/modular-house_Pixabay-1-1024x576.jpg',
    price: '400',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "wrty",
    address: "909 woodland St.Micigan,In",
    url: 'https://www.ashtons.co.uk/clientUpload/newsStory/image/main/NS%209May.jpg',
    price: '5300',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "sh",
    address: "909 woodland St.Micigan,In",
    url: 'https://timbercabins-fencing.uk/wp-content/uploads/2020/02/Modular-Homes-for-sale-UK.jpg',
    price: '5500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "xnbn",
    address: "909 woodland St.Micigan,In",
    url: 'https://spassio.com/wp-content/uploads/2022/05/eestihouse-t-002-592x444.jpg',
    price: '300',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "afdg",
    address: "909 woodland St.Micigan,In",
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80',
    price: '100',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "hdsh",
    address: "909 woodland St.Micigan,In",
    url: 'https://i.pinimg.com/736x/7e/84/fc/7e84fc44fc468ddc70597d7a62a8c63e.jpg',
    price: '2800',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "dfahb",
    address: "909 woodland St.Micigan,In",
    url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: '1200',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "dfjn",
    address: "909 woodland St.Micigan,In",
    url: 'https://www.architectureartdesigns.com/wp-content/uploads/2014/06/2126.jpg',
    price: '900',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "xcvbn",
    address: "909 woodland St.Micigan,In",
    url: 'https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg',
    price: '500',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  },
  {
    name: "xcvn",
    address: "909 woodland St.Micigan,In",
    url: 'https://media.istockphoto.com/id/1283532082/photo/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset.jpg?s=612x612&w=0&k=20&c=AlUKu_HgyCeyrpeb9EVx0k8VG_Sngr-BFOO6ZQawS5o=',
    price: '350',
    beds: '3',
    bathrooms: '2',
    area: '5x7'
  }
];



function App() {

  var[houseData, updateHouseData] = useState(house_data);
  let[filterValue, updateFilterValue] = useState('3500');

  let filterList;
  function displayData(){
    filterList = house_data.sort((a,b) => {
      return Number(a.price) - Number(b.price);
    }).filter((ele) => {
        if(filterValue === '3500') {
            return Number(ele.price ) < Number(filterValue);
        }
        else if(filterValue === '300'){
            return Number(ele.price ) < Number(filterValue);
        }
        else if(filterValue === '500'){
            return Number(ele.price ) >= Number('300') && (Number(ele.price ) <= Number(filterValue));
         }
        else if(filterValue === '2500'){
            return Number(ele.price ) >= Number('500') && (Number(ele.price ) <= Number(filterValue));
        }
        else if(filterValue === '2500-3500'){
          return Number(ele.price ) >= Number('2500') && (Number(ele.price ) <= Number('3500'));
      }
    })
    updateHouseData(filterList);
  }
  

  function getFilterValue(value) {
    updateFilterValue(value);
  }

  
  return (
    <>

        <Navbar/>
        <Search filterValue = {getFilterValue} display = {displayData}/>
        <div className="container">
        <Card data = {houseData}/>
        </div>
        
    </>
  );
}

export default App;
