import {Button, ListItem} from './styledComponents'

const Tabs = props => {
  const {tabDetails, setTabId, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    setTabId(id)
  }

  return (
    <ListItem>
      <Button isActive={isActive} onClick={onClickTab}>
        {buttonText}
      </Button>
    </ListItem>
  )
}

export default Tabs
