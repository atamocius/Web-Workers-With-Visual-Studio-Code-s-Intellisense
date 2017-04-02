let piWorker = new Worker("dist/js/pi.worker.js");

piWorker.onmessage = e => {
    console.log(e.data.piValue);
};

piWorker.postMessage({
    iterations: 1000000000
});