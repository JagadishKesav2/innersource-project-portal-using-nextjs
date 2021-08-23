import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../components/header';

describe("check Header component", () => {
    const props = {
        projectCount: 41
    }
    let wrapper: any = shallow(<Header {...props}/>)

    test.concurrent("should have InnerSource heading", () => {
        expect(wrapper.find('span#header').text()).toEqual('InnerSource Project Portal')
        expect(wrapper.find('span#sub-header').text()).toEqual('Leverage, Reuse or Contribute to 41 InnerSource projects')
    })
})