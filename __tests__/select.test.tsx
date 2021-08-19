import React from 'react';
import { shallow } from 'enzyme';
import Select from '../components/select';

describe("check Select component", () => {
    let wrapper: any = shallow(<Select />)

    test.concurrent("should have InnerSource heading", () => {
        const changeEvent = { target: { value: "0" } };
        const dropdown = wrapper.find('select#dropdown');
       
        dropdown.simulate("change", changeEvent);
        wrapper.update();
        expect(wrapper.find('select#dropdown').get(0).props.value).toEqual("0")
    })
})