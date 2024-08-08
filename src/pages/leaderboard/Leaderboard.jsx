import React, { useEffect } from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const testData=[
  {"Name": "John Doe",
  "Points":"1",
  "Project":"event",
"description":"asdfghjkl"},
  {"Name": "John Moe",
    "Points":"3",
    "Project":"event",
  "description":"asdfghjk"},
  {"Name": "John Doe",
    "Points":"6",
    "Project":"event",
  "description":"asdfghjkl"},
  ]
  



export default function Leaderboard() {
  
  const leaderBoard = data => data.sort((a, b) => parseInt(b.Points) - parseInt(a.Points));
  
  const tableData = leaderBoard(testData);




const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);

  // tableData.sort((a, b) => b.points > a.points);



  return (
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 class="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Leaderboard"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p class="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          LeaderBoard
        </p>
      </div>

      {/* header end */}
      <div className="flex flex-row flex-wrap justify-center items-center font-space text-white">
        <div className="flex flex-col justify-center max-w-xs h-[25rem]  p-3  rounded-xl sm:px-12  
         bg-gradient-to-bl from-slate-300 to-gray-50 border-white border-[1px]
        mx-5 my-6 
">
          <div className="bg-gradient-to-b from-slate-300 to-gray-50">
            <div className="my-2 space-y-1">
              <h2 className="text-6xl font-bold sm:text-2xl p-4 mb-8">
                {tableData[1].Name}
              </h2>
      
            </div>
            <div class="border-[20px] border-transparent bg-gradient-to-b from-amber-500 to-amber-100
             rouded-xl ">
              <div className="bg-black p-12 flex items-center align-middle text-[42px] text-bold ">
                  <p>2</p>
                  </div>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col justify-center max-w-xs h-[25rem]  p-6  rounded-xl sm:px-12 bg-transparent border mx-5 my-6  ">
         
        <div className="bg-gradient-to-r from-yellow-400-transparent-100 to-black-transparent-0">
            <div className="my-2 space-y-1">
              <h2 className="text-6xl font-bold sm:text-2xl p-4 mb-8">
                {tableData[0].Name}
              </h2>
      
            </div>
            <div class="border-[20px] border-transparent 
             rouded-xl bg-gradient-to-b from-amber-500 to-amber-100">
              <div className="bg-black p-12 flex items-center align-middle text-[42px] text-bold ">
                  <p>1</p>
                  </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs h-[25rem]  p-6  rounded-xl sm:px-12 bg-transparent border mx-5 my-6  ">
         

        <div className="bg-gradient-to-bl from-slate-300 to-gray-50">
            <div className="my-2 space-y-1">
              <h2 className="text-6xl font-bold sm:text-2xl p-4 mb-8">
                {tableData[2].Name}
              </h2>
      
            </div>
            <div class="border-[20px] border-transparent bg-gradient-to-b from-gray-200 to-amber-500
             rouded-xl ">
              <div className="bg-black p-12 flex items-center align-middle text-[42px] text-bold ">
                  <p>3</p>
                  </div>
            </div>
          </div>
        </div>
      </div>

                  

      {/* leaderboard */}
      <div class="antialiased font-space ">
        <div class="container mx-auto px-4 sm:px-8 ">
          <div class="py-8">
            <div></div>
            <div class="my-2 flex sm:flex-row flex-col opacity-70">
            <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative"></div>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white ">                    
                  </div>
                </div>
              </div>
              <div class="block relative ">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2 bg-[#1A1920]">
                  
                </span>
                
              </div>
            </div>
            {/* Table rows starts here - */}

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden bg-[bg-[#16161A]">
                <table class="min-w-full leading-normal bg-[#16161A]">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Points
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        For Project
                      </th>

                    </tr>
                  </thead>
                  <tbody className="bg-[#16161A]">
                    {tableData.map(
                      ({
                        Name,
                        Points,
                        Project,
                      },index) => {
                        return (
                          <div>
                          <tr class={(index%2)?'bg-[#16161A]':'bg-[#0a0a11]'}
                          onClick={onOpenModal}>
                            <td class="px-5 py-5 border-b border-gray-200  text-sm">
                              <div class="flex items-center">
                                
                                <p class="text-white whitespace-no-wrap text-md">
                                {index}
                                  </p>
                                
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 ">
                            <div class="flex items-center">
                              <p class="text-white whitespace-no-wrap text-md">
                                {Name}
                              </p>
                              </div>
                            </td>
                           
                            <td class="px-5 py-5 border-b border-gray-200">
                            <div class="flex items-center">
                            <p class="text-white whitespace-no-wrap text-md">
                                {Points}
                              </p>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200">
                            <div class="flex items-center">
                            <p class="text-white whitespace-no-wrap text-md">
                              
                                {Project}
                              </p>
                              </div>
                              
                            </td>
                          </tr>

                          <Modal open={open} onClose={onCloseModal} center 
                          class="bg-transparent border-black
                        ">
                           
                           <div className="bg-transparent 
                             w-[300px] h-[300px] border-none">
                            <Typography>{Name}</Typography>
                            <p className="text-white">{Name}</p>
                            <Typography>{Project}</Typography>
                            

                           </div>
                          </Modal>
                          </div>
                        );
                      },
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
