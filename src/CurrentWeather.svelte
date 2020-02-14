<script>
  import { onMount } from "svelte";
  export let weather_data;

  $: {
    console.log("response data current component ::", weather_data);
  }
</script>

<style lang="scss">
  .weather-section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    &::after {
      content: "";
      background: rgba(17, 2, 2, 0.3);
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
    .weather__content {
      color: #fff;
      display: flex;
      flex-direction: column;
      &--temperature {
        font-size: 30rem;
        font-family: "Gelasio";
        display: flex;
        align-items: center;
        justify-content: center;
        & > span:last-child {
          font-size: 25rem;
        }
      }
      &--desc {
        font-size: 10rem;
        align-self: center;
        margin-top: -5rem;
        text-transform: uppercase;
      }
      &--country {
        font-size: 4rem;
        align-self: center;
        font-weight: 300;
      }
      &--date-and-time {
        position: absolute;
        background: rgba(255, 69, 0, 0.2);
        height: 8rem;
        width: 15rem;
        border-bottom-right-radius: 20rem;
        left: 0;
        top: 0;
        margin: 0;
        text-align: center;
        align-items: center;
        & > .time {
          font-size: 4rem;
        }
      }
      & > .icon {
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(255, 69, 0, 0.2);
        height: 12rem;
        width: 15rem;
        border-bottom-left-radius: 20rem;
        img {
          align-self: flex-end;
          width: 10rem;
          height: 10rem;
        }
      }
    }
  }
  @media all and(max-width:1800px) {
    .weather-section {
      align-items: center;
      .weather__content {
        &--temperature {
          font-size: 22rem;
          & > span:last-child {
            font-size: 18rem;
          }
        }
        &--desc {
          font-size: 10rem;
          margin-top: -3rem;
        }
        &--date-and-time {
          height: 5rem;
          width: 11rem;
          & > .time {
            font-size: 3rem;
          }
          & > .status {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
  @media all and(max-width:1100px) {
    .weather-section {
      align-items: center;
      .weather__content {
        &--temperature {
          font-size: 20rem;
          & > span:last-child {
            font-size: 15rem;
          }
        }
        &--desc {
          font-size: 8rem;
          margin-top: -4rem;
        }
        &--date-and-time {
          height: 5rem;
          width: 10rem;
          & > .time {
            font-size: 2.5rem;
          }
          & > .status {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media all and(max-width:600px) {
    .weather-section {
      align-items: center;
      .weather__content {
        &--temperature {
          font-size: 15rem;
          & > span:last-child {
            font-size: 10rem;
          }
        }
        &--desc {
          font-size: 5rem;
          margin-top: -3rem;
        }

        &--date-and-time {
          height: 4rem;
          width: 8rem;
          top: 0;
          & > .time {
            font-size: 2rem;
          }
        }
      }
    }
  }
</style>

<section
  class="weather-section"
  style="background-image:url('https://cdn.pixabay.com/photo/2013/07/04/13/24/cloud-143152_960_720.jpg')">
  {#if weather_data}
    <div class="weather__content">
      <div class="weather__content--temperature">
        <span class="tem">{weather_data.main.temp}</span>
        <span class="degree">&#176;</span>
        <span class="units">C</span>
      </div>
      <div class="weather__content--desc">
        {weather_data.weather[0].description}
      </div>
      <div class="weather__content--country">
        {weather_data.name},{weather_data.sys.country}
      </div>
      <p class="weather__content--date-and-time">
        <span class="time">20:10</span>
        <sup>pm</sup>
      </p>
    </div>
  {/if}
</section>
