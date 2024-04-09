import { IndexRule } from './IndexRule.ts';
import RuleManager from './RuleManager.ts';
import { SideRule } from './SideRule.ts';
import './content.css';
let ruleManager = new RuleManager();
ruleManager.addRule(SideRule);
ruleManager.addRule(IndexRule);
ruleManager.start();
// @ts-ignore
export default {}
