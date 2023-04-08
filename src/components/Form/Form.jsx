import InputFields from "./InputFields";
import ButtonForm from "./ButtonForm";
import React from "react";
import { useState } from "react";
import RadioButtonField from "./RadioButtonField";
import { createTasksApi } from "api/Tasksapi";

export default function Form({ props, visible, onClose }) {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    jobtitle: "",
    companyname: "",
    industry: "",
    location: "",
    remotetype: "",
    experiencestart: 0,
    salarystart: 0,
    totalemployee: 0,
    applytype: "",
    experienceend: 0,
    salaryend: 0,
  });

  const Next = (e) => {
    e.preventDefault();
    setFormNo(formNo + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevprops) => ({
      ...prevprops,
      [name]: value,
    }));
  };
  // console.log(state);

  const JSONdata = {
    jobtitle: state.jobtitle,
    companyname: state.companyname,
    industry: state.industry,
    location: state.location,
    remotetype: state.remotetype,
    experiencestart: state.experiencestart,
    salarystart: state.salarystart,
    totalemployee: state.totalemployee,
    applytype: state.applytype,
    experienceend: state.experienceend,
    salaryend: state.salaryend,
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const Save = (e) => {
    e.preventDefault();
    createTasksApi(JSONdata);
    setState({
      jobtitle: "",
      companyname: "",
      industry: "",
      location: "",
      remotetype: "",
      experiencestart: 0,
      salarystart: 0,
      totalemployee: 0,
      applytype: true,
      experienceend: 0,
      salaryend: 0,
    });
    onClose();
  };
  if (!visible) return null;

  return (
    <div onClick={handleOnClose}>
      <div
        id="container"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="">
          {formNo === 1 && (
            <form
              onSubmit={Next}
              className={`bg-white gap-8 inline-flex flex-col items-center p-8 rounded-[10px] font-['Poppins'] text-[rgba(24,32,33,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]`}
            >
              <div className="gap-24 flex flex-col items-start">
                <div className="gap-6 flex flex-col items-start w-[513px] overflow-clip">
                  <div className="flex justify-between items-center w-[513px]">
                    <p className="text-xl font-normal leading-7 text-left m-0">
                      Create a job
                    </p>
                    <p className="text-base font-medium leading-6 text-right m-0">
                      Step 1
                    </p>
                  </div>
                  <InputFields
                    form={formNo}
                    type="DEFAULT_TYPE"
                    text="ex. UX UI Designer"
                    data="text"
                    name="jobtitle"
                    required="required"
                    onChange={handleInputChange}
                  />
                  <InputFields
                    form={formNo}
                    type="DEFAULT_TYPE1"
                    text="ex. Google"
                    data="text"
                    name="companyname"
                    required="required"
                    onChange={handleInputChange}
                  />
                  <InputFields
                    form={formNo}
                    type="DEFAULT_TYPE2"
                    text="ex. Information Technology"
                    data="text"
                    name="industry"
                    required="required"
                    onChange={handleInputChange}
                  />
                  <div className="w-full gap-6 flex items-end self-stretch">
                    <InputFields
                      form={formNo}
                      type="DEFAULT_TYPE3"
                      text="ex. Chennai"
                      data="text"
                      name="location"
                      // required="required"
                      onChange={handleInputChange}
                    />
                    <InputFields
                      form={formNo}
                      type="DEFAULT_TYPE4"
                      text="ex. In-office"
                      data="text"
                      name="remotetype"
                      // required="required"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center w-[513px]">
                  <div className="gap-6 w-[68px]">
                    <ButtonForm type="submit" name="Next"></ButtonForm>
                  </div>
                </div>
              </div>
            </form>
          )}
          {formNo === 2 && (
            <div>
              <div
                className={`bg-white gap-24 inline-flex flex-col items-center p-8 h-[564px] rounded-[10px] font-['Poppins'] text-[rgba(24,32,33,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]`}
              >
                <div className="gap-6 flex flex-col items-start">
                  <div className="gap-2 flex items-center w-[513px]">
                    <p className="flex-1 text-xl font-normal leading-7 text-left m-0">
                      Create a job
                    </p>
                    <p className="flex-1 text-base font-medium leading-6 text-right m-0">
                      Step 2
                    </p>
                  </div>
                  <div className="gap-6 flex flex-col items-start w-[513px] overflow-clip">
                    <div className="w-full gap-6 flex items-end self-stretch">
                      <InputFields
                        form={formNo}
                        type="DEFAULT_TYPE1"
                        text="Minimum"
                        data="number"
                        pattern="[0-9]*"
                        name="experiencestart"
                        onChange={handleInputChange}
                      />
                      <InputFields
                        form={formNo}
                        type="DEFAULT_TYPE3"
                        text="Maximum"
                        data="number"
                        pattern="[0-9]*"
                        name="experienceend"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full gap-6 flex items-end self-stretch">
                      <InputFields
                        form={formNo}
                        type="DEFAULT_TYPE2"
                        text="Minimum"
                        data="number"
                        pattern="[0-9]*"
                        name="salarystart"
                        onChange={handleInputChange}
                      />
                      <InputFields
                        form={formNo}
                        type="DEFAULT_TYPE3"
                        text="Maximum"
                        data="number"
                        pattern="[0-9]*"
                        name="salaryend"
                        onChange={handleInputChange}
                      />
                    </div>
                    <InputFields
                      form={formNo}
                      type="DEFAULT_TYPE"
                      text="ex. 100"
                      data="number"
                      pattern="^([1-9]|[12]\d|3[0-6])$"
                      name="totalemployee"
                      onChange={handleInputChange}
                    />
                    <div className="w-full gap-6">
                      <RadioButtonField
                        type="radio"
                        name="applytype"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center self-stretch ">
                  <div className="gap-6 w-[72px]">
                    <ButtonForm
                      type="submit"
                      name="Save"
                      onClick={Save}
                    ></ButtonForm>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
