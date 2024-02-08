import {PasswordChecker} from "../../pass_checker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('should do nothin for the moment', () => {
        sut.checkPassowrd();
    });
})