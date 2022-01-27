
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {


  const [oldcsvFile, SetoldCsvFile] = useState();
  const [newcsvFile, SetnewCsvFile] = useState();
  const formData = new FormData();
  const formData2 = new FormData();
  const [loading, setLoading] = useState(0);



  const [data, setData] = useState(["hello data will be shown here"]);
  const [vip, setVip] = useState([['find vips'], ['h'], ['h'], ["h"], ["j"]]);


  const onChange1 = (e) => {
    let oldfile = (e.target.files[0]);
    formData.append('file', oldfile);
  }

  const onChange2 = (e) => {
    let newfile = (e.target.files[0]);
    formData.append('file', newfile);
  }

  const onChange3 = (e) => {
    let findvip = e.target.files[0];
    formData2.append('file', findvip);
  }



  const submitForm1 = async () => {
    setLoading(1);
    const url = '/hello';
    try {
      var ans = await axios.post(url, formData);
      console.log(ans);
      if (ans) {
        setLoading(0);
      }
    }
    catch (e) {
      setLoading(0);
      console.log(e);
      let abcd = ['files sahi se upload karo bhaiya'];

      setData(abcd);
      return;
    }
    console.log(ans, "i am response");
    let myarr = [];
    for await (let d of ans.data) {
      myarr.push(d);
    }
    setData(myarr);
    formData.delete('file');
  }

  const submitForm2 = async () => {
    let url = '/vip';
    setLoading(1);
    try {
      var answer = await axios.post(url, formData2);
      console.log(answer);
      if (answer) {
        setLoading(0);
      }
    }
    catch (e) {
      setLoading(0);
      console.log(e);
      let abcd = [['files sahi se upload karo bhaiya'], ["f"], ["d"], , ["f"], ["d"]];

      setVip(abcd);
      return;
    }
    console.log(answer, "i am response");
    let myarr = [];
    for await (let d of answer.data) {
      myarr.push(d);
    }
    setVip(myarr);
    formData2.delete('file');

  }







  return (
    <div className="">


      <div className="">


        <div>

          <div className="flex justify-center mt-10 mx-auto">

            <div className="  w-full max-w-xs">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="oldfile"
                  >
                    Old CSV File
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file" name="file" onChange={onChange1}
                    placeholder="oldfile"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="newfile"
                  >
                    New CSV File
                  </label>
                  <input
                    className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="file" name="file" onChange={onChange2}
                    placeholder="newfile"
                  />

                  <div class="flex justify-center mt-5">

                    <input type="submit" onClick={submitForm1} />

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

                <div class="flex items-center justify-center space-x-2 animate-bounce">
                  <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-green-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-black rounded-full"></div>
                  <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div class="w-8 h-8 bg-red-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-black rounded-full"></div>
                </div>
              </div>

              :
              <div className="flex justify-center ">

                <div class="w-full bg-gray-200 rounded-lg shadow-lg lg:w-1/3">
                  <ul class="divide-y-2 divide-gray-500">

                    {data.map(h => (
                      <div>

                        <tr>
                          <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                            {h}
                          </li>

                        </tr>

                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            }

          </div>









        </div>


        <div>




          <div className="flex justify-center mt-10 mx-auto">

            <div className="  w-full max-w-xs">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="oldfile"
                  >
                    CSV File
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file" name="file" onChange={onChange3}
                    placeholder="file"
                  />
                </div>
                <div className="mb-6">


                  <div class="flex justify-center mt-5">

                    <input type="submit" onClick={submitForm2} />

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

                <div class="flex items-center justify-center space-x-2 animate-bounce">
                  <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-green-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-black rounded-full"></div>
                  <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div class="w-8 h-8 bg-red-400 rounded-full"></div>
                  <div class="w-8 h-8 bg-black rounded-full"></div>
                </div>
              </div>

              :
              <div>


                {
                  vip.constructor === Array ?
                    <div className="flex justify-between  ">



                      <ul class="divide-y-2 divide-gray-500">
                        Sum 9




                        {vip[0].map(h => (
                          <div>

                            <tr>
                              <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                                {h}
                              </li>

                            </tr>

                          </div>
                        ))}
                      </ul>




                      <ul class="divide-y-2 divide-gray-500">
                        Only 2 digits
                        {vip[1].map(h => (
                          <div>

                            <tr>
                              <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                                {h}
                              </li>

                            </tr>

                          </div>
                        ))}
                      </ul>


                      <ul class="divide-y-2 divide-gray-500">
                        Only 3 digits
                        {vip[2].map(h => (
                          <div>

                            <tr>
                              <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                                {h}
                              </li>

                            </tr>

                          </div>
                        ))}
                      </ul>


                      <ul class="divide-y-2 divide-gray-500">

                        6 times repeat

                        {vip[3].map(h => (
                          <div>

                            <tr>
                              <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                                {h}
                              </li>

                            </tr>

                          </div>
                        ))}
                      </ul>


                      <ul class="divide-y-2 divide-gray-500">

                        7 times repeat

                        {vip[4].map(h => (
                          <div>

                            <tr>
                              <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                                {h}
                              </li>

                            </tr>

                          </div>
                        ))}
                      </ul>

                    </div>

                    :
                    <div>Nothing</div>
                }

              </div>




            }


          </div>


        </div>


      </div>



    </div>



  )


}

export default App;
