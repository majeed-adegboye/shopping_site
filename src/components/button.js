import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.2rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.1rem 0.3rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&:focus{
    outline:none
}
`;

export const ButtonContainer2 = styled.button`
text-transform:capitalize;
font-size:1.2rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props =>
props.cart ? "var(--mainYellow)":"var(lightBlue)"};
color: ${prop =>
    (prop.cart ? "var(--mainYellow)":"var(lightBlue)")};
border-radius: 0.5rem;
padding: 0.1rem 0.3rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${prop =>
        prop.cart ? "var(--mainYellow)":"var(lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline:none
}
`;
export const ButtonContainer3 = styled.button`
text-transform:capitalize;
background-color: var(--mainWhite) !important 
font-size:1.2rem;
border:0.05rem solid var(--red);
color: var(--red);
border-radius:2rem;
padding: 0.1rem 0.3rem;

`;