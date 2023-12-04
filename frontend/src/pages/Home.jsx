import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import WordCard from '../components/HomeBody/WordCard';



export default function Home () {

  const [fetchData, setFetchData] = useState(null); 
  
  useEffect(() => {
    const fetchWordTable = async() => {
      try{
        // const response = await axios.get('http://localhost:4000')
        const response = await axios.get('https://words-learning.onrender.com')
        setFetchData(response.data);
        console.log(response.data);
      }catch(error){
        console.log(error);
      }    
    } 
    fetchWordTable()
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Header/>
      <Slider {...settings}>
      {fetchData &&fetchData.map((tableData) => (
            <WordCard key={tableData._id} tableData={tableData} />
          ))}
    </Slider>
    </div>
  )
}
