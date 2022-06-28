// src/__tests__/Event.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });
    
    test('render event', () => {
        expect(EventWrapper.find(".event")).toHaveLength(1);
    });

    test('render event summary/title', () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
    });

    test('render event startdate/timezone', () => {
        expect(EventWrapper.find(".start-date")).toHaveLength(1);
    });
   
    test('render event location', () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });

    //button/collapsed details

    test("render the details button", () => {
        expect(EventWrapper.find(".show-details")).toHaveLength(1);
      });
    
      test("open details when the button is clicked", () => {
        EventWrapper.setState({
          collapsed: true,
        });
        EventWrapper.find(".show-details").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
    
      test("hide details when the button is clicked", () => {
        EventWrapper.setState({
          collapsed: false,
        });
        EventWrapper.find(".hide-details").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
      });
    
      test("When the details button is clicked, the state will change from true to false", () => {
        EventWrapper.setState({
          collapsed: true,
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
    
      test("After the details button is clicked, the state will change from false to true", () => {
        EventWrapper.setState({
          collapsed: false,
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
      });

      test("Render description element", () => {
        EventWrapper.setState({ 
          visible: true 
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.find('.eventDescription')).toBeDefined();
      });

      test("Hide description element", () => {
        EventWrapper.setState({ 
          visible: true 
        });
        EventWrapper.find(".details-button").simulate("click");
        expect(EventWrapper.find(".eventDescription")).toHaveLength(0);
      });

});