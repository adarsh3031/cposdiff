import React from 'react';

export default function ShowVipCategory({ arrcateg, index }) {

    const category_name = ["2 Digits", "7 times", "Sum 9", "3 Digits", "6 times", "ABCD-X-ABCD-Y", "XY-ABBA-ABBA", "ABCC-X-ABCC-Y", "ABC-XX-ABC-YY", "XY=A0B0C0D0", "XY-ABAB-CDCD", "ABC-ABC-WXYZ"];
    const colors = ["red-400", "blue-300", "green-300", "pink-400", "yellow-500"]



    return (
        <div className="w-full  rounded-lg shadow-lg lg:w-1/12">

            <ul class="divide-y-2  ">

                {index == 0 || index == 1

                    ?

                    <div className={`flex justify-center align-center font-semibold    text-gray-900 my-3  text-sm  animate-pulse   bg-red-700 opacity-80 `} >

                        {category_name[index]}
                    </div>

                    :

                    <div className={`flex justify-center align-center font-semibold  bg-${colors[index % 5]}  text-gray-900 my-3  text-sm   `} >

                        {category_name[index]}
                    </div>

                }




                {arrcateg.map(h => (
                    <div>

                        <tr>
                            <li class="p-3  hover:bg-blue-600 hover:text-blue-200">
                                {h}
                            </li>

                        </tr>

                    </div>
                ))}
            </ul>
        </div>


    )
};
