export interface PasswordValidity{
    length: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    number: boolean;
    specials: boolean;
}

export function passwordValidity(pass: string): PasswordValidity{
    let caseRegex = new RegExp('^([a-zA-Z0-9@\\^!~;%]{8,32})$');
    let lowerCaseRegex = new RegExp('[a-z]{1,}');
    let numberRegex = new RegExp("[0-9]{1,}");
    let upperCaseRegex = new RegExp('[A-Z]{1,}');
    let specialCharRegex = new RegExp('[@\\^!~;%]{1,}');

    let caseResult = caseRegex.exec(pass);
    let lowerResult = lowerCaseRegex.exec(pass);
    let upperResult = upperCaseRegex.exec(pass);
    let numberResult = numberRegex.exec(pass);
    let specialResult = specialCharRegex.exec(pass);

    return {
        length: caseResult !== null && caseResult.length > 0,
        lowerCase:lowerResult !== null && lowerResult.length > 0,
        upperCase: upperResult !== null && upperResult.length > 0,
        number: numberResult !== null && numberResult.length > 0,
        specials: specialResult !== null && specialResult.length > 0
    }
}

export function passwordStrengthFromValidity(validity: PasswordValidity){
    if(!validity.length){
        return 0;
    }
    if(!validity.lowerCase){
        return 1;
    }

    let strength = 2;
    if(validity.number){
        ++strength;
    }

    if(validity.upperCase){
        ++strength;
    }

    if(validity.specials){
        ++strength;
    }

    return strength;
}

export function passwordStrength(password: string){
    return passwordStrengthFromValidity(passwordValidity(password));
}

export function isPasswordSecureEnough(pass: string, minSecurityLevel=2){
    return passwordStrength(pass) >= minSecurityLevel;
}