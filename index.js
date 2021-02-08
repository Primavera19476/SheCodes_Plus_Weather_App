      function formatDate(dateValue) {
        let hours = dateValue.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        let minutes = dateValue.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let dayIndex = days[dateValue.getDay()];

        let now = `${dayIndex}, ${hours}:${minutes}`;
        return now;
      }

      function displayWeather(response) {
        console.log(response.data.main.temp);
        let currentTemperature = Math.round(response.data.main.temp);
        let temperatureToday = document.querySelector("#temperature");
        temperature.innerHTML = `${currentTemperature}`;
        document.querySelector("#city").innerHTML = response.data.name;
        document.querySelector("#humidity").innerHTML = response.data.main.humidity;
        document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
        document.querySelector("#description").innerHTML = response.data.weather[0].description;

      }

      function search(event) {
        event.preventDefault();
        let city = document.querySelector("#city-input").value;
        let apiKey = "e43b0a6cd655b887c6853a81917a0cda"
        let unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(displayWeather);
      }


      function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 66;
      }
      function convertToCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 19;
      }

      // Feature #1
      let dateElement = document.querySelector("#date");
      let currentTime = new Date();
      dateElement.innerHTML = formatDate(currentTime);

      // Feature #2
      let searchForm = document.querySelector("#search-form");
      searchForm.addEventListener("submit", search);

      // Bonus Feature
      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.addEventListener("click", convertToFahrenheit);
      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", convertToCelsius);