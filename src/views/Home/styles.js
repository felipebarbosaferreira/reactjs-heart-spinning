import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    color: #EEEEEE;

    .App-logo {
        height: 6vmin;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Content = styled.div`
    margin: 10px 0px 100px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeartSpinning = styled.div`   
    display: flex;
    align-items: center;
    min-height: 50vh;
    
    svg {
        font-size: 1em;
    }

    @media (prefers-reduced-motion: no-preference) {
        svg {
            animation: svg infinite 2s linear;
        }
    }

    @keyframes svg {
        from {
            transform: rotate(0deg);
            color: red;
            font-size: 1em;
        }
        10%{
            color: blue;
        }
        30%{
            color: purple;
        }
        50%{
            color: green;
        }
        70%{
            color: yellow;
        }
        to {
            transform: rotate(20deg);
            color: red;
            font-size: 15em;
        }
    }
`;