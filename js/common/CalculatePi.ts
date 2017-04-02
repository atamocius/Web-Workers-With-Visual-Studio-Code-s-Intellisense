export class CalculatePi {
    public calculate(iterations: number) {
        if(iterations <= 0) {
            throw new Error("Iterations must be a positive, non-zero number.");
        }

        let n = 1;
        let pi = 0;
        for(let i = 0; i <= iterations; i++) {
            pi = pi + (4 / n) - (4 / (n + 2));
            n = n + 4;
        }

        return {
            piValue: pi
        };
    }
}