import BaseRule from "./BaseRule";

export default class RuleManager {
    rules: BaseRule[] = [];
    contentData = {}
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
    }
    start() {
        // @ts-ignore
        chrome.runtime.sendMessage({
            type: 'get_content_data'
            // @ts-ignore
        }, (data: any) => {
            this.contentData = data;
            setInterval(this.run, 5000);
            this.run();
        });
    }
}