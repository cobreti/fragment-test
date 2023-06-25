(async function() {

    console.log('declaring Test class');

    class Test {
    
    }


    async function init() {
        console.log('test.js --> init starting');

        let promise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                console.log('test.js --> init resolved');
                resolve();
            }, 2000)
        });

        return promise;
    }

    window.init = async () => {
        await init();
    }

}());

