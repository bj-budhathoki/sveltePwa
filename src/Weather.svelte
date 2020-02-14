<script>
  import { onMount } from "svelte";
  import CurrentWeather from "./CurrentWeather.svelte";
  import ForecastWeather from "./ForecastWeather.svelte";
  const WEATHER_API_KEY = "90e6b8851083a28e1833cb9b089af65b";
  let weather_data;
  onMount(async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=kathmandu,NP&appid=${WEATHER_API_KEY}&units=metric`
    );
    let data = await response.json();
    weather_data = data;
  });
  $: {
    console.log("open api response ::", weather_data);
  }
</script>

<CurrentWeather {weather_data} />
