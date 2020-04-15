import { stringLength, safeObjectValueLength } from './functions';

describe(' stringfunctions test', () => {
  test('return string length wit input', () => {
    expect(stringLength('WomenGoTech')).toBe(11);
  });
  test('return 0 with null', () => {
    expect(stringLength(null)).toBe(0);
  });
  test('return 0 with null', () => {
    expect(stringLength(undefined)).toBe(0);
  });
});

describe('object value length test', () => {
    test('return object length with one string value', () => {
        expect(objectValueLength({ name: "Aurelija", age: 21, surname: "Drobelyte" })).toBe(17);
    })

    // test('return object length with multiple string values', () => {
    //     expect(objectValueLength()).toBe();
    // })

    // test('return object length with mixed values', () => {
    //     expect(objectValueLength()).toBe();
    // })
})

describe('string length test', () => {
    test("should count string lengths of an object", () => {
      const mockedFunction = jest.fn(x => x?.length ?? 0)
  
      expect(
          safeObjectValueLength({ name: "Aurelija", age: 21, surname: "Drobelyte" }, mockedFunction)
      ).toBe(17);
      expect(mockedFunction).toBeCalledTimes(3)
    });
  })
