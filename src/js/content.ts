var titles = document.querySelectorAll('a[class*="SummaryTile"] span');
const titlesArr = [...titles];
const updateResult: any = {};
for (let i = 0; i < titlesArr.length; i++) {
    // @ts-ignore
    var source = titlesArr[i].parentNode.getElementsByTagName('img')[0];
    const srcset = source.getAttribute('srcset');
    var reg = /^(https[^ ]+) 1x, (https[^ ]+) 2x$/;
    // @ts-ignore
    const poki_url = titlesArr[i].parentNode.href;
    var result = reg.exec(srcset);
    if (result) {
        var img1x = result[1];
        var img2x = result[2];
        updateResult[poki_url] = {
            img1x,
            img2x,
        }
    }
}
// @ts-ignore
chrome.runtime.sendMessage({
    type: 'updateResult',
    data: updateResult
});
export default {}
