
let city= prompt("Enter a name of city please :");
/*setTimeout( function(){
    city=prompt("Enter a name of city please :");
},10);*/
let cityname=document.getElementById("cityname");
let countryname=document.getElementById("countryname");
let temp=document.getElementById("temp");
let desc=document.getElementById("desc");
console.log(temp);

url=`https://api.weatherapi.com/v1/current.json?key=ed6041351f9d4c3f8d7163005220301&q=${city} name&aqi=no`;


fetch(url).then(function(responce){
    return responce.json();
    }).then(function(data){
        cityname.innerHTML=` ${data.location.name}`
        countryname.innerHTML=`Country : ${data.location.country}`
        temp.innerHTML=`Temperature: ${data.current.temp_c} °C`
        desc.innerHTML=`Weather situation: ${data.current.condition.text}`

                })


