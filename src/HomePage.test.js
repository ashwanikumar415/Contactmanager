import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomePage} from './HomePage';

configure({adapter: new Adapter()});

describe('<HomePage />', () => {
    let mockStateData,
        routeProps,
        handleAddContacts,
        handleContactEdit,
        handleDeleteClick    

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
        routeProps = {
            history:{},
            location:{}
        };

    })
    
    it('should mount HomePage component successfully', () => {

        const wrapper = shallow(<HomePage/>);
    
        // Expect the wrapper object to be defined
        expect(wrapper.find('HomePage')).toBeDefined();
      });

      it('should pass same values to child components as recieved via props', () => {

        const wrapper = mount(<HomePage completeContacts = {mockStateData.completeContacts}/>);

        //Expect all div elements to be present
        expect(wrapper.find('.App-header')).toBeDefined();
        expect(wrapper.find('.App-intro')).toBeDefined();
        expect(wrapper.find('.addContacts')).toBeDefined();

        // Expects the HomePage component to have same value as passed via props
        expect(wrapper.contains(<h2>{mockStateData.completeContacts[0].name}</h2>)).toBeTruthy();
        expect(wrapper.contains(<h4>{mockStateData.completeContacts[0].number}</h4>)).toBeTruthy();
        expect(wrapper.contains(<h4>{mockStateData.completeContacts[0].email}</h4>)).toBeTruthy();
      });  
})