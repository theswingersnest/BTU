export default function ThemeBtn(props) {
  return (
    <>
      <button onClick={props.onClick} className={`cursor-pointer rounded-lg border-none text-white py-2 px-4 ${props.bgColor || "bg-[#0000004d]"}`}>
        {props.title}
      </button>
    </>
  );
}
