window.onload = function () {
    const keyAPI = '09d9181db657691a7f0679fb629d686f';
    var bg_gif = document.querySelector('.today_weather');
    var now = new Date();
    document.querySelector('.submit').onclick = btn_search; // Разобраться с классом и id
    const cloudweath = 'img/cloud/cloud.gif';
    const rainweath = 'img/rain/rain.gif';
    const clearweath = 'img/clear/clearSky.gif';
    const snowweath = 'img/snow/snow.gif';
    const drizweath = 'img/drizzle/drizzle.gif';

    function btn_search () {
        const cityName_inp = document.querySelector('.input_search').value; // Разобраться, можно ли это решить с классом, а не id
        if(cityName_inp !== "") {
            document.querySelector('.wrapper').style.display = 'block';
            document.querySelector('.start').style.display = 'none';
            console.log(cityName_inp); 
    
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName_inp}&appid=${keyAPI}`)
                .then(function (resp) {return resp.json() })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('.city_name').textContent = data.name;
                    document.querySelector('#today_real_temp').innerHTML += Math.round(data.main.temp - 273) + '&deg';
                    document.querySelector('#today_feelslike_temp').innerHTML += Math.round(data.main.feels_like - 273) + '&deg';
                    document.querySelector('.today_weather_conditions').textContent = data.weather[0]['description'];
                    switch (data.weather[0]['main']) {
                        case 'Clouds':
                            bg_gif.style.background = `rgba(0, 0, 0, 0.4) url(${cloudweath})`;
                            break;
                        case 'Clear':
                            bg_gif.style.background = `rgba(0, 0, 0, 0.4) url(${clearweath})`;
                            break;
                        case 'Rain':
                            bg_gif.style.background = `rgba(0, 0, 0, 0.4) url(${rainweath})`;
                            break;
                        case 'Snow':
                            bg_gif.style.background = `rgba(0, 0, 0, 0.4) url(${snowweath})`;
                            break;
                        case 'Drizzle':
                            bg_gif.style.background = `rgba(0, 0, 0, 0.4) url(${drizweath})`;
                            break;
                    }
                })
    
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName_inp}&appid=${keyAPI}`)
                .then(function (resp) {return resp.json() })
                .then(function (data) {
                    console.log(data);
                    console.log(now.getFullYear(), now.getMonth(), now.getDate());
                    console.log(data.list[0].dt_txt)
                    // if (data.list[4].dt_txt == now.getFullYear(), now.getMonth(), now.getDate() + 1){
                    //     console.log('true');
                    // }
                    // else 
                    //     console.log('false');

                    for(let i = 0; i <= data.list.length; i++) {
                        switch (now.getFullYear()) {
                            case 'data.list[i].dt_txt':
                        }
                    }
                })
        }
        else {
            console.log('Error');
        }
        
    }
}