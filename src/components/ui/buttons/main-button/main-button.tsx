interface MainButton {
  type: string;
  caption: string;
  disabled: boolean;
}

export default function MainButton(props: MainButton) {
  const { caption, type, disabled } = props;
  return (
    <button className="border-0 bg-blue hover:bg-btn-blue-hover active:bg-violet-700 w-60 h-8 rounded-md" type={type} disabled={disabled}>
      {caption}
    </button>
  );
}
