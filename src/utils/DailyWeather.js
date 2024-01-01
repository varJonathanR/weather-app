export function DailyWeather(data) {
    const dailyWeather = [];
    const currentDate = new Date().toLocaleDateString();

    data?.list.forEach((forecast) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const existingItem = dailyWeather.find((item) => item.date === date);

        if (!existingItem && date !== currentDate && dailyWeather.length < 5) {
            dailyWeather.push({
                date,
                totalTemp: forecast.main.temp,
                dt: forecast.dt,
                main: forecast.weather[0].main,
                desc: forecast.weather[0].description,
                temp_max: forecast.main.temp_max,
                temp_min: forecast.main.temp_min,
                count: 1,
            });
        } else if (existingItem) {
            existingItem.totalTemp += forecast.main.temp;
            existingItem.count++;
        }
    });

    dailyWeather.forEach((item) => {
        item.dailyProm = item.totalTemp / item.count;
        delete item.totalTemp;
    });

    return dailyWeather;
}