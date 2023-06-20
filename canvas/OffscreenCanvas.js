// OffscreenCanvas 是一个实验性属性 主要用于提升 Canvas 2D/3D 绘图的渲染性能和使用体验
// OffscreenCanvas和canvas都是渲染图形的对象。 不同的是canvas只能在window环境下使用，而OffscreenCanvas即可以在window环境下使用，也可以在web worker中使用，这让不影响浏览器主线程的离屏渲染成为可能。
let cs = new OffscreenCanvas(0,0)
console.log(cs);