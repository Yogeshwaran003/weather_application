"use client"
import Btn from "@/components/btn"
import Card from "@/components/card";
import WeatherFinder from "@/library/weatherapi";
import { useState } from "react";
export default function Home() {    
  const[city,setCity]=useState("")
  const[place,setplace]=useState("");
  const[temp,setTemp]=useState(0);
  // const API_KEY=process.env.WEATHER_API_KEY;
  // const url=`https://api.openweathermap.org/data/2.5/weather?q=${"chennai"}&appid=${API_KEY}`;
  // async function Weatherfetchapi() {
  //   // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"chennai"}&appid=${API_KEY}`)
  //   const res = await fetch(url);
  //   if(res.ok){
  //     return res.json()
  //   }else{
  //     return "NO no"
  //   }
  // }
  // async function test() {
  // const result = await Weatherfetchapi();
  // console.log(result.main.temp);
  // }

  // test();
  async function exporting(city: string){
  const res=await WeatherFinder(city);
  console.log(res.name)
    setplace(res.name)
    setTemp(res.main.temp)
}

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-5 m-16">
        <input type="text" onChange={(e)=>setCity(e.target.value)} className="w-[1000px] text-black p-5 rounded-lg"/>
        <div><Btn text="Enter" onClick={()=>exporting(city)}/></div>
      </div>
      <div>
        <Card place={place} temp={temp}/>
      </div>
    </div>
  );
}
