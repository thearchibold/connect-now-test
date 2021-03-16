import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import VideoItem from "../../VideoItem/index"
import {VideoType} from "../../../constants/@types";
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


it('should display video item with params', function () {
    act(()=>{

    })
});