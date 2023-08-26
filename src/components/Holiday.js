import  { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from './SingleHoliday';

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data,setData] = useState([]);
  const [selected, setSelected] = useState(0);

  const next = () =>{
    setSelected((prevValue) =>{
      if(prevValue +1 === data.data.length){
        return 0;
      } else {
        return prevValue + 1;
      }
    })
  }

  const prev = () =>{
    setSelected((prevValue) =>{
      if(prevValue -1 < 0 ){
        return data.data.length -1;
      } else {
        return prevValue - 1;
      }
    })
  }

  const getData= async () =>{
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      throw error
    }
  };
  useEffect(() =>{
    getData();
  },[]);
  if(data.success){
    return( 
    <>
      {
        data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={next} prev={prev}/> : <h4>Nessuna Vacanza</h4>
      }
    </>
    )
  } else{
    return <h2>....Attendi</h2>;
  }
  
};

export default Holiday;