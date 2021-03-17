import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Dropdown from "../../Dropdown"


let renderContainer = null;



beforeEach(()=>{
    renderContainer = document.createElement("div");
    document.body.appendChild(renderContainer)
});


afterEach(()=>{
    unmountComponentAtNode(renderContainer);
    renderContainer.remove();
    renderContainer = null;
});


it('should render with initial list name', function () {
    const dropdownOptions = [ {
        id:1,
        text:"Release Date",
        label:"DATE"
    }];

    act(()=>{
        render(<Dropdown options={dropdownOptions} onItemSelect={()=>{}}/>, renderContainer)
    });

    expect(renderContainer.textContent).toBe(dropdownOptions[0].text)
});

