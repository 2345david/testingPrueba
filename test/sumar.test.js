import { describe, expect, it } from 'vitest'
import {mount} from "@vue/test-utils";
import suma  from '~/pages/suma.vue'


describe('suma.vue', () => {
    it('calcular si la suma funciona', () => {
        const wrapper = mount(suma)
        const result = wrapper.vm.sum(8, 2)
        expect(result).toBe(10)
    })
})