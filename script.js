window.onload = function () {
    const keyAPI = '09d9181db657691a7f0679fb629d686f';

    var bg_gif = document.querySelector('.today_weather');
    var now = new Date();

    document.querySelector('#btn_search').onclick = btn_search;
    document.querySelector('#btn_search_top').onclick = btn_search_top;

    const cloudweath = 'img/cloud/cloud.gif';
    const rainweath = 'img/rain/rain.gif';
    const clearweath = 'img/clear/clearSky.gif';
    const snowweath = 'img/snow/snow.gif';
    const drizweath = 'img/drizzle/drizzle.gif';

    function btn_search () {
        const cityName_inp = document.querySelector('#city').value;
        main(cityName_inp);
        document.querySelector('#city').value = "";
    }

    function btn_search_top() {
        const cityName_inp = document.querySelector('#city_top').value;
        main(cityName_inp);
        document.querySelector('#city_top').value = "";
    }

    function main(cityName_inp) {
        
        if(cityName_inp !== "") {
            document.querySelector('.wrapper').style.display = 'block';
            document.querySelector('.start').style.display = 'none';

            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName_inp}&appid=${keyAPI}`)
                .then(function (resp) {
                    return resp.json() 
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('.city_name').textContent = data.name;
                    document.querySelector('#today_real_temp').innerHTML = 'Now: ' + Math.round(data.main.temp - 273) + '&deg';
                    document.querySelector('#today_feelslike_temp').innerHTML = 'Feels like: ' + Math.round(data.main.feels_like - 273) + '&deg';
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
                .then(function (resp) {
                    return resp.json() 
                })
                .then(function (data) {
                    console.log(data);

                    var nowHour = now.getHours();
                    
                    if (nowHour >= 00 && nowHour < 03) {
                        FourDayForecast(8);
                    }
                    else if (nowHour >= 03 && nowHour < 06) {
                        FourDayForecast(7);
                    }
                    else if (nowHour >= 06 && nowHour < 09) {
                        FourDayForecast(6);
                    }
                    else if (nowHour >= 09 && nowHour < 12) {
                        FourDayForecast(5);
                    }
                    else if (nowHour >= 12 && nowHour < 15) {
                        FourDayForecast(4);
                    }
                    else if (nowHour >= 15 && nowHour < 18) {
                        FourDayForecast(3);
                    }
                    else if (nowHour >= 18 && nowHour < 21) {
                        FourDayForecast(2);
                    }
                    else if (now.getHours() >= 21 && now.getHours() < 24) {
                        FourDayForecast(1);
                    }


                    function FourDayForecast(num) {

                        //Today weather
                        document.querySelector('.today_date').textContent = (data.list[0].dt_txt).substr(0, 10);

                        // Tomorrow weather
                        document.querySelector('#tomorrow_date').textContent = (data.list[num+2].dt_txt).substr(0, 10);
                        document.querySelector('#tomorrow_morning_temp').innerHTML = '6:00 ' + Math.round(data.list[num+2].main.temp - 273) + '&deg';
                        document.querySelector('#tomorrow_day_temp').innerHTML = '12:00 ' + Math.round(data.list[num+4].main.temp - 273) + '&deg';
                        document.querySelector('#tomorrow_evening_temp').innerHTML = '18:00 ' + Math.round(data.list[num+6].main.temp - 273) + '&deg';
                        
                        // Day 3 weather
                        document.querySelector('#day3_date').textContent = (data.list[num+10].dt_txt).substr(0, 10);
                        document.querySelector('#day3_morning_temp').innerHTML = '6:00 ' + Math.round(data.list[num+10].main.temp - 273) + '&deg';
                        document.querySelector('#day3_day_temp').innerHTML = '12:00 ' + Math.round(data.list[num+12].main.temp - 273) + '&deg';
                        document.querySelector('#day3_evening_temp').innerHTML = '18:00 ' + Math.round(data.list[num+14].main.temp - 273) + '&deg';
                
                        // Day 4 weather
                        document.querySelector('#day4_date').textContent = (data.list[num+18].dt_txt).substr(0, 10);
                        document.querySelector('#day4_morning_temp').innerHTML = '6:00 ' + Math.round(data.list[num+18].main.temp - 273) + '&deg';
                        document.querySelector('#day4_day_temp').innerHTML = '12:00 ' + Math.round(data.list[num+20].main.temp - 273) + '&deg';
                        document.querySelector('#day4_evening_temp').innerHTML = '18:00 ' + Math.round(data.list[num+22].main.temp - 273) + '&deg';
                
                        // Day 5 weather
                        document.querySelector('#day5_date').textContent = (data.list[num+26].dt_txt).substr(0, 10);
                        document.querySelector('#day5_morning_temp').innerHTML = '6:00 ' + Math.round(data.list[num+26].main.temp - 273) + '&deg';
                        document.querySelector('#day5_day_temp').innerHTML = '12:00 ' + Math.round(data.list[num+28].main.temp - 273) + '&deg';
                        document.querySelector('#day5_evening_temp').innerHTML = '18:00 ' + Math.round(data.list[num+30].main.temp - 273) + '&deg';
                    }

                })
        }
        else {
            console.log('Error');
        }
    }
}





// 01d - sunny
// 02d - переменная облачнось
// 03d - облачно
// 04d - какие-то грозовые тучки
// 50d - misty