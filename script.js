window.onload = function () {
    document.getElementById('btn_search').onclick = btn_search;

    function btn_search () {
       document.querySelector('.wrapper').style.display = 'block';
       
    }

    fetch('http://api.openweathermap.org/data/2.5/weather?id=498817&appid=09d9181db657691a7f0679fb629d686f')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city_name').textContent = data.name;
        document.querySelector('.today_degrees').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.today_weather_conditions').textContent = data.weather[0]['description'];
    })
}