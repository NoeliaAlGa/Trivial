import styled from "styled-components";

export const DivPregunta = styled.div`
    display : flex;
    flex-direction : row;
`

export const UlStyle = styled.ul`
    width: 40%;
    text-align: right;
    margin-right: 2rem;
    list-style-type: none;
`
export const LiStyle = styled.li`
    height: 20px;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: Crimson;
        color: white;
    }
`
export const ImgStyle = styled.img`
    width: 350px;
    height: 200px;
`