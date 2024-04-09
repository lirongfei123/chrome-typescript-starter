import BaseRule from "./BaseRule.ts";

export class IndexRule extends BaseRule {
    findElement1() {
        var aHot = document.querySelector('.s-news-list-wrapper');
        if (aHot) {
            var currentNode = aHot;
            var parentNode = aHot?.parentNode;
            while(parentNode) {
                // @ts-ignore
                if (parentNode.id == 's_main') {
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
        return aHot;
    }
    findElement2() {
        var aHot = document.querySelector('a[href^="https://top.baidu.com/board"]');
        if (aHot) {
            var currentNode = aHot;
            var parentNode = aHot?.parentNode;
            while(parentNode) {
                // @ts-ignore
                if (parentNode.id == 's-hotsearch-wrapper') {
                    return parentNode;
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
    findElements() {
        return [
            this.findElement1(),
            this.findElement2()
        ]
    }
}