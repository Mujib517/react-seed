// jest 
// red green refactor
// agile
// CMMI Level 3 
// simple, fast, independent
// external calls
// mock, fake, stub
import Math from "../src/Math";

describe("Math", function () {

    let math;

    beforeEach(function () {
        console.log("beforeEach");
        math = new Math();
    });

    describe("add()", () => {
        it("should add two numbers and return result", function () {
            // AAA 
            // Arrage
            // Act
            const res = math.add(10, 20);

            // Assert
            expect(res).toBe(30);
        });

        it("should return -1 when first parameter is zero", () => {
            const res = math.add(0, 100);

            expect(res).toBe(-1);
        });

        it("should return -1 when second parameter is zero", () => {
            const res = math.add(100, 0);

            expect(res).toBe(-1);
        });
    });

    describe("sub()", () => {
        it("should return subtracted result", () => {
            const res = math.sub(20, 10);

            expect(res).toBe(10);
        });

        it("should return 0 if a<b", () => {
            const res = math.sub(10, 20);

            expect(res).toBe(0);
        });
    });

    afterEach(() => {
        math = null;
    });
});