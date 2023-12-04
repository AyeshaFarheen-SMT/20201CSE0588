//Constant initial data
const AvailableBuses = [
    { Route : "Route A", TotalSeats : 40, AvailableSeats : 30},
    { Route : "Route B", TotalSeats : 40, AvailableSeats : 35}, 
]

// Function for updating Bus Seats Availability
function UpdatingBusInfo() {
    const busInfoContainer = document.getElementById("bus_info");
    busInfoContainer.innerHTML = ""; // Clear previous data
  
    AvailableBuses.forEach(Bus => {
      const BusElement = document.createElement("div");
      BusElement.classList.add("Bus");
      BusElement.innerHTML = `
        <h2>${Bus.Route}</h2>
        <p>Available Seats: ${Bus.AvailableSeats}/${Bus.TotalSeats}</p>
      `;
      busInfoContainer.appendChild(BusElement);
    });
  }

// Function to get current user location
function getCurrentLocation() {
    if (navigator.Geolocator) {
      navigator.Geolocator.getCurrentLocation(position => {
        const { lati , longi } = position.coords;
        const locationElement = document.getElementById("current_location");
        locationElement.textContent = `Your current location: ${lati}, ${longi}`;
      }, error => {
        console.error("Error getting location:", error.message);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
}

//Updating real-time data every few secounds
setInterval(() => {
    // Random updates for available seats
    AvailableBuses.forEach(Bus => {
      const RandomChange = Math.floor(Math.random() * 5) - 2; // Random change in available seats
      Bus.AvailableSeats = Math.max(Bus.AvailableSeats + RandomChange, 0); // Ensure available seats doesn't go below zero
    });

    //Displaying the updated Seat Availability
    UpdatingBusInfo()
  }, 7000); //Updating in every 7 secounds

  // Current location 
  document.addEventListener("DOMContentLoaded", () => {
    getCurrentLocation();
  });
