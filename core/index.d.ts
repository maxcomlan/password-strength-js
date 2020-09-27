export interface PasswordValidity {
    length: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    number: boolean;
    specials: boolean;
}
export declare function passwordValidity(pass: string): PasswordValidity;
export declare function passwordStrengthFromValidity(validity: PasswordValidity): number;
export declare function passwordStrength(password: string): number;
export declare function isPasswordSecureEnough(pass: string, minSecurityLevel?: number): boolean;
