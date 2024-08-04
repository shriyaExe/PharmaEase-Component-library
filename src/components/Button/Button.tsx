import React from 'react';
import {StyledButton} from "./Button.styled";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default Button;
