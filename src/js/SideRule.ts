import BaseRule from "./BaseRule.ts";

export class SideRule extends BaseRule {
    findElements() {
        var aHot = document.querySelector('a[href^="https://top.baidu.com/board"]');
        if (aHot) {
            var currentNode = aHot;
            var parentNode = aHot?.parentNode;
            while(parentNode) {
                // @ts-ignore
                if (/result-op|xpath-log|new-pmd/.test(currentNode.className)) {
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
}