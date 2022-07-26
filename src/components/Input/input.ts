import styled from 'styled-components';

export const Container = styled.div`
width:100%;
color: white;
padding: 3em;
form {
    margin: 0 auto;
    display:flex;
        flex-direction: column;
        width: 100%;
        max-width: 370px;
        margin-bottom: 2em;
    }
    ul {
        list-style: none;
        li {
            padding: 2px;
            text-align: center;
            border: 1px solid white;
            border-radius: 50px;
            margin-bottom: 20px;
        }
    }
`;
