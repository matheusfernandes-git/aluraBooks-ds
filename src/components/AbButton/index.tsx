import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    text?: string,
    tipo?: 'primary' | 'secondary',
    onClick?: () => void
}

const StyledButton = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps) => props.tipo === 'primary' ? '#EB9B00' : '#FFF'} ;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbButtonProps) => props.tipo === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbButtonProps) => props.tipo === 'primary'
        ? css`
        &:hover{
            background: #BB7900;
            border: 1px solid #BB7900;
        }`
        : `
        &:hover{
            background: #FFF;
            border: 1px solid #B87900;
            color: #B87900;
        }`
    }
`

export const AbButton = ({ text, onClick, tipo = 'primary' }: AbButtonProps) => {
    return (
        <StyledButton onClick={onClick} tipo={tipo}>{text}</StyledButton>
    )
}
