 async  function getAllCities(){
 let apiUsa= await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(response=>{return response.json()}).catch(error=>{return error});
 
 //console.log(apiUsa)
 return apiUsa;

}
// getAllCities();
async function findOne(){   
    let uuu = await getAllCities();
    let html ='';
    uuu.forEach(element => {
       let htmlSegment=''
        if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) || element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
        {
            console.log(element);
            htmlSegment=`<div class="city">
            <h1>State:${element.state}</h1>
            <h2>City:${element.city} </h2>
            <h2>Latitude:${element.latitude}</h2>
            <h2>Longitude:${element.longitude}</h2>
            <h2>Population:${element.population}</h2>
            <h2>Rank:${element.rank}</h2>
            <h2>Growth:${element.growth_from_2000_to_2013}</h2>
        </div>`;
        html += htmlSegment;
        }
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}