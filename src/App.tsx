import React, { useState } from 'react';

function App() {
  

  return (
    <div className=" h-screen w-screen py-[60px]">
      <div className="px-[22%] w-full mx-auto">
      <div className="w-full border border-r-slate-300 bg-gray-50 shadow-sm">
        <div className="flex justify-between py-[6px] px-[10px] flex-row bg-[#f9f9f9] hover:text-[#51a331]">
          <div className="text-lg  "><p>PAIS+LIGA</p></div>
          <div className="">
            <svg width="24px" height="24px" className="fill-green-500 ">
              <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 20.5C12.2761 20.5 12.5 20.2761 12.5 20C12.5 19.7239 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.7239 11.5 20C11.5 20.2761 11.7239 20.5 12 20.5Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 4.5C12.2761 4.5 12.5 4.27614 12.5 4C12.5 3.72386 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.72386 11.5 4C11.5 4.27614 11.7239 4.5 12 4.5Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </svg>
          </div>
        </div>
        <div className="pt-[3px] pb-[10] bg-white  shadow-lg">
          <div className="flex px-[5px] mb-[2px] min-h-3 justify-between">
            <div className='basis-4/12 '><div className=' bg-[#a7a7a7] w-9 text-white text-xs p-[1px] text-center font-medium'>Fin</div></div>
            <div className='text-[#717171] text-sm'>Fase de Zonas</div>
            <div className='basis-4/12 text-right text-sm'>DAZN</div>
          </div>
          <div className="row-span-3 flex flex-row text hover:text-[#51a331]">
            <div className="basis-1/2 text-right ">
              <div className=" text-[#383838] hover:text-[#51a331] ">Belgrano</div>
              <div className="hidden">roja</div>
            </div>
            <div className="w-[62px] text-center text-[#717171]  text-2xl hover:text-[#51a331]  ">23:00</div>
            <div className=" basis-1/2 hover:text-[#51a331]">
              <div className="hidden">roja</div>
              <div className="text-[#383838] hover:text-[#51a331] text-lg ">Lanus</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  );
}

export default App;