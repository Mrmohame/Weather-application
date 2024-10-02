const inputValue=document.getElementById("demo");
let location1=document.getElementById("location1")
let temper1=document.getElementById("temp1")
let data1=document.getElementById("data1")
let AllDayWeather=document.getElementById("AllDayWeather")
let weekArr=["sunday","monday","tuestay","wendsday","thursday","friday","tuestay"]
let monthArr=["January","February","March","April","May","June","July","August","September","October","November","December"]
let globalValu;
let nol;

  inputValue.addEventListener("input", (e)=>{
    getWeather(inputValue.value)
    
})


async function getWeather(locationName){
let response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fbba5b7266a840ada78214513242609&q=${locationName}&days=3`);
let data=await response.json();
globalValu=data
if(data!==null){
displayData()
}


}


async function display1(par1){

    let response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fbba5b7266a840ada78214513242609&q=${par1}&days=3`);
let data=await response.json();
 console.log(data);
 
 
let date= new Date(`${data.forecast.forecastday[0].date}`)
let date2= new Date(`${data.forecast.forecastday[1].date}`)
let date3= new Date(`${data.forecast.forecastday[2].date}`)
// data.current.temp_c
cartouna=`
    <div class="col-md-4 gx-0">
      <div class="card  text-white border-0">
        <div class="card-header text-center card3-bg1 d-flex justify-content-between">
       <span> ${weekArr[date.getDay()]}</span>
       <span>${date.getDate()} ${monthArr[date.getMonth()]}</span>
        </div>
        <div class="card-body py-5 card3-bg2 px-3">
          <h5 class="card-title" id="location1">${data.location.name}</h5>
        <h1 class="degreFont m-4 " id="temp1">
          ${data.current.temp_c}<span class="position-relative celesious1 mx-1">o</span>C
        </h1>
       
        <img class="w-25 mb-0" src="${data.current.condition.icon}">
        <h6 class="text-info">${data.current.condition.text}</h6>
        <div class="footer d-flex gap-4 text-white-50">
<div>
  <img src="	https://routeweather.netlify.app/images/icon-umberella.png">
  <span>${data.current.humidity}%</span>
</div>
<div>



 <img src="https://routeweather.netlify.app/images/icon-wind.png">
  <span>${data.current.wind_kph}km/h</span>
</div>
<div>
<img src="https://routeweather.netlify.app/images/icon-compass.png">
  <span>${data.current.wind_dir}</span>
</div>
        </div>
        </div>

      </div>
    </div>
    <div class="col-md-4 gx-0">
      <div class="card text-center text-white border-0 card2 h-100">
        <div class="card-header text-center text-white-50 card2-bg1">
        ${weekArr[date2.getDay()]}
        </div>
        <div class="card-body py-5 card2-bg2 px-3">
         <img class="w-25 mb-3" src="${data.forecast.forecastday[1].day.condition.icon}">
          <h2>${data.forecast.forecastday[1].day.maxtemp_c}
          <span class="position-relative celesious mx-1">o</span>C</h2>
          <h4 class="text-white-50">${data.forecast.forecastday[1].day.mintemp_c}
          <span class="position-relative celesious mx-1">o</span></h4>
       <h6 class="text-info">${data.forecast.forecastday[1].day.condition.text}</h6>
        </div>
    
      </div>
    </div>    <div class="col-md-4 gx-0">
      <div class="card text-center text-white border-0 card2 h-100">
        <div class="card-header text-center text-white-50 card3-bg1">
       ${weekArr[date3.getDay()]}
        </div>
        <div class="card-body py-5 card3-bg2 px-3">
         <img class="w-25 mb-3" src="${data.forecast.forecastday[2].day.condition.icon}">
          <h2>${data.forecast.forecastday[2].day.maxtemp_c}
          <span class="position-relative celesious mx-1">o</span>C</h2>
          <h4 class="text-white-50">${data.forecast.forecastday[2].day.mintemp_c}
          <span class="position-relative celesious mx-1">o</span></h4>
       <h6 class="text-info">${data.forecast.forecastday[2].day.condition.text}</h6>
        </div>
    
      </div>
    </div>
`

data1.innerHTML=cartouna;
}

function displayData(){
  let date= new Date(`${globalValu.forecast.forecastday[0].date}`)
let date2= new Date(`${globalValu.forecast.forecastday[1].date}`)
let date3= new Date(`${globalValu.forecast.forecastday[2].date}`)

  cartouna=`
  <div class="col-md-4 gx-0">
    <div class="card  text-white border-0">
      <div class="card-header text-center  card3-bg1 d-flex justify-content-between">
     <span> ${weekArr[date.getDay()]}</span>
     <span>${date.getDate()} ${monthArr[date.getMonth()]}</span>
      </div>
      <div class="card-body py-5 card3-bg2 px-3">
        <h5 class="card-title" id="location1">${globalValu.location.name}</h5>
      <h1 class="degreFont m-4 " id="temp1">
        ${globalValu.current.temp_c}<span class="position-relative celesious1 mx-1">o</span>C
      </h1>
     
      <img class="w-25 mb-0" src="${globalValu.current.condition.icon}">
      <h6 class="text-info">${globalValu.current.condition.text}</h6>
      <div class="footer d-flex gap-3 text-white-50">
<div>
  <img src="	https://routeweather.netlify.app/images/icon-umberella.png">
  <span>${globalValu.current.humidity}%</span>
</div>
<div>



 <img src="https://routeweather.netlify.app/images/icon-wind.png">
  <span>${globalValu.current.wind_kph}km/h</span>
</div>
<div>
<img src="https://routeweather.netlify.app/images/icon-compass.png">
  <span>${globalValu.current.wind_dir}</span>
</div>
      </div>
      </div>

    </div>
  </div>
  <div class="col-md-4 gx-0">
    <div class="card text-center text-white border-0 card2 h-100">
      <div class="card-header text-center text-white-50 card2-bg1">
      ${weekArr[date2.getDay()]}
      </div>
      <div class="card-body py-5 card2-bg2 px-3">
       <img class="w-25 mb-3" src="${globalValu.forecast.forecastday[1].day.condition.icon}">
        <h2>${globalValu.forecast.forecastday[1].day.maxtemp_c}
        <span class="position-relative celesious mx-1">o</span>C</h2>
        <h4 class="text-white-50">${globalValu.forecast.forecastday[1].day.mintemp_c}
        <span class="position-relative celesious mx-1">o</span></h4>
     <h6 class="text-info">${globalValu.forecast.forecastday[1].day.condition.text}</h6>
      </div>
  

    </div>

  </div>    <div class="col-md-4 gx-0">
    <div class="card text-center text-white border-0 card2 h-100">
      <div class="card-header text-center text-white-50 card3-bg1">
     ${weekArr[date3.getDay()]}
      </div>
      <div class="card-body py-5 card3-bg2 px-3">
       <img class="w-25 mb-3" src="${globalValu.forecast.forecastday[2].day.condition.icon}">
        <h2>${globalValu.forecast.forecastday[2].day.maxtemp_c}
        <span class="position-relative celesious mx-1">o</span>C</h2>
        <h4 class="text-white-50">${globalValu.forecast.forecastday[2].day.mintemp_c}
        <span class="position-relative celesious mx-1">o</span></h4>
     <h6 class="text-info">${globalValu.forecast.forecastday[2].day.condition.text}</h6>
      </div>
  
    </div>
  </div>
`
data1.innerHTML=cartouna;

}

var good1;
var good2;


( function getLocation(){


  async function succes (position) {
    // console.log(position);
  
    var  latitude1=position.coords.latitude
    var  longitude1=position.coords.longitude
  good1=latitude1
  good2=longitude1
  
  }
  

  
   const error = ()=>{
    console.log("thre is error");
    
   }

 navigator.geolocation.getCurrentPosition (succes,error)


    
})()


async function no(par1,par2){
  var response=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${par1}&longitude=${par2}&localityLanguage=en`)
  var data=await response.json()
  var x= data.city
nol=x

  display1(nol)
}
no(good1,good2)



// if(window.location.pathname=="/index.html"){
//   no(good1,good2)
// }









