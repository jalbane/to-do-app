import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input`
    width: 80%;
    font-size: 20px;
    background-color: whitesmoke;
    margin: 0;
`;

function SearchBar(props){

    function handleSearchFilter(e){
        if (e.target.value === ""){
            return props.setTodo([...props.copyTodo])
        }
        let tempArray = props.todo.slice();
        tempArray = tempArray.filter(item => item.text.includes(e.target.value.toLowerCase()))
        props.setTodo(tempArray)
    }

    return(
        <div>
            <StyledSearchBar required type="text" placeholder="Search" onChange={(e) => handleSearchFilter(e)}></StyledSearchBar>
        </div>
    )
}

export default SearchBar;