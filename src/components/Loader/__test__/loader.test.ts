import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import Loader from "../../Loader"
import Dropdown from "../../Dropdown";

let container:any = null;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.append(container);
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null
});


it('should display display loader', function () {
    act(()=>{
    });
});