

function  resize() {
    var designWidth=750;
    var clientWidth=document.documentElement.clientWidth;
    var fontsize=clientWidth/designWidth*100;
    document.documentElement.style.fontSize=fontsize+'px';
}
resize();
window.onresize=resize();
