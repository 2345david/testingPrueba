import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../components/HelloWord.vue'

describe('HelloWorld', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = mount(HelloWorld, {
            props: { msg }
        })
        expect(wrapper.text()).toContain(msg)
    })
})