<script>

</script>

<style lang="scss">
  .weather-forecast-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    display: flex;
    font-family: "Poppins", sans-serif;
    position: relative;
    & > .weather__status {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      & > .temperature {
        width: 45rem;
        height: 45rem;
        border-radius: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        background: rgba(85, 84, 84, 0.5);
        // align-items: center;
        // justify-content: center;
        color: #fff;
        & > .icon {
          font-size: 8rem;
          margin: 0;
        }
        & > .tem {
          font-size: 15rem;
          margin-top: -4rem;
        }
        & > .desc {
          font-size: 4rem;
          text-transform: uppercase;
          margin-top: -1rem;
        }
      }
    }
    & > .weather__forecast {
      background: rgba(54, 51, 44, 0.4);
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #fff;
      //   justify-content: center;
      //   align-items: center;
      & > .forecast {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 3rem;
        & > p {
          margin: 0.5rem;
        }
        & > .day {
          text-transform: capitalize;
        }
        & > .icon {
          background: rgb(6, 1, 20);
          width: 4rem;
          height: 4rem;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
    }
    & > .curret-clock-time {
      background: transparent;
      border-top: 2px solid #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.5rem 0;
      width: 80%;
      margin: auto auto;
      display: flex;
      justify-content: space-around;
      color: #fff;
      text-transform: uppercase;
      font-size: 3rem;
    }
  }
  @media all and(max-width:600px) {
    .weather-forecast-wrapper {
      .weather__status {
        & > .temperature {
          width: 15rem;
          height: 15rem;
          color: #fff;
          & > .icon {
            font-size: 4rem;
            margin: 0;
          }
          & > .tem {
            font-size: 3rem;
            margin-top: -1rem;
          }
          & > .desc {
            font-size: 1.5rem;
            // margin-top: -1rem;
          }
        }
      }
      & > .weather__forecast {
        & > .forecast {
          font-size: 1rem;
          & > p {
            margin: 0.5rem;
          }
          & > .icon {
            width: 2rem;
            height: 2rem;
            img {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
      & > .curret-clock-time {
        font-size: 1rem;
      }
    }
  }
  @media all and(max-width:700px) {
    .weather-forecast-wrapper {
      .weather__status {
        & > .temperature {
          width: 25rem;
          height: 25rem;
          color: #fff;
          & > .icon {
            font-size: 4rem;
            margin: 0;
          }
          & > .tem {
            font-size: 3rem;
            margin-top: -1rem;
          }
          & > .desc {
            font-size: 1.5rem;
            // margin-top: -1rem;
          }
        }
      }
      & > .weather__forecast {
        & > .forecast {
          font-size: 1rem;
          & > p {
            margin: 0.5rem;
          }
          & > .icon {
            width: 2rem;
            height: 2rem;
            img {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
      & > .curret-clock-time {
        font-size: 1rem;
      }
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap"
    rel="stylesheet" />
</svelte:head>
<section
  class="weather-forecast-wrapper"
  style="background-image:url('https://cdn.pixabay.com/photo/2014/12/15/13/16/road-569013_960_720.jpg')">
  <div class="weather__status">
    <div class="temperature">
      <span class="icon">&#9830;</span>
      <span class="tem">32&#176;F</span>
      <span class="desc">partial clouds</span>
    </div>
  </div>
  <div class="weather__forecast">
    {#each ['sunday', 'monday', 'tuesday'] as item}
      <div class="forecast">
        <p class="day">{item}</p>
        <p class="icon">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        </p>
        <p class="tem">30&#176;F</p>
      </div>
    {/each}
  </div>
  <div class="curret-clock-time">
    <div>20 : 20 pm - february 12</div>
    <div class="brand-logo">logo</div>
  </div>
</section>
