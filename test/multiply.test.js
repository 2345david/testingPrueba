import { describe, expect, it } from 'vitest'
import {mount} from "@vue/test-utils";
import multiplication  from '../pages/multiplication.vue'


describe('multiplication.vue', () => {
    it('calcular si la multiplicacion funciona', () => {
        const wrapper = mount(multiplication)
        const result = wrapper.vm.calc(8, 8)
        expect(result).toBe( 64)
    })
    it('comprobar el texto de la multiplicacion', () => {
        const wrapper = mount(multiplication)
        const result = wrapper.find('h1');
        expect(result.text()).toBe('El resultado de la multiplicacion es  64');
    })
})