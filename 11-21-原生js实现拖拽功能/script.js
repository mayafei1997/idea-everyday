//拿到图片盒子
const fill = document.querySelector('.fill')
//所有的容器盒子
const empties = document.querySelectorAll('.empty')
//111 鼠标点住 且开始被拖拽  被拖拽元素 触发事件 给被拖拽元素加个边框 
fill.addEventListener('dragstart', dragStart)

//3.2 鼠标在拖放目标上释放时  被拖拽元素触发事件 变回原来的盒子（只有类名fill）
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    //2.1 拖拽时鼠标进入 目标元素上时 触发事件 阻止浏览器默认行为 
    empty.addEventListener('dragover', dragOver)

    //2.2 拖拽元素时 鼠标位于某一个目标元素里面 时触发事件 此时目标元素是灰色背景 和白色边框
    empty.addEventListener('dragenter', dragEnter)

    // 2.3拖拽时 鼠标移出目标元素了  此时可以取消前面设置的效果 变为以前的盒子
    empty.addEventListener('dragleave', dragLeave)

    //3.1鼠标在拖放目标上 释放时  把图片（就是fill盒子）加到 目标元素里面
    empty.addEventListener('drop', dragDrop)
}

//开始拖拽时  
function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}
// 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}