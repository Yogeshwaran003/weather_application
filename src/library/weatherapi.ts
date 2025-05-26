const API_KEY=process.env.WEATHER_API_KEY;
export default async function WeatherFinder (city:string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const result = await fetch(url);
    if(result.ok){
        return result.json()
    }else{
        return "Fetching is not successfull"
    }
}