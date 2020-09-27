import { isPasswordSecureEnough, passwordStrength } from "../index";
describe("Test password strength", () => {
    test("Test password strength",() => {
        expect(passwordStrength("")).toBe(0);
        expect(passwordStrength("asdfghj")).toBe(0);
        expect(passwordStrength("asdfghjwegjbet")).toBe(2);
        expect(passwordStrength("asdfghjewf")).toBe(2);
        expect(passwordStrength("QIOWFBGIREBGVTIO")).toBe(1);
        expect(passwordStrength("Asfksghld")).toBe(3);
        expect(passwordStrength("afnegtn!3")).toBe(4);
        expect(passwordStrength("afAn@!;egtn!3")).toBe(5);
        expect(passwordStrength("M@ximilien2000")).toBe(5);
    })
    
    test("Test If password is secure Enough",() => {
        expect(isPasswordSecureEnough("afAn@!;egtn!3", 3)).toBe(true);
        expect(isPasswordSecureEnough("fifine", 2)).toBe(false);
        expect(isPasswordSecureEnough("", 2)).toBe(false);
    })
})