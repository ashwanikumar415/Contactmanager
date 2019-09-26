import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CardList} from './CardList';

configure({adapter: new Adapter()});

describe('<CardList />', () => {
    let mockStateData;

    beforeEach(() =>{
        mockStateData ={
            completeContacts: [
                {
                    name: "name1",
                    email: "name1@gmail.com",
                    number:"9986728107"
                },{
                    name: "name2",
                    email: "name2@gmail.com",
                    number:"9986728107"
                },{
                    name: "name3",
                    email: "name3@gmail.com",
                    number:"9986728107"
                },{
                    name: "name4",
                    email: "name4@gmail.com",
                    number:"9986728107"
                }
            ],
            selectedIndex: 0,
            name: "",
            email: "",
            number: ""
        };
    })
    
    it('should mount CardList component successfully', () => {

        const wrapper = mount(<CardList contacts = {mockStateData.completeContacts}/>);
    
        // Expect the wrapper object to be defined
        expect(wrapper.find('CardList')).toBeDefined();
      });

      it('should have as many number of Card components as contacts passed via props', () => {

        const wrapper = mount(<CardList contacts = {mockStateData.completeContacts}/>);
    
        // Expects Card component to be same number as number of contacts
        expect(wrapper.find('Card')).toHaveLength(mockStateData.completeContacts.length);
      });

      it('should pass same values to child components as recieved via props', () => {

        const wrapper = mount(<CardList contacts = {mockStateData.completeContacts}/>);
    
        // Expects the Card component to have same value as passed via props
        expect(wrapper.contains(<h2>{mockStateData.completeContacts[0].name}</h2>)).toBeTruthy();
        expect(wrapper.contains(<h4>{mockStateData.completeContacts[0].number}</h4>)).toBeTruthy();
        expect(wrapper.contains(<h4>{mockStateData.completeContacts[0].email}</h4>)).toBeTruthy();
      });      
})