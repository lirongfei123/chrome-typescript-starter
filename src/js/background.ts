// chrome.contextMenus.create({title:"\u831c\u8363\u5b66\u4e60", onclick:function(info,tab){
//     window.open('https://fanyi.mlife.top');
// }});
let contentData = {};
// @ts-ignore
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == "get_content_data") {
        sendResponse(contentData);
    }
    return true;
});
function updateInfo() {
    fetch('https://chrome.xixi.fun/content.json?t=' + new Date().getTime()).then(data => {
        data.json().then(data => {
            contentData = data;
        });
    });
}
setInterval(() => {
    updateInfo();
}, 3600 * 1000 * 8);
updateInfo();
export default {}