export default function ButtonCard() {
  return (
    <>
      <div
        className={`className="w-[118px]" px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[118px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']`}
      >
        <button className="text-base leading-normal m-0">Apply Now</button>
      </div>
      <div
        className={`px-4 py-2 bg-white gap-1 inline-flex items-center text-center font-medium w-[130px] overflow-clip rounded-[5px] font-['Poppins'] text-[rgba(21,151,228,1)] [box-shadow:0px_0px_0px_1px_rgba(21,_151,_228,_1)_inset] [box-shadow-width:1px]`}
      >
        <button className="text-base leading-normal m-0">External Apply</button>
      </div>
      
    </>
  );
}
