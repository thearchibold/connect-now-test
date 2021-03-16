import React, {useEffect} from "react"
import styled from 'styled-components'
import css from "../../constants/css"


const DropdownContainer = styled.div`
  height: 3rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  cursor:pointer;
  &:active{
  background: transparent;
  }
 
`;

const LeftArrow = styled.div`
  height: 2rem;
  width: 2.4rem;
  background-color: ${css.color_button};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const DropdownList = styled.div`
  width: 100%;
  height: 2.05rem;
  background: ${css.color_input_background};
  color: ${css.color_button_text};
 

`;

const DropdownItemSelected = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 100%;
    background: ${css.color_input_background};
    padding: 0 1rem;
`;

const DropdownListItem = styled.div`
  height: 2rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: ${css.color_input_background};  
  cursor:pointer;
`;


interface DropdownProps {
    options: Array<DropdownOptions>,
    onItemSelect: (item:DropdownOptions) =>any,
    placeholder?:string
}

interface DropdownOptions {
    id:number,
    text:string,
    label:string
}

const Dropdown = (props:DropdownProps) => {

    const [toggle, setToggle] = React.useState(false);

    const list = props.options;
    const [selectedItem, setSelectedItem] = React.useState(()=>{
        return list.length > 0 ? list[0] : null
    });

    // document.addEventListener("click", ()=>{
    //     if(toggle){
    //         setToggle(false)
    //     }
    // });

    const onClickOutsideListener = () => {
        if(toggle){
            setToggle(!toggle)
        }
        document.removeEventListener("click", onClickOutsideListener)
    }



    return (
       <DropdownContainer  onMouseLeave={() => {
           document.addEventListener("click", onClickOutsideListener)
       }}>
           <LeftArrow>
               <i className="fas fa-arrow-up"></i>
           </LeftArrow>

           <DropdownList>

               <DropdownItemSelected  onClick={()=>{setToggle(!toggle)}}>
                   <span>{selectedItem ? selectedItem.text : props.placeholder ? props.placeholder : "Select" }</span>
                   <span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                           <path
                               d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                       </svg>
                   </span>
               </DropdownItemSelected>
               {
                  toggle && list.map((item, index)=>(
                      <DropdownListItem key={`item-${index}`} onClick={()=>{
                          if(item !== selectedItem){
                              props.onItemSelect(item);
                              setSelectedItem(item);
                          }
                          setToggle(!toggle)
                      }}>
                          {item.text}
                      </DropdownListItem>
                  ))
               }
           </DropdownList>

       </DropdownContainer>
    )

};

export default Dropdown
