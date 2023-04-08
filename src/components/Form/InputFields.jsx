export default function InputFields(props) {
  return (
    <>
      {props.form === 1 && (
        <div
          className={`gap-2 text-left font-['Poppins'] transition-all ${
            props.type === "DEFAULT_TYPE2" ? "w-full" : ""
          } ${props.type === "DEFAULT_TYPE" ? "w-full" : ""} ${
            props.type === "DEFAULT_TYPE1" ? "w-full" : ""
          } ${props.type === "DEFAULT_TYPE3" ? "flex-1" : ""} ${
            props.type === "DEFAULT_TYPE4" ? "flex-1" : ""
          }`}
        >
          <div className="w-full gap-1 flex flex-col items-start self-stretch">
            <div
              className={`gap-2 flex items-center font-medium w-[214px] transition-all ${
                props.type === "DEFAULT_TYPE3" ? "text-[rgba(33,33,33,1)]" : ""
              } ${
                props.type === "DEFAULT_TYPE4" ? "text-[rgba(33,33,33,1)]" : ""
              }`}
            >
              {props.type === "DEFAULT_TYPE3" && (
                <p className="text-sm leading-5 m-0">Location</p>
              )}
              {props.type === "DEFAULT_TYPE4" && (
                <p className="text-sm leading-5 m-0">Remote type</p>
              )}
              {props.type === "DEFAULT_TYPE2" && (
                <div className="leading-none relative">
                  <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                    Industry
                  </p>
                  <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                    *
                  </p>
                </div>
              )}
              {props.type === "DEFAULT_TYPE" && (
                <div className="leading-none relative">
                  <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                    Job title
                  </p>
                  <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                    *
                  </p>
                </div>
              )}
              {props.type === "DEFAULT_TYPE1" && (
                <div className="leading-none relative">
                  <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                    Company name
                  </p>
                  <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                    *
                  </p>
                </div>
              )}
            </div>
            <div className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]">
              <div className="flex-1 flex items-center flex-grow">
                <input
                  className="text-sm leading-5 m-0"
                  required={props.required}
                  placeholder={props.text}
                  type={props.data}
                  name={props.name}
                  pattern={props.pattern}
                  onChange={props.onChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.form === 2 && (
        <div
          className={`gap-2 text-left font-['Poppins'] transition-all ${
            props.type === "DEFAULT_TYPE3"
              ? "flex-1 font-normal text-[rgba(122,122,122,1)]"
              : ""
          } ${props.type === "DEFAULT_TYPE" ? "w-full" : ""} ${
            props.type === "DEFAULT_TYPE1" ? "flex-1" : ""
          } ${props.type === "DEFAULT_TYPE2" ? "flex-1" : ""}`}
        >
          <div className="w-full gap-1 flex flex-col items-start self-stretch">
            {props.type === "DEFAULT_TYPE2" && (
              <div className="gap-2 flex items-center font-medium w-[214px] text-[rgba(33,33,33,1)]">
                <p className="text-sm leading-5 m-0">Salary</p>
              </div>
            )}
            {props.type === "DEFAULT_TYPE" && (
              <div className="gap-2 flex items-center font-medium w-[214px] text-[rgba(33,33,33,1)]">
                <p className="text-sm leading-5 m-0">Total employee</p>
              </div>
            )}
            {props.type === "DEFAULT_TYPE1" && (
              <div className="gap-2 flex items-center font-medium w-[214px] text-[rgba(33,33,33,1)]">
                <p className="text-sm leading-5 m-0">Experience</p>
              </div>
            )}
            <div
              className={`px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch rounded-[5px] transition-all [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px] ${
                props.type === "DEFAULT_TYPE2"
                  ? "font-normal text-[rgba(122,122,122,1)]"
                  : ""
              } ${
                props.type === "DEFAULT_TYPE"
                  ? "font-normal text-[rgba(122,122,122,1)]"
                  : ""
              } ${
                props.type === "DEFAULT_TYPE1"
                  ? "font-normal text-[rgba(122,122,122,1)]"
                  : ""
              }`}
            >
              <div className="flex-1 flex items-center flex-grow">
                <input
                  className="text-sm leading-5 m-0"
                  required={props.required}
                  placeholder={props.text}
                  type={props.data}
                  name={props.name}
                  pattern={props.pattern}
                  onChange={props.onChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
