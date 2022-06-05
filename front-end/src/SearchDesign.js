import React, { useState } from 'react'
import axios from 'axios';
import Backdrop from './Backdrop'

import DataGridShow from './Table/DataGridShow'


const SearchDesign = () => {





    const allEqual = async (arr) => arr.every(v => v === arr[0])
    let [search, setSearch] = useState('');
    let [result, setResult] = useState('');
    let [filter, setFilter] = useState(0);
    let [patternObj, setPatternObj] = useState({});

    let [finalOutput, setFinalOutput] = useState([]);

    let [oldFile,setOldFile] = useState('')

    

    const [loading, setLoading] = useState(0);


    const onChange1 = (e) => {
        setOldFile(e.target.files[0])
        // let oldfile = (e.target.files[0]);
        // formData.append('file', oldfile);
        // console.log(formData);
    }

    const onChange2 = (e) => {

        // console.log(e.target.value)



        setSearch(e.target.value);

        // let s = e.target.value;

        // if (s !== undefined && s !== null && s.length === 10) {

        //     let Obj = {};

        //     for (let i = 0; i < 10; i++) {
        //         if (Obj[s[i]] === undefined) {
        //             Obj[s[i]] = [];
        //         }
        //         Obj[s[i]].push(i);
        //     }

        //     setPatternObj(Obj);
        //     console.log(Obj);

        // }







    }

    const submitForm1 = async () => {
        let formData = new FormData();
        formData.append('file', oldFile);
        let url = '/pattern';
        // let url = 'http://localhost:8000/pattern'

        setLoading(1);

        try {
            var answer = await axios.post(url, formData);
            await setResult(answer.data);
            if (answer) {
                setLoading(0);
            }
        }
        catch (e) {
            setLoading(0);
            console.log(e);
            let abcd = [["sahi se file upload karo bhaiya"]];
            setResult(abcd);
            return;
        }
        console.log(answer.data, "i am response");
        formData.delete('file');
    }


    const searchPattern = async () => {

        let url = '/searchdesign';
        // let url = 'http://localhost:8000/searchdesign';

        // let postArr = [result, patternObj]

        let postData = {

            // "pattern": patternObj,
            "arr": result,
            "search": search,
        }

        setFilter(1);

        try {
            var ans = await axios.post(url, postData);
            await setFinalOutput(ans.data);
            if (ans) {
                setFilter(0);
            }

            // console.log(ans.data);

        }
        catch (e) {
            setFilter(0);
            console.log(e, "error hai bhaisahab")
            let abcd = [["sahi se search karo bhaiya"]];
            setResult(abcd);
            return;

        }
        console.log(ans.data, "i am response");



    }


    return (
        <div>


            <div className="flex justify-center mt-10 mx-auto">

                <div className="  w-full max-w-xs ">
                    <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="oldfile"
                            >
                                CSV File
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="file" name="file" onChange={onChange1}
                                placeholder="oldfile"
                            />
                        </div>
                        <div className="mb-6">


                            <div class="flex justify-center ">

                                <input type="submit" onClick={submitForm1} className="mt-5 bg-green-600 hover:bg-blue-800 text-gray-800 font-bold py-2 px-4 rounded" />

                            </div>

                        </div>
                        <div className="flex items-center justify-between">


                        </div>
                    </div>

                </div>
            </div>



            <div>

                {loading === 1 ?
                    <div className="mt-20">

                        <div className="flex items-center justify-center space-x-2 animate-bounce">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                    </div>
                    :
                    result === ''
                        ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce">
                            Upload file to search patterns like ababxyabab or abcdabcdef
                        </div>


                        :

                        <div>


                            <div className="flex items-center justify-center space-x-2 ">

                                <div className="mb-6">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="newfile"
                                    >
                                        10 digit pattern
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" maxLength="10" onChange={onChange2}
                                        placeholder={search}
                                    />

                                    <div class="flex justify-center ">

                                        <input type="submit" onClick={searchPattern} className="mt-5 bg-green-600 hover:bg-blue-800 text-gray-800 font-bold py-2 px-4 rounded " />

                                    </div>

                                </div>

                            </div>


                            <div>


                                {filter === 1
                                    ?




                                    <div className="mt-20">
                                        <Backdrop />
                                    </div>

                                    :

                                    <div className="flex items-center justify-center space-x-2 ">
                                        <div>
                                            <div className='my-2 text-xl font-bold text-blue-400'>Here are the matches for {search}</div>
                                            {/* {finalOutput.map(h => (
                                                <div>


                                                    <tr className="border border-2">
                                                        <li className="p-3 hover:bg-blue-600 hover:text-blue-200 border border-2 ">
                                                            {h}
                                                        </li>

                                                    </tr>

                                                </div>
                                            ))} */}

                                            <DataGridShow rows={finalOutput} />
                                        </div>

                                    </div>

                                }











                            </div>



                        </div>




                }

            </div>
        </div>
    )
}

export default SearchDesign;
