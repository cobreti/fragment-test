window.onmessage = (message) => {
    console.log(`received message : ${message.data}`);
    window.testClass.printValue();
}


console.log('fragment-content loaded');
