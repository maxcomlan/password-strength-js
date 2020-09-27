"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPasswordSecureEnough = exports.passwordStrength = exports.passwordStrengthFromValidity = exports.passwordValidity = void 0;
function passwordValidity(pass) {
    var caseRegex = new RegExp('^([a-zA-Z0-9@\\^!~;%]{8,32})$');
    var lowerCaseRegex = new RegExp('[a-z]{1,}');
    var numberRegex = new RegExp("[0-9]{1,}");
    var upperCaseRegex = new RegExp('[A-Z]{1,}');
    var specialCharRegex = new RegExp('[@\\^!~;%]{1,}');
    var caseResult = caseRegex.exec(pass);
    var lowerResult = lowerCaseRegex.exec(pass);
    var upperResult = upperCaseRegex.exec(pass);
    var numberResult = numberRegex.exec(pass);
    var specialResult = specialCharRegex.exec(pass);
    return {
        length: caseResult !== null && caseResult.length > 0,
        lowerCase: lowerResult !== null && lowerResult.length > 0,
        upperCase: upperResult !== null && upperResult.length > 0,
        number: numberResult !== null && numberResult.length > 0,
        specials: specialResult !== null && specialResult.length > 0
    };
}
exports.passwordValidity = passwordValidity;
function passwordStrengthFromValidity(validity) {
    if (!validity.length) {
        return 0;
    }
    if (!validity.lowerCase) {
        return 1;
    }
    var strength = 2;
    if (validity.number) {
        ++strength;
    }
    if (validity.upperCase) {
        ++strength;
    }
    if (validity.specials) {
        ++strength;
    }
    return strength;
}
exports.passwordStrengthFromValidity = passwordStrengthFromValidity;
function passwordStrength(password) {
    return passwordStrengthFromValidity(passwordValidity(password));
}
exports.passwordStrength = passwordStrength;
function isPasswordSecureEnough(pass, minSecurityLevel) {
    if (minSecurityLevel === void 0) { minSecurityLevel = 2; }
    return passwordStrength(pass) >= minSecurityLevel;
}
exports.isPasswordSecureEnough = isPasswordSecureEnough;
