fetch('https://chrome.xixi.fun/popup.json?t=' + new Date().getTime()).then(data => {
    data.json().then(data => {
        let ad_container = document.getElementById('ad_container');
        if (data.img) {
            let imgData = data.img;
            let a = document.createElement('a');
            a.href = imgData.href;
            a.target = "_blank";
            let img = document.createElement('img');
            img.src = imgData.src;
            img.width = imgData.width;
            img.height = imgData.height;
            a.appendChild(img);
            ad_container?.appendChild(a);
        }
        if (data.a) {
            let aData = data.a;
            let a = document.createElement('a');
            a.href = aData.href;
            a.innerHTML = aData.text;
            a.target = "_blank";
            ad_container?.appendChild(a);
        }
    });
});
export default {}
