import icons from '../../../../assets/icons/ui';

export default function BurgerBtn() {
  const { burger } = icons;
  return (
    <div style="width: 40px; height: 40px; border: 1px solid black; background-color: blue;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="rgba(255, 255, 255, 0.55)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>
    </div>
  );
}
