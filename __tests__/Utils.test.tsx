/**
 * @format
 */

import { hideCardNumbers } from "../components/Card/utils";
import { registerValidate, registerValidateNumber, registerValidateName, registerValidateDueDate, registerValidateCvv } from "../screens/Register/utils";


const validRegister = {
    number: '1112 2222 3333 4444',
    name: 'Test Name',
    dueDate: '11/26',
    cvv: '111',
};
const invalidRegister = {
    number: '111',
    name: 'Testwithoutlastname',
    dueDate: '21/26',
    cvv: '1',
};
const invalidEmptyRegister = {
    number: '',
    name: '',
    dueDate: '',
    cvv: '',
};

describe('hideCardNumbers tests', () => {
    it('hide a valid number', () => {
        expect(hideCardNumbers(validRegister.number)).toBe('**** **** **** 4444');
    });
    
    it('return the same number on an invalid number', () => {
        expect(hideCardNumbers(invalidRegister.number)).toBe('111');
    });

    it('return empty on an empty number', () => {
        expect(hideCardNumbers(invalidEmptyRegister.number)).toBe('');
    });
});

describe('registerValidate tests', () => {
    it('return true on a complete and valid card', () => {
        expect(registerValidate({...validRegister})).toBe(true);
    });
    
    it('return false on a complete but invalid card', () => {
        expect(registerValidate({...invalidRegister})).toBe(false);
    });

    it('return false on a empty card', () => {
        expect(registerValidate({...invalidEmptyRegister})).toBe(false);
    });
});

describe('registerValidateNumber tests', () => {
    it('return true on a valid number', () => {
        expect(registerValidateNumber(validRegister.number)).toBe(true);
    });
    
    it('return false on a invalid number', () => {
        expect(registerValidateNumber(invalidRegister.number)).toBe(false);
    });

    it('return false on a empty number', () => {
        expect(registerValidateNumber(invalidEmptyRegister.number)).toBe(false);
    });
});

describe('registerValidateName tests', () => {
    it('return true on a valid name', () => {
        expect(registerValidateName(validRegister.name)).toBe(true);
    });
    
    it('return false on a invalid name (only first name, without a last name)', () => {
        expect(registerValidateName(invalidRegister.name)).toBe(false);
    });

    it('return false on a empty name', () => {
        expect(registerValidateNumber(invalidEmptyRegister.name)).toBe(false);
    });
});

describe('registerValidateDueDate tests', () => {
    it('return true on a valid date', () => {
        expect(registerValidateDueDate(validRegister.dueDate)).toBe(true);
    });
    
    it('return false on a invalid date (invalid month)', () => {
        expect(registerValidateDueDate(invalidRegister.dueDate)).toBe(false);
    });

    it('return false on a empty date', () => {
        expect(registerValidateDueDate(invalidEmptyRegister.dueDate)).toBe(false);
    });
});

describe('registerValidateCvv tests', () => {
    it('return true on a valid security code (cvv)', () => {
        expect(registerValidateCvv(validRegister.cvv)).toBe(true);
    });
    
    it('return false on a invalid security code (cvv)', () => {
        expect(registerValidateCvv(invalidRegister.cvv)).toBe(false);
    });

    it('return false on a empty security code (cvv)', () => {
        expect(registerValidateCvv(invalidEmptyRegister.cvv)).toBe(false);
    });
});