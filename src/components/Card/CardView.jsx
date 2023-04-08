import { useEffect, useState } from "react";
import React from "react";
import ButtonCard from "./ButtonCard";
import { getAllTasksapi } from "api/Tasksapi";
export default function CardView(props) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTaskList = async () => {
      try {
        const result = await getAllTasksapi();
        setData(result);
        setError(true);
      } catch (error) {
        setError(false);
        console.log("error", error);
      }
    };
    getTaskList();
  }, []);
  return (
    <div className="flex flex-row flex-wrap  bg-[rgba(216,216,216,1)] overflow-clip items-start text-left font-normal font-['Poppins']">
      {error &&
        data.map((datas) => (
          <div
            key={datas.id}
            className="px-6 py-4 bg-white gap-2.5 inline-flex flex-col items-start self-stretch relative w-[730px] ml-50 m-10 min-h-100 z-1 rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(218,_222,_223,_1)_inset] [box-shadow-width:1px]"
          >
            <div className="relative w-1/2 flex justify-between items-start self-stretch">
              <div className="h-72 gap-2 flex items-start self-stretch w-[357px]">
                <div className="w-12 h-12 rounded-[5px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/64e20be08cf548f99b78c28360752b9573147dd9.webp)_center_/_cover]" />
                <div className="gap-5 w-[301px]">
                  <div className="gap-6 flex flex-col items-start">
                    <div className="flex flex-col items-start">
                      <p className="text-2xl leading-8 text-black m-0">
                        {datas.jobtitle}
                      </p>
                      <p className="text-base leading-6 text-black m-0">
                        {datas.companyname} - {datas.industry}
                      </p>
                      <p className="text-base leading-6 m-0 text-[rgba(122,122,122,1)]">
                        {datas.location}, India ({datas.remotetype})
                      </p>
                    </div>
                    <div className="w-full gap-2 flex flex-col items-start self-stretch text-[rgba(33,36,39,1)]">
                      <div className="gap-2.5">
                        <p className="text-base leading-6 m-0">
                          Part-Time (9.00 am - 5.00 pm IST)
                        </p>
                      </div>
                      <div className="gap-2.5">
                        <p className="text-base leading-6 m-0">
                          Experience ({datas.experiencestart} -{" "}
                          {datas.experienceend} years)
                        </p>
                      </div>
                      <div className="gap-2.5">
                        <p className="text-base leading-6 m-0">
                          INR (₹) {datas.salarystart} - {datas.salaryend} /
                          Month
                        </p>
                      </div>
                      <div className="gap-2.5">
                        <p className="text-base leading-6 m-0">
                          51-{datas.totalemployee} employees
                        </p>
                      </div>
                    </div>
                    <div className="gap-1">
                      <div className="gap-[5px]">
                        <div className="gap-6 flex items-center">
                          <ButtonCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-14 w-[135px]" />
            </div>
          </div>
        ))}
    </div>
  );
}
