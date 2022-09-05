// const FragmentElement = require('@cobreti/fragment-site/fragment-element');


import {BehaviorSubject} from 'rxjs';

const readyEvent = new BehaviorSubject<any>(null);

setTimeout(() => {
    readyEvent.next('value');
}, 5000);

// (async function() {
//     const response = await fetch('test.js');
//     const testApi = await response.text();

//     let script = document.createElement('script');
//     script.text = testApi;

//     document.head.appendChild(script);

//     console.log(testApi);
// })();

class TestClass {

    value: any;

    constructor(value: any) {
        this.value = value;
    }

    printValue() {
        console.log(`value : ${this.value}`);
    }
}

let TestClassInstance = new TestClass(5);

// class FragmentElement extends HTMLElement {
//     constructor() {
//         super();
//     }
//
//     connectedCallback() {
//         // this.innerHTML = '<p>test</p>';
//         const nameAttr = this.getAttribute('name');
//         this.testClass = new TestClass(`some value from parent for : ${nameAttr ?? 'unknown'}`);
//
//         const iframe = document.createElement('iframe');
//         iframe.onload = () => {
//             console.log('iframe loaded');
//
//             readyEvent.subscribe(value => {
//                 if (value) {
//                     iframe.contentWindow.testClass = this.testClass;
//                     iframe.contentWindow.postMessage('init completed');
//                 }
//             })
//         }
//
//         const srcAttr = this.getAttribute('src');
//         if (srcAttr) {
//             iframe.setAttribute('src', srcAttr);
//         }
//
//         const classesAttr = this.getAttribute('class');
//         if (classesAttr) {
//             iframe.setAttribute('class', classesAttr);
//         }
//
//         let p = document.createElement('p');
//         let text = document.createTextNode('test value');
//         p.appendChild(text);
//         this.appendChild(iframe);
//         this.appendChild(p);
//     }
//
//     disconnectedCallback() {
//
//     }
//
//     attributeChangedCallback(name, oldValue, newValue) {
//
//     }
//
//     adoptedCallback() {
//
//     }
//
//     render() {
//
//     }
// }


// customElements.define('nyx-fragment', FragmentElement);

