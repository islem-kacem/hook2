import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import {InfoData} from "../Data/InfoData";


const Description = () => {
  const [Description,setDescription]=useState({});
  const { id } = useParams();
  useEffect(() => {
		const InfoData = InfoData.find((el) => el.id == id);
		setDescription(InfoData);
	}, [id]);
  return (
    <div>{Description.Description}</div>
    
  )
}
export default Description;
