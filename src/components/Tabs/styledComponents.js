import styled from 'styled-components'

export const Button = styled.button`
  border-color: #db1c48;
  border-width: 1px;
  border-radius: 9px;
  border-style: solid;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  /* Add more styles if needed */
`

export const ListItem = styled.li`
  margin-right: 10px;
`
