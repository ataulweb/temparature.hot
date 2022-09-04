const API_key = `1aa524cd67033ff2e972ebb0eaf9ecca`

const loadtemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then (data => displaytemperature(data));
}

const displaytemperature = data =>{
    const temperature = document.getElementById('temp')
    temperature.innerText = data.main.temp;
}

loadtemperature ('Rajshahi')