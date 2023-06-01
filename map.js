document.querySelectorAll(".allPath").forEach(worldMap => {
    worldMap.addEventListener("mouseover", function () {
      worldMap.style.fill = "green"
    })
    worldMap.addEventListener("mouseleave", function () {
      worldMap.style.fill = "black"
       
    })

    worldMap.addEventListener("click",function(){
        async function getData(){
          let url= 'https://api.worldbank.org/V2/country/'+worldMap.id+'?format=json'
          let response = await fetch(url);
          let data = await response.json();
          let dataPath = data[1]
          let countryName = dataPath[0].name
          document.getElementById("namep").innerText = countryName
          let countryCapitol = dataPath[0].capitalCity
          document.getElementById("cap").innerText = countryCapitol
          let countryRegion = dataPath[0].region.value
          document.getElementById("reg").innerText = countryRegion
          let countryIncome = dataPath[0].incomeLevel.value
          document.getElementById("income").innerText = countryIncome
          let countryLong = dataPath[0].longitude
          document.getElementById("long").innerText = countryLong
          let countryLat = dataPath[0].latitude
          document.getElementById("lat").innerText = countryLat
          
          }
          getData()
        })


})
