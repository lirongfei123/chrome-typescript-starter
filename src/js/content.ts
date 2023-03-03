import './content.css';
function getHotElement () {
    var aHot = document.querySelector('a[href^="https://top.baidu.com/board"]');
    if (aHot) {
        var currentNode = aHot;
        var parentNode = aHot?.parentNode;
        while(parentNode) {
            // @ts-ignore
            if (parentNode.id == 'content_right') {
                return currentNode;
            } else {
                // @ts-ignore
                currentNode = parentNode;
                parentNode = parentNode.parentNode;
            }
        }
    } else {
        return null;
    }
    
}
function run() {
    var hotContainer = getHotElement();
    var pingbi = document.getElementById('baidu_hot_pingbi');
    if (!pingbi) {
        pingbi = document.createElement('div');
        pingbi.id= 'baidu_hot_pingbi';
        // @ts-ignore
        pingbi.innerHTML = '不显示热搜';
    }
    if (hotContainer) {
        // @ts-ignore
        hotContainer.style.display = 'none';
        hotContainer.parentNode?.appendChild(pingbi);
    }
}
setInterval(run, 5000);
run();
export default {}
