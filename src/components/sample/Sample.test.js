import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import Sample from './Sample'

describe('Sample', () => {
    it('should render successfully', () => {
        const wrapper = shallow(<Sample />)
        expect(wrapper).toIncludeText('Hello')
    })
})
