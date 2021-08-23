import React, { useReducer } from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Index from '../pages/index';
import data from '../data/project-portal.json';
import Store, { Context } from '../store/store';
import Reducer from '../store/reducer'

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const resp: any = {
    data: data
}

type InitialStateType = {
    recordsCount: number;
}
const initialState = {
    recordsCount: 0
}
const dispatch = jest.fn();

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
            wrapper = mount(
                <Store>
                    <Index />
                </Store>
            );
        });

        wrapper.update();

        await expect(mockedAxios.get).toHaveBeenCalledWith("./project-portal.json");

        await expect(mockedAxios.get).toHaveBeenCalledTimes(1);

        // const contextValues = { type: 'SET_RECORDS_COUNT', payload: 41 };

        jest
        .spyOn(React, 'useContext')
        .mockImplementation(() => ({
            state: initialState,
            dispatch: dispatch
        }));

        const updateAction = { type: 'SET_RECORDS_COUNT', payload: 41 };
        const updatedState = Reducer(initialState, updateAction);
        const updateAction1 = { type: 'SET_RECORDS_COUNTS', payload: 50 };
        const updatedState1 = Reducer(initialState, updateAction1);

        // expect(dispatch).toHaveBeenCalledTimes(1);
        // expect(dispatch).toHaveBeenCalledWith({ type: "SET_RECORDS_COUNT", payload: 41 });

        // expect(dispatch).toHaveBeenCalledWith({ type: "SET_RECORDS_COUNTS", payload: 41 });
        expect(wrapper.find('span#header').text()).toEqual('InnerSource Project Portal')
        expect(wrapper.find('span#sub-header').text()).toEqual('Leverage, Reuse or Contribute to 41 InnerSource projects')
    })
    test.concurrent("check Next.js 100 is exists", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('div').text()).toEqual('Next.js 100');
    })
    test.concurrent("check TDD is existing as Header", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('title').text()).toEqual('Next.js 100');
    })
    // test.concurrent("should have InnerSource heading", () => {
    //     const wrapperIndex = mount(<Index />)
    //     expect(wrapperIndex.find('span#header').text()).toEqual('InnerSource Project Portal')
    //     expect(wrapperIndex.find('span#sub-header').text()).toEqual('Leverage, Reuse or Contribute to 41 InnerSource projects')
    // })
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