<script setup>
  const backgroundColor = ref('')

  // Define colors using RGB code
  const colors = [
    [62, 166, 167],
    [114, 44, 175],
    [238, 188, 73],
    [41, 178, 83],
    [255, 56, 63],
    [247, 114, 38],
  ]

  let step = 0
  const colorIndices = [0, 1, 2, 3]
  const gradientSpeed = 0.002

  onMounted(() => {
    const updateGradient = () => {
      backgroundColor.value = getGradientColor()
      requestAnimationFrame(updateGradient)
    }

    requestAnimationFrame(updateGradient)
  })

  // Get gradient color using linear interpolation
  const getGradientColor = () => {
    const c0_0 = colors[colorIndices[0]]
    const c0_1 = colors[colorIndices[1]]
    const c1_0 = colors[colorIndices[2]]
    const c1_1 = colors[colorIndices[3]]

    const istep = 1 - step
    const r1 = Math.round(istep * c0_0[0] + step * c0_1[0])
    const g1 = Math.round(istep * c0_0[1] + step * c0_1[1])
    const b1 = Math.round(istep * c0_0[2] + step * c0_1[2])
    const color1 = `rgb(${r1}, ${g1}, ${b1})`

    const r2 = Math.round(istep * c1_0[0] + step * c1_1[0])
    const g2 = Math.round(istep * c1_0[1] + step * c1_1[1])
    const b2 = Math.round(istep * c1_0[2] + step * c1_1[2])
    const color2 = `rgb(${r2}, ${g2}, ${b2})`

    const gradient = `linear-gradient(to right, ${color1}, ${color2})`

    step += gradientSpeed
    if (step >= 1) {
      step %= 1
      colorIndices[0] = colorIndices[1]
      colorIndices[2] = colorIndices[3]

      // Pick two new target color indices
      // Do not pick the same as the current one
      colorIndices[1] =
        (colorIndices[1] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length
      colorIndices[3] =
        (colorIndices[3] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length
    }
    return gradient
  }
</script>

<template>
  <div class="background" :style="{ backgroundImage: backgroundColor }">
    <div class="img-wrapper">
      <img src="~/assets/logo.png" />
    </div>
    <div class="content">
      <h1>Recambrian</h1>
      <p>A launchpad for ideas</p>
    </div>
  </div>
</template>

<style scoped>
  .background {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-wrapper {
    animation: grow-shrink 10s ease-in-out infinite;
    transform-origin: 50% 50%;
    height: 60%;
  }

  .content {
    color: white;
    text-align: center;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 16px;
  }

  img {
    height: 100%;
    width: 100%;
  }

  @keyframes grow-shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
