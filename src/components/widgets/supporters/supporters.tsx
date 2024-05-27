import { supportersConstants } from './constants';

export default function Supporters() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap w-full gap-y-6">
        {supportersConstants.map(supporter => {
          return (
            <div className="basis-2/4 shrink-1 grow-0">
              <a href={supporter.href}>
                <img src={supporter.src}></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
