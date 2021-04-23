const { default: axios } = require("axios");

function axiosAPIcall() {

axios
  .get("http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=903fe12dc34a424eb33214726212204&q=21.66007,-158.056316&format=json&includelocation=yes&date=2021-04-01&enddate=2021-04-22")
  .then(response => {
    console.log(response.data);
   })
  .catch(error => console.error(error));

}

axiosAPIcall()