// const API_KEY=process.env.WEATHER_API_KEY;
// console.log(API_KEY)
// const API_KEY = 
export default async function WeatherFinder (city:string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const result = await fetch(url);
    // console.log(result)
    if(result.ok){
        return (result.json());
    }else{
        return ("fecth failed")
    }
}