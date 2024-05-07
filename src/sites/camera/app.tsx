import MainButton from "../../components/ui/buttons/main-button/main-button"
import IconButton from "../../components/ui/buttons/icon-button/icon-button"
import UIIcons from '../../assets/icons/ui';
const { Burger, Cross } = UIIcons;

export function App() {
  return (
    <>
      <MainButton caption="Положить начало!" type="button" disabled={false} />
      <IconButton>
        <Cross />
      </IconButton>
      <IconButton>
        <Burger />
      </IconButton>
    </>
  )
}
