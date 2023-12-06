import BaseRule from "./BaseRule.ts";

export class IndexRule extends BaseRule {
    findElements() {
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
}