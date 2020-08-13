<template>
  <div class="wrapper">
    <div :class="{ spin: spin }" class="cube">
      <div class="ft"></div>
      <div class="rt">></div>
      <div class="bk">></div>
      <div class="lt">></div>
      <div class="tp">></div>
      <div class="bm">></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cube',
  props: {
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.cube {
  --width: 40vw;
}

@media all and (min-width: 450px) {
  .cube {
    --width: 30vw;
  }
}
@media all and (min-width: 720px) {
  .cube {
    --width: 20vw;
  }
}

.wrapper {
  position: absolute;
  top: 125%;
  left: 50%;
  z-index: 20;
  transform-style: preserve-3d;
  transform: translateZ(1000px);
  transition: top 2s;
}

.cube {
  visibility: hidden;
  width: var(--width);
  transform-style: preserve-3d;
  transform: translateX(-50%) rotateX(-5deg) rotateY(-30deg);
  height: var(--width);
  transition: all 1s;
}
.show {
  top: 50%;
}

.show .cube {
  visibility: visible;
}

.cube > div {
  z-index: 30;
  position: absolute;
  width: var(--width);
  height: var(--width);
  background-color: #000;
}

.cube .ft {
  transform: translateZ(calc(var(--width) / 2));
}
.cube .rt {
  transform: rotateY(90deg) translateZ(calc(var(--width) / 2));
}
.cube .bk {
  transform: rotateY(180deg) translateZ(calc(var(--width) / 2));
}
.cube .lt {
  transform: rotateY(270deg) translateZ(calc(var(--width) / 2));
}
.cube .tp {
  transform: rotateX(90deg) translateZ(calc(var(--width) / 2));
}
.cube .bm {
  transform: rotateX(270deg) rotateY(0deg) translateZ(calc(var(--width) / 2));
}

/*animations*/
.cube.spin {
  animation: spin 2s ease-in-out;
}

@keyframes spin {
  0% {
    transform: translateX(-50%) rotateX(150deg) rotateY(150deg);
  }
  70% {
    transform: translateX(-50%) rotateX(-5deg) rotateY(-30deg);
  }
  100% {
    transform: translateX(-50%) rotateX(-5deg) rotateY(-30deg);
  }
}
</style>
