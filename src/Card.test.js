import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './Card';

configure({adapter: new Adapter()});

describe('<Card />', () => {
    it('should mount Card component successfully', () => {
        const wrapper = shallow(<Card/>);
    
        // Expect the wrapper object to be defined
        expect(wrapper.find('.tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5')).toBeDefined();
      });
    
    it('should render same values for Card component as passed through props', () => {
        const handleEdit = function() {};
        const deleteClicked = function() {};
        const routeProperty = {history:{}, location:{}}
        const wrapper = shallow(<Card 
            id = "firstContact"
            key = "firstContact"
            name = "Robert"
            email = "robert@gmail.com"
            number = "9987654128"
            handleEdit = {handleEdit}
            handleDelete={deleteClicked}
            routeProperty = {routeProperty}
    />);
    
        // Expects the Card component to have same value as passed via props
        expect(wrapper.contains(<h2>Robert</h2>)).toBeTruthy();
        expect(wrapper.contains(<h4>9987654128</h4>)).toBeTruthy();
        expect(wrapper.contains(<h4>robert@gmail.com</h4>)).toBeTruthy();
        expect(wrapper.contains(<img src={`https://robohash.org/Robert?size=200x200`} alt="robots"></img>)).toBeTruthy();
      });
})