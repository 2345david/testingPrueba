import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import resta from '../pages/resta.vue'

describe('resta.vue', () => {
    it('Comprobar si la resta es correcta', () => {
        const wrapper = mount(resta)
        const result = wrapper.vm.rest(20, 10)
        expect(result).toBe( 10)
    })
    it('comporbar si el texto es correcto', () => {
        const wrapper = mount(resta)
        const result = wrapper.find('h1')
        expect(result.text()).toBe('El resultado de la resta es 6')
    })
})