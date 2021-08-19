import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Index from '../pages/index';
import data from '../data/project-portal.json';


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const resp: any = {
    data: data
}

describe("Test case for index.js", () => {
    let wrapper: any;

    // clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should render the useEffect and execute Axios", async () => {

        mockedAxios.get.mockReturnValueOnce(resp);

        // mock axios promise
        await act(async () => {
            await mockedAxios.get.mockImplementationOnce(resp)
            wrapper = mount(<Index />);
        });


        wrapper.update();

        await expect(mockedAxios.get).toHaveBeenCalledWith("./project-portal.json");

        await expect(mockedAxios.get).toHaveBeenCalledTimes(1);

        // await expect(wrapper.find("img").props().src).toEqual("image-url");
    })
    test.concurrent("check Next.js 100 is exists", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('div').text()).toEqual('Next.js 100');
    })
    test.concurrent("check TDD is existing as Header", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('title').text()).toEqual('Next.js 100');
    })
    // test.concurrent("check mount", () => {
    //     const wrapper = mount(<Index />)
    //     expect(wrapper.find('span#header').text()).toEqual('InnerSource Project Portal')
    //     expect(wrapper.find('span#sub-header').text()).toEqual('Leverage, Reuse or Contribute to')
    //     expect(wrapper.find('span#count').text()).toEqual('42')
    //     expect(wrapper.find('span#header-ele').text()).toEqual('InnerSource projects')
    //     const changeEvent = { target: { value: "0" } };
    //     const dropdown = wrapper.find('select#dropdown');

    //     dropdown.simulate("change", changeEvent);
    //     wrapper.update();
    //     expect(wrapper.find('select#dropdown').get(0).props.value).toEqual("0")
    // })
})