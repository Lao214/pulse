<template>
  <div>
    <Mobile v-show="!flag" v-if="windowWidth <= 720" @sumbit="sumbit"></Mobile>
    <PCwin v-show="!flag" v-if="windowWidth > 720" @sumbit="sumbit"></PCwin>
    <div v-show="flag" class="body">
      <svg width="400" height="400" :style="'transform:scale('+ tickScale +') ;'">
        <circle fill="none" stroke="#33a474" stroke-width="20" cx="200" cy="200" r="190" class="circle" stroke-linecap="round" transform="rotate(-90 200 200) "/>
        <polyline fill="none" stroke="#33a474" stroke-width="24" points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round" class="tick" />
      </svg>

      <h2 class="h2">提 交 成 功 !</h2>
    </div>
  </div>
</template>

<script>
import Mobile from "@/components/Mobile"
import PCwin from "@/components/IndexPC"

export default {
  components: {
    Mobile,
    PCwin
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      flag: false,
      tickScale: 1.0
    }
  },
  created() {
    if(this.windowWidth <= 600 && this.windowWidth > 500) {
      this.tickScale = 0.81
    } else if(this.windowWidth <= 500 && this.windowWidth > 400) {
      this.tickScale = 0.72
    } else if(this.windowWidth <= 400 && this.windowWidth > 300) {
      this.tickScale = 0.63
    } else if (this.windowWidth < 300) {
      this.tickScale = 0.47
    }
  },
  methods: {
    sumbit() {
      this.flag = true
    }
  }
}
</script>

<style scoped>
   .body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
    }

    .h2 {
      font-family: Helvetica;
      font-size: 36px;
      margin-top: 40px;
      color: #333;
      opacity: 0;
      animation: .6s title ease-in-out;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;
    }

    /* input[type="checkbox"]:checked ~ h2 {
      animation: .6s title ease-in-out;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;
    } */

    .circle {
      stroke-dasharray: 1194;
      stroke-dashoffset: 1194;
      animation: circle 1s ease-in-out;
      animation-fill-mode: forwards;
    }

    /* input[type="checkbox"]:checked + svg .circle {
      animation: circle 1s ease-in-out;
      animation-fill-mode: forwards;
    } */

    .tick {
      stroke-dasharray: 350;
      stroke-dashoffset: 350;
      animation: tick .8s ease-out;
      animation-fill-mode: forwards;
      animation-delay: .95s;
    }
/* 
    input[type="checkbox"]:checked + svg .tick {
   
    } */

    @keyframes circle {
      from {
        stroke-dashoffset: 1194;
      }
      to {
        stroke-dashoffset: 2388;
      }
    }

    @keyframes tick {
      from {
        stroke-dashoffset: 350;
      }
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes title {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
</style>