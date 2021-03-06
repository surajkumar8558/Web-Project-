const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Plz Enter Something to get data`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8ebc05fa19117bdd7e02931bfe720904`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;

      if (tempMood === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style ='color: #eccc68;' ></i>";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style ='color: #f1f2f6;' ></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style ='color: #a4b0be;' ></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style ='color: #eccc68;' ></i>";
      }
    } catch {
      city_name.innerText = `Plz Type City Name Correctly`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);
