import React from 'react';
import Search from '../icons/Search.js'
import styled from 'styled-components';

const Input = styled.input`
    font-size: 16px;
    background-color: transparent;
    display: inline;
    padding: 0px;
    outline: none;
    border: none;
`;

const SearchBarIcon = styled.i `
    position: relative;
    top: -4px;
`
const MainSearchBar = styled.div `
    box-sizing: border-box;
    border: black 1px solid;
    border-radius: 15px;
    background-color: white;
    width: 65%;
    display: inline-flex;
    height: 30px;
    &:hover{
        cursor: text;
    }
`;
/**
 * 
 * @param {*} props - setTodo, todo
 * @returns 
 */
function SearchBar(props){
    /** onChange event listener
     *  
     * @param {*} e - Event 
     * @returns renders the Search bar input field and magnifying glass icon.
     */
    function handleSearchFilter(e){
        let getTodos = Object.values(localStorage)
        let arr = []
        if (e.target.value === ""){
            for (const element of getTodos){
                arr.push(  element)
            }
            return props.setTodo(arr)
        }

        for (const element of getTodos){
            if (element.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                arr.push( element )
            }
        }    
        props.setTodo(arr)
    }

    return(
        <MainSearchBar >
            <SearchBarIcon> <Search /> </SearchBarIcon>
            <Input required type="text" placeholder="Search" onChange={(e) => handleSearchFilter(e)}></Input>
        </MainSearchBar>
    )
}

export default SearchBar;