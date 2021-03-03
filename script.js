window.onload = function () {
    const keyAPI = '09d9181db657691a7f0679fb629d686f';

    document.getElementById('btn_search').onclick = btn_search;

    function btn_search () {
       const cityName_inp = document.querySelector('#city').value;
       document.querySelector('.wrapper').style.display = 'block'; 

       fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName_inp}&appid=${keyAPI}`)
        .then(function (resp) {return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city_name').textContent = data.name;
            document.querySelector('#today_real_temp').innerHTML += Math.round(data.main.temp - 273) + '&deg';
            document.querySelector('#today_feelslike_temp').innerHTML += Math.round(data.main.feels_like - 273) + '&deg';
            document.querySelector('.today_weather_conditions').textContent = data.weather[0]['description'];
        })

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName_inp}&appid=${keyAPI}`)
        .then(function (resp) {return resp.json() })
        .then(function (data) {
            console.log(data);
        })

        function location (location) {

        } 
    }
}