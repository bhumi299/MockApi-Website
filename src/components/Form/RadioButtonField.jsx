export default function RadioButtonField(props) {
  return (
    <div
      className={`flex-1 gap-1 inline-flex flex-col items-start flex-grow text-left font-medium font-['Poppins'] text-[rgba(33,33,33,1)]`}
    >
      <div className="gap-1">
        <p className="text-sm leading-5 m-0">Apply type</p>
      </div>
      <div className="py-2 h-9 gap-5 flex items-center">
        <div className="flex justify-left items-center text-left font-normal w-[246px] font-['Poppins'] text-[rgba(122,122,122,1)]">
          <div className="gap-1 flex items-center w-[107px]">
            <input
              type={props.type}
              value="ApplyNow"
              className="rounded-full border-solid border-2 border-[rgba(216,216,216,1)]"
              onChange={props.onChange}
              name={props.name}
            ></input>
            <p className="text-sm leading-5 m-0">Apply Now</p>
          </div>
          <div className="gap-1 flex items-center w-[107px]">
            <input
              type={props.type}
              name={props.name}
              value="externalapply"
              className="rounded-full border-solid  border-2 border-[rgba(216,216,216,1)]"
              onChange={props.onChange}
            ></input>
            <p className="text-sm leading-5 m-0">External apply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
