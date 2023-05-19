import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white || '#FFF'};
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`