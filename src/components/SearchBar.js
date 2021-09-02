import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input`
    font-size: 16px;
    background-color: white;
    width: 70%;
    display: inline;
    margin-top: 15px;
    margin-bottom: 15px;

`;

function SearchBar(props){

    function handleSearchFilter(e){
        let getTodos = Object.values(localStorage)
        console.log(getTodos)
        let arr = []
        if (e.target.value === ""){
            for (const element of getTodos){
                arr.push( {text: element} )
            }
            return props.setTodo(arr)
        }

        for (const element of getTodos){
            if (element.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                arr.push( {text: element} )
            }
        }    
        props.setTodo(arr)
    }

    return(
        <StyledSearchBar required type="text" placeholder="Search" onChange={(e) => handleSearchFilter(e)}></StyledSearchBar>
    )
}

export default SearchBar;