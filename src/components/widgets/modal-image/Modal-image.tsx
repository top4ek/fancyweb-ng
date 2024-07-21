import {useEffect} from 'preact/hooks';
import icons from '../../../assets/icons/ui';

export default function ModalImage({ src, alt, close }: { src: string, alt: string, close: () => void }) {
  const { Cross } = icons;
  
  function handleBackdropClick(e: Event) {
    if (e.target instanceof HTMLDivElement && e.currentTarget instanceof HTMLDivElement && e.currentTarget === e.target) close();
  }

  function handleEscKeyPress(e: KeyboardEvent) {
    if (e.code === 'Escape') close();
  }

  useEffect(() => {
    document.addEventListener("keyup", handleEscKeyPress);
    const innerWidth = window.innerWidth;
    const { right: bodyRight } = document.body.getBoundingClientRect();
    document.body.style.width = '100%';
    document.body.style.paddingRight = `${innerWidth - bodyRight}px`;
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    return () => {
      document.removeEventListener("keyup", handleEscKeyPress)
      const scrollY = document.body.style.top;
    document.body.style.width = '';
      document.body.style.position = 'static';
      document.body.style.setProperty('padding-right', '0');
      document.body.style.top = '';
      window.scroll(0, parseInt(scrollY || '0') * -1);
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain bg-[rgba(0,0,0,0.6)] z-[1500] py-8 outline-0 md:block flex flex-row items-center" onClick={handleBackdropClick}>
      <div className="w-10/12 mx-auto border rounded-lg bg-white">
        <div className="flex flex-row p-4 bg-white border-b-2 rounded-t-lg">
          <p className="w-[calc(100%-24px)] truncate text-brand-blue text-lg">{alt}</p>
          <div className="w-6 h-6 *:w-6 *:h-6 *:fill-light-blue hover:*:fill-brand-blue hover:cursor-pointer *:transition-all" onClick={close}>
            <Cross />
          </div>
        </div>
        <div className="p-4">
          <img className="mx-auto" src={src} alt={alt}/>
        </div>
      </div>
    </div>
  );
}
