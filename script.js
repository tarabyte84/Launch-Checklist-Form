window.addEventListener("load", function() {
   console.log("window loaded");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
               response.json().then( function(json) {
                  const missionTarget = document.getElementById("missionTarget");
                  missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[5].name}</li>
                        <li>Diameter: ${json[5].diameter}</li>
                        <li>Star: ${json[5].star}</li>
                        <li>Distance from Earth: ${json[5].distance}</li>
                        <li>Number of Moons: ${json[5].moons}</li>
                     </ol>
                     <img src="${json[5].image}">
                  `;
               });
            });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");


      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      };

      if (!isNaN(pilotName.value)) {
         alert("Please enter a valid name for pilot.");
      };

      if (!isNaN(copilotName.value)) {
         alert("Please enter a valid name for copilot.");
      }
      
      if (isNaN(fuelLevel.value)) {
         alert("Please enter a number for fuel level.");
      };

      if (isNaN(cargoMass.value)) {
         alert("Please enter a number for cargo mass.");
         // event.preventDefault();
      };

      event.preventDefault();

      pilotStatus.innerHTML = `${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `${copilotName.value} is ready for launch`;

      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if (cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for take off.";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }



      
   });
});

