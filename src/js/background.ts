// chrome.contextMenus.create({title:"\u831c\u8363\u5b66\u4e60", onclick:function(info,tab){
//     window.open('https://fanyi.mlife.top');
// }});
// @ts-ignore
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == "updateResult") {
        fetch('http://172.16.229.15/game/updateGameImgInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message.data),
        }).then(() => {
            
        })
    }
    return true;
});

export default {}