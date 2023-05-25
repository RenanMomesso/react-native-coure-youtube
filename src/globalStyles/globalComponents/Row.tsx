import styled from 'styled-components/native'

const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
    gap: 8px;
`
export default Container