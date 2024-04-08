async function getdata(city) {
    cityname.innerHTML = city
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27d5999060mshd56251bdd031bb9p1953d4jsn7a59d682c0b7',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        temp.innerHTML = `${result.temp}`
        cloud_pct.innerHTML = `${result.cloud_pct}`
        // wind_degrees.innerHTML = `${result.wind_degrees}`
        wind_speed.innerHTML = `${result.wind_speed+" km/h"}`
        sunrise.innerHTML = `${result.sunrise}`
        // sunset.innerHTML = `${result.sunset}`
        humidity.innerHTML = `${result.humidity}`
        max_temp.innerHTML = `${"Max - "+result.max_temp}`
        min_temp.innerHTML = `${"Min - "+result.min_temp}`
        feels_like.innerHTML = `${result.feels_like}`
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getdata(query.value);
} )
getdata("surat")