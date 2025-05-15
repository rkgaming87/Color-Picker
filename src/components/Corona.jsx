import React, { useState } from "react";

const Corona = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const demoData = {
        west_bengal: { infected: "1,00,000", recovered: "900,000", deaths: "10,000" },
        delhi: { infected: "800,000", recovered: "760,000", deaths: "20,000" },
        kerala: { infected: "300,000", recovered: "238,000", deaths: "3,000" },
        uttar_pradesh: { infected: "20,000", recovered: "10,000", deaths: "2,000" },
        uttarakhand: { infected: "60,000", recovered: "390,000", deaths: "4,000" },
        tripura: { infected: "50,000", recovered: "20,000", deaths: "7,000" },
        telangana: { infected: "400,000", recovered: "290,000", deaths: "3,000" },
        sikkim: { infected: "700,000", recovered: "290,000", deaths: "3,000" },
        delhi: { infected: "90,000", recovered: "70,000", deaths: "5,000" },
        odisha: { infected: "30,000", recovered: "20,000", deaths: "3,050" },
        rajasthan: { infected: "350,000", recovered: "180,000", deaths: "2,400" },
    };

    const handleSelectChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const data = demoData[selectedCountry] || {
        infected: "0",
        recovered: "0",
        deaths: "0",
    };
    return (
        <>
            <div className="mt-6 w-full flex items-center justify-center ">
                <div className="flex gap-5">

                    <div className="h-[150px] w-[35%] bg-sky-300 px-4 py-5 border-b-[8px] border-blue-600">
                        <h5 className="text-gray-500">Infected</h5>
                        <p className="text-xl">{data.infected}</p>
                        <p className="text-gray-500 text-[13px]">Fri Ma 15 2020</p>
                        <p>Number of active cases of Covid-19</p>
                    </div>

                    <div className="h-[150px] w-[35%] bg-sky-300 px-4 py-5 border-b-[8px] border-green-600">
                        <h5 className="text-gray-500">Recovered</h5>
                        <p className="text-xl">{data.recovered}</p>
                        <p className="text-gray-500 text-[13px]">Fri Ma 15 2020</p>
                        <p>Number of recoveries from Covid-19</p>
                    </div>

                    <div className="h-[150px] w-[35%] bg-red-300 px-4 py-5 border-b-[8px] border-red-600">
                        <h5 className="text-gray-500">Deaths</h5>
                        <p className="text-xl">{data.deaths}</p>
                        <p className="text-gray-500 text-[13px]">Fri Ma 15 2020</p>
                        <p>Number of deaths caused by Covid-19</p>
                    </div>

                </div>



            </div>

            <div className="flex justify-center mt-5">
                <select className=" px-4 py-2 border rounded"
                    name="Country" id="country"
                    value={selectedCountry}
                    onChange={handleSelectChange}>
                    <option value="">Select a State</option>
                    <option value="west_bengal">West Bengal</option>
                    <option value="uttar_pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="tripura">Tripura</option>
                    <option value="telangana">Telangana</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="delhi">Delhi</option>
                    <option value="odisha">Odisha</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="kerala">Kerala</option>

                </select>
            </div>
        </>
    );
};

export default Corona;