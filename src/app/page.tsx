import Btn from "@/components/btn"
import Card from "@/components/card";
// import WeatherFinder from "@/library/weatherapi";
export default function Home() {    
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


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-5 m-16">
        <input type="text" className="w-[1000px] rounded-lg"/>
        <div><Btn text="Enter"/></div>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  );
}
