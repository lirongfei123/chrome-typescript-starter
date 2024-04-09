export default class BaseRule {
    findElements() {
    }
    addDefault(hotContainer: any) {
        var pingbis = hotContainer.parentNode.getElementsByClassName('baidu_hot_pingbi');
        let pingbi;
        if (pingbis.length == 0) {
            pingbi = document.createElement('div');
            pingbi.className= 'baidu_hot_pingbi';
            hotContainer.parentNode?.appendChild(pingbi);
        } else {
            pingbi = pingbis[0];
        }
        // @ts-ignore
        pingbi.innerHTML = '不显示热搜';
    }
    addAd(hotContainer: any, contentData: any) {
        if (contentData.ad) {
            try {
                let adData = contentData.ad;
                let adKey = 'baidu-disable-hot-click-ad' + adData.id;
                let clickData: any = localStorage.getItem(adKey);
                if (clickData) {
                    try {
                        clickData = JSON.parse(clickData);
                        if (new Date().getTime() - clickData.clickDate < 3600 * 1000 * 24 * 7) {
                            this.addDefault(hotContainer);
                            return;
                        }
                    } catch(e) {
                    }
                }
                var pingbis = hotContainer.parentNode.getElementsByClassName('baidu_hot_pingbi');
                if (pingbis.length == 0) {
                    let pingbi = document.createElement('div');
                    pingbi.className= 'baidu_hot_pingbi';
                    let aE = document.createElement('a');
                    aE.href = adData.href;
                    aE.target = "_blank";
                    aE.style.cssText = 'display: flex; align-items: center;color: #000;cursor: pointer;';
                    aE.onclick = () => {
                        localStorage.setItem(adKey, JSON.stringify({
                            clickDate: new Date().getTime()
                        }));
                    }
                    if (adData.icon) {
                        let img = document.createElement('img');
                        img.src = adData.icon;
                        img.width = 16;
                        img.height = 16;
                        aE.appendChild(img);
                    }
                    if (adData.text) {
                        let span = document.createElement('span');
                        span.innerHTML = adData.text;
                        aE.appendChild(span);
                    }
                    pingbi.appendChild(aE);
                    hotContainer.parentNode?.appendChild(pingbi);
                }
            } catch(e) {
                this.addDefault(hotContainer);
            }
        } else {
            this.addDefault(hotContainer);
        }
    }
    removeElement(hotContainer: any, contentData: any) {
        if (hotContainer != null) {
            this.addAd(hotContainer, contentData);
            // @ts-ignore
            hotContainer.style.display = 'none';
        }
    }
    run(contentData: any) {
        var hotContainer: any = this.findElements();
        if (!(hotContainer instanceof Array)) {
            hotContainer = [hotContainer];
        }
        for (let i = 0; i < hotContainer.length; i++) {
            this.removeElement(hotContainer[i], contentData);
        }
    }
}