# password-strength-js

### A simple password strength checker you can use in any js project.

Passwords are tested against a predefined set of regex
to check if:

    - They are withing 08 and 32 caracters,
    - They include numbers
    - They include at least lower case character [a-z]
    - They include at least upper case characters [A-Z]
    - They include at least any special characters, [@, \, ^, !, ~, ;, %]

Every test return an object of type `PasswordValidity` use to compute a score within 1 (lowest) and 5 (highest)

### Functions 

`passwordValidity(test: string): PasswordValidity` - Returns the `PasswordValidity` object containing properties used to compute score


`passwordStrengthFromValidity(validity: PasswordValidity)` - Takes a `PasswordValidity` object to compute the matching score

`passwordStrength(password: string): number` - Takes a string and return the score

`isPasswordSecureEnough(password: string, minimumSecurityLevel: number = 2): boolean` - Takes a password and checks if its strength is greater or equal to the minimumSecurityLevel



## QuickStart

install with `npm install password-strength-js`

run `isPasswordSecureEnough("mypassword")`

Happy Hacking !
