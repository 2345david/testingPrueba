import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import divisio from '../pages/divisio.vue'

describe('divisio.vue', () => {
    it('Comprobar que la divison es correcta', () => {
        const wrapper = mount(divisio)
        const result = wrapper.vm.division(12, 2)
        expect(result).toBe(6)
    })
    it('Comprobar el texto de la division', () => {
        const wrapper = mount(divisio)
        const result = wrapper.find('h1')
        expect(result.text()).toBe('El resultado de la division es 6')
    })
})



