import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import passTheProps from '../pages/passProps.vue'

describe('Calculator.vue', () => {
    const testCases = [
        { num1: '2', operator: '+', num2: '2', expected: 'Resultado es: 4' },
        { num1: '12', operator: '-', num2: '2', expected: 'Resultado es: 10' },
        { num1: '8', operator: '*', num2: '2', expected: 'Resultado es: 16' },
        { num1: '24', operator: '/', num2: '2', expected: 'Resultado es: 12' }
    ];



    testCases.forEach(({ num1, num2, operator, expected }) => {
        it('Comprobacion del calculo y el texto', async () => {
            const wrapper = mount(passTheProps);
            await wrapper.setData({num1, num2, operator})
            wrapper.vm.calculate()
            expect(wrapper.vm.result).toBe(expected)
        });
    });
});