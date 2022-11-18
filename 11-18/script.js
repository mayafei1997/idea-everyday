const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');
//size初始值 10  
let size = 10
//isPressed 是否按下鼠标
let isPressed = false
//input初始值 黑色  input的value值赋值给 color
colorEl.value = 'black'
let color = colorEl.value
//坐标
let x
let y
 //按下鼠标事件
canvas.addEventListener('mousedown', (e) => {
   
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

//鼠标抬起 x y 失效
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})


canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

//更新 span里面的值 就是 粗细size
function updateSizeOnScreen() {
    sizeEL.innerText = size
}
//减号按钮绑定事件  size－5 以后 更新size的值
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

// 加号按钮  
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

//改变 input 里面选的颜色值 
colorEl.addEventListener('change', (e) => color = e.target.value)

//清除画布  起点x  起点y轴  宽度  高度 
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
