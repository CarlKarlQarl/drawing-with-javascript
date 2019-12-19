const canvas = document.querySelector(".myCanvas")
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

// black background
ctx.fillStyle = "rgb(0,0,0)"
ctx.fillRect(0, 0, width, height)

// red square, centered
ctx.fillStyle = "rgb(255,0,0)"
ctx.fillRect((width/2)-25, (height/2)-25, 50, 50)

// green square
ctx.fillStyle = "rgb(0,255,0)"
ctx.fillRect(75, 75, 100, 100)

ctx.fillStyle = "rgba(0,0,255, 0.5)"
ctx.fillRect(width/12, height/12, 60, 60)

ctx.strokeStyle = "rgb(255,255,255)"
ctx.strokeRect(0,0,175,200)