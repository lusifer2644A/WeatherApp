function loadData(city) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f7163bce678c3e803c9529c47b925b2`,
    }).done(function (data) {
        $("#city_name").text(data.name);

        //change side area
        $("#weather_icon")
            .removeClass()
            .addClass(`wi wi-day-${data.weather[0].description} icon-large`);

        $("#weather_desc").text(`
                    It's ${data.weather[0].description} today!
                `);

        console.log(data);
    });
}

$(document).ready(() => {
    loadData("Mumbai");
});

$("#search_button").click(function () {
    loadData($("#search").val());
});
