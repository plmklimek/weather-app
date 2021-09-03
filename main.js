//api.openweathermap.org/data/2.5/weather?q={city name}&appid=67c435829e2ab850b150cd57cbc6d845
/*
   var tag = document.createElement("p");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);
   */
   const textInput = document.querySelector(".textInput");
   const text = document.querySelector(".text");
   const textContainer = document.querySelector(".textContainer")
   const setText = e => {
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&appid=67c435829e2ab850b150cd57cbc6d845")
       .then(response => {
     response.json().then(res => {
         console.log(res)
         textContainer.innerHTML = "";
         // name = res.name;
         // pressure = res.main.pressure;
         // temp = res.main.temp;
         if(res.coord){
           let nameSpan = document.createElement("span");
           nameSpan.innerHTML = `Pogoda dla: ${res.name}`;
           nameSpan.classList.add("text");
           textContainer.appendChild(nameSpan);
   
           let pressureSpan = document.createElement("span");
           pressureSpan.innerHTML = `Ciśnienie: ${res.main.pressure}`;
           pressureSpan.classList.add("text");
           textContainer.appendChild(pressureSpan);
   
           let tempSpan = document.createElement("span");
           tempSpan.innerHTML = `Temperatura: ${res.main.temp}`;
           tempSpan.classList.add("text");
           textContainer.appendChild(tempSpan);
         }
       else{
           let errorSpan = document.createElement("span");
           errorSpan.innerHTML = `Nie znaleziono miasta`;
           errorSpan.classList.add("text");
           textContainer.appendChild(errorSpan);
       }
   
       });
     })
       .then(data => console.log(data));
   }
   textInput.addEventListener("input", setText, false);