import BaseRule from "./BaseRule";

export default class RuleManager {
    rules: BaseRule[] = [];
    contentData = {}
    interTime = 500;
    interCount = 0;
    addRule(RuleClass: typeof BaseRule) {
        const exist = this.rules.find(item => {
            return item.constructor === RuleClass;
        });
        if (!exist) {
            this.rules.push(new RuleClass());
        }
    }
    run() {
        for (let i = 0; i < this.rules.length; i++) {
            try {
                this.rules[i].run(this.contentData);
            } catch(e) {}
        }
        this.interCount++;
        if (this.interCount > 3) {
            this.interTime = 10000;
        }
        setTimeout(this.run.bind(this), this.interTime);
    }
    start() {
        // @ts-ignore
        chrome.runtime.sendMessage({
            type: 'get_content_data'
            // @ts-ignore
        }, (data: any) => {
            this.contentData = data;
            this.run();
        });
    }
}