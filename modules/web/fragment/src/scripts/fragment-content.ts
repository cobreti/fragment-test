import { FragmentClient } from "@cobreti/fragment-site";

interface TestClass {
    printValue: () => void;
}


interface Window {
    testClass: TestClass;
}

window.onmessage = (message) => {
    console.log(`received message : ${message.data}`);
    // window.testClass.printValue();
}

window.onload = () => {
}


console.log('fragment-content loaded');

let v = new FragmentClient();
