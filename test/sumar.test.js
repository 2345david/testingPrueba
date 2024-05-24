import { describe, expect, it } from 'vitest'
import {mount} from "@vue/test-utils";
import suma  from '../pages/suma.vue'


describe('suma.vue', () => {
    it('Comprobar si la suma funciona', () => {
        const wrapper = mount(suma)
        const result = wrapper.vm.sum(3, 4)
        expect(result).toBe( 7)
    })
    it('comprobar el texto de la suma', () => {
        const wrapper = mount(suma)
        const result = wrapper.find('h1');
        expect(result.text()).toBe('El resultado de la suma es  7');
    })
})