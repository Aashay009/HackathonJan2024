// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch weather information using OpenWeatherMap API
    function getWeather(latitude, longitude) {
      const apiKey = 'ae55c8b0f3356cc0051ae2e0db47ba0b'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Extract relevant weather information
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const humidity = data.main.humidity;
          const pressure = data.main.pressure;
          const precipitation = data.rain ? data.rain["1h"] : (data.snow ? data.snow["1h"] : 0);



          const dateTime = new Date();
        const date = dateTime.toDateString();
        const time = dateTime.toLocaleTimeString();
  
          // Update weather information on the webpage
          document.getElementById("weather-info").innerHTML = `
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Pressure: ${pressure} hPa</p>
            <p>Precipitation: ${precipitation} mm</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  
    // Function to handle location retrieval
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          // Call the getWeather function with obtained coordinates
          getWeather(latitude, longitude);
        }, error => {
          console.error('Error getting user location:', error);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  
    // Call getLocation function when the page loads
    getLocation();
  });
  