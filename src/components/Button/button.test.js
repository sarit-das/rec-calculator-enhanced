import React from 'react';
import {shallow} from 'enzyme';
import Button from "./button";

const title = '';
let wrapped = shallow(<button>{title}</button>);

describe('Button', () => {
    it('should render the button component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
    it('renders the title children', () => {
        expect(wrapped.find('button').text()).toEqual(title);
    })
});