import styled from 'styled-components'
import Button from '@mui/material/Button'

// Дальше идут стили
export const ButtonAbout = styled(Button)`
    &&{
        width: 280px; 
        height: 84px;
        border-radius: 42px;

        font-weight: 600;
        font-size: 26px;
        line-height: 37px;
        text-align: center;

        color: #FFFFFF;
        background: #4985FF;
        text-transform: none;

        transition: .3s all 0s ease-in-out;

        @media (max-width: 1500px) {
            width: 200px;
            height: 54px;

            font-size: 20px;
        }    
    }
`