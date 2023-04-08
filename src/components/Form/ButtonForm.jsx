export default function ButtonForm(props) {
  return (
    <div
      className={`px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[68px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']`}
    >
      <button
        type={props.type}
        className="text-base leading-normal m-0"
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
}
