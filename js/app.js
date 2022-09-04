const API_key = `1aa524cd67033ff2e972ebb0eaf9ecca`

const loadtemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then (data => displaytemperature(data));
}

const displaytemperature = data =>{
    // const temperature = document.getElementById('temp')
    // temperature.innerText = data.main.temp;
    setInnerTextById('temp',data.main.temp);
    setInnerTextById('condition',data.weather[0].main);
    console.log(data.weather[0].main)
}

const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const seachField = document.getElementById('search-field');
    const city = seachField.value;

    document.getElementById('city').innerText = city;

    loadtemperature (city);
})

loadtemperature ('Rajshahi');

