<template>
  <svg
    class="fill-current text-ocher inline-block h-12 w-12 shake"
    viewBox="0 0 18 28"
  >
    <path
      d="M16.797 11.5c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.219-0.156 0.359-0.156 0.125 0 0.266 0.063 0.359 0.156l6.141 6.141 6.141-6.141c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.234 0.156 0.359z"
    ></path>
  </svg>
</template>

<script>
export default {}
</script>

<style>
/* http://waitanimate.wstone.io/#!/ */
.shake {
  animation: shake-animation 4.72s ease infinite;
  transform-origin: 50% 50%;
}
@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(0, 3px);
  }
  3.57143% {
    transform: translate(0, -2px);
  }
  5.35714% {
    transform: translate(0, 5px);
  }
  7.14286% {
    transform: translate(0, -2px);
  }
  8.92857% {
    transform: translate(0, 3px);
  }
  10.71429% {
    transform: translate(0, -2px);
  }
  12.5% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
