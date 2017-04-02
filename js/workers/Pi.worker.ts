import { CalculatePi } from "../common/CalculatePi";

onmessage = e => {
    let calcPi = new CalculatePi();
    let result = calcPi.calculate(e.data.iterations);

    postMessage(result);
};
