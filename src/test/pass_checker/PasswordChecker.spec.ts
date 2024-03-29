import {PasswordChecker, PasswordErrors} from "../../pass_checker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('Password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassowrd('1234567');

        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    });

    it('Password with less than 8 chars is ok', () => {
        const actual = sut.checkPassowrd('12345678');

        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    });

    it('Password with no upper case letter is invalid', () => {
        const actual = sut.checkPassowrd('abcd');

        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with upper case letter is valid', () => {
        const actual = sut.checkPassowrd('abcD');

        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    });

    it('Password with no lower case letter is invalid', () => {
        const actual = sut.checkPassowrd('ABCD');

        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Password with lower case letter is valid', () => {
        const actual = sut.checkPassowrd('ABCDa');

        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Complex password is valid', () => {
        const actual = sut.checkPassowrd('1234abcD');

        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true);
    });
});