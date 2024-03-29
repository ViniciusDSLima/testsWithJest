import {getStringInfo, StringUtils, toUpperCase} from "../app/Utils";

describe('Utils test suite', () => {

    describe.only('StringUtils tests', () => {

        let sut: StringUtils

        beforeEach(() => {
            sut = new StringUtils();
            console.log('Setup');
        });

        it('Should return correct upperCase', () => {

            const actual = sut.toUpperCase('abc');

            expect(actual).toBe("ABC");
            console.log('Actual test')
        });

        it.only('Should throw error on invalid argument - arrow function', () => {

            expect(() => {
                sut.toUpperCase('');
            }).toThrowError('Invalid argument!')
        });

        it.only('Should throw error on invalid argument - try catch block', () => {
            try{
                sut.toUpperCase('');
            } catch (error){
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
            }
        });
    });


     it('should return uppercase of valid string', () => {
         const sut = toUpperCase;
         const expected = 'ABC';

         const actual = toUpperCase('abc')

         expect(actual).toBe(expected);
     });
     describe.only('ToUpperCase examples', () => {
         it.each([
             {input: 'abc', expected: 'ABC'},
             {input: 'My-String', expected: 'MY-STRING'},
             {input: 'def', expected: 'DEF'}
         ])('$input toUpperCase should be $expected', ({input, expected}) => {
             const actual = toUpperCase(input);
             expect(actual).toBe(expected);
         })
     })

     describe('getStringInfo for arg My-String should', () => {

         test('return right length', () => {
             const actual = getStringInfo('My-String');
             expect(actual.characters).toHaveLength(9);
         });

         test('return right lower case', () => {
             const actual = getStringInfo('My-String');
             expect(actual.lowerCase).toBe('my-string');
         });

         test('return right upper case', () => {
             const actual = getStringInfo('My-String');
             expect(actual.upperCase).toBe('MY-STRING');
         });

         test('return right characters', () => {
             const actual = getStringInfo('My-String');

             expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i','n','g']);
             expect(actual.characters).toContain<string>('M');
             expect(actual.characters).toEqual(
                 expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i','n','g'])
             )
         });

         test('return defined extra info', () => {
             const actual = getStringInfo('My-String');

             expect(actual.extraInfo).not.toBe(undefined);
             expect(actual.extraInfo).not.toBeUndefined();
             expect(actual.extraInfo).toBeDefined();
             expect(actual.extraInfo).toBeTruthy();
         });

     })
});