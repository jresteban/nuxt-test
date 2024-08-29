<template>
  <article>
    <header class="text-2xl font-bold">Graphic Editor</header>
    <aside class="flex flex-col justify-start items-center gap-4">
      <UButton id="btnDraw" icon="i-material-symbols-edit"></UButton>
      <UButton id="btnCircle" icon="i-material-symbols-circle-outline"></UButton>
      <UButton id="btnClear" icon="i-material-symbols-delete"></UButton>
    </aside>
    <canvas id="canvas" class="w-full h-96 border"></canvas>
  </article>
</template>

<script lang="ts" setup>

const $ = (selector: string) => document.querySelector(selector) as HTMLElement
let isDrawing: Boolean = false
let lastX = 0
let lastY = 0

onMounted(() => {

  const canvas = $('#canvas') as HTMLCanvasElement
  const btnClear = $('#btnClear') as HTMLButtonElement

  // Events
  canvas.addEventListener('mousedown', (e) => startDrawing(e))
  canvas.addEventListener('mousemove', (e) => Draw(e))
  canvas.addEventListener('mouseup', () => stopDrawing())
  btnClear.addEventListener('click', () => clearCanvas())

  // Set canvas
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.lineWidth = 1
    ctx.strokeStyle = 'white'
  }


  // handle functions
  function startDrawing(event: MouseEvent) {
    isDrawing = true
    const { offsetX, offsetY } = event;
    [lastX, lastY] = [offsetX, offsetY]
  }

  function Draw(event: MouseEvent) {
    if (!isDrawing || !ctx) return

    const { offsetX, offsetY } = event;
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
    lastX = offsetX
    lastY = offsetY
  }

  function stopDrawing() {
    isDrawing = false
  }

  function clearCanvas() {
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

})


</script>

<style>
article {
  display: grid;
  grid-template-areas: "header header" "menu canvas";
}

aside {
  grid-area: menu;
}

canvas {
  grid-area: canvas;
}

header {
  grid-area: header;
}
</style>