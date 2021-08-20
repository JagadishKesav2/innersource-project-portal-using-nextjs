import React from 'react';
import { shallow } from 'enzyme';
import Select from '../components/select';

describe("check Select component", () => {
    let wrapper: any = shallow(<Select lang={['All']} />)

    test.concurrent("should have Filter by Languages label", () => {
        const filterLabel = wrapper.find('label#language');
        expect(filterLabel.text()).toBe('Filter by Languages:')
    })
    test.concurrent("should have language dropdown", () => {
        const changeEvent = { target: { value: "0" } };
        const dropdown = wrapper.find('select#langdropdown');

        dropdown.simulate("change", changeEvent);
        wrapper.update();
        expect(wrapper.find('select#langdropdown').get(0).props.value).toEqual("0")
    })

    describe("Sort by On change", () => {
        describe.each`
            id      |  value
            ${0}    |  ${"All"}
            ${1}    |  ${"JavaScript"}
            ${2}    |  ${"Groovy"}
            ${3}    |  ${"TypeScript"}
            ${4}    |  ${"C++"}
            ${5}    |  ${"GO"}
            ${6}    |  ${"Docker"}
            ${7}    |  ${"Java"}
            ${8}    |  ${"Scala"}
            ${9}    |  ${"Ruby"}
            ${10}   |  ${"Shell"}
            ${11}   |  ${"HTML"}
            ${12}   |  ${"Python"}
            ${13}   |  ${"ABAP"}
        `("$selected", ({ id, value }) => {
            test.concurrent(`id "${id}", wanted the value of ${value}`, () => {
                const dropdown = wrapper.find('select#langdropdown');
                dropdown.simulate("change", { target: { value: value } });
                wrapper.update();
                expect(wrapper.find('select#langdropdown').get(0).props.value).toEqual(value);
            });
        });
    });
    test.concurrent("should have Sort by label", () => {
        const sortByLabel = wrapper.find('label#sortBy');
        expect(sortByLabel.text()).toBe('Sort by:')
    })
    describe("Sort by On change", () => {
        describe.each`
            id     |  value
            ${0}   |  ${"Activity"}
            ${1}   |  ${"Name"}
            ${2}   |  ${"Organization"}
            ${3}   |  ${"Stars"}
            ${4}   |  ${"Watchers"}
            ${5}   |  ${"Issues"}
            ${6}   |  ${"Forks"}
        `("$selected", ({ id, value }) => {
            test.concurrent(`id "${id}", wanted the value of ${value}`, () => {
                const dropdown = wrapper.find('select#sortbydropdown');
                dropdown.simulate("change", { target: { value: value } });
                wrapper.update();
                expect(wrapper.find('select#sortbydropdown').get(0).props.value).toEqual(value);
            });
        });
    });

    test.concurrent("should have input field", () => {
        const inputText = wrapper.find('input#inputText');
        inputText.simulate("change", { target: { value: 'Earth' } })
        wrapper.update();
        expect(wrapper.find('input#inputText').get(0).props.value).toEqual('Earth')
    })

    test.concurrent("should have toggle button", () => {
        expect(wrapper.find('i#cardView').prop('style')).toHaveProperty('color', '#2196F3');
        expect(wrapper.find('i#listView').prop('style')).toHaveProperty('color', '#444444');
        const inputToggle = wrapper.find('input#toggle');
        inputToggle.simulate("click")
        wrapper.update();
        expect(wrapper.find('i#cardView').prop('style')).toHaveProperty('color', '#444444');
        expect(wrapper.find('i#listView').prop('style')).toHaveProperty('color', '#2196F3');
    })
})