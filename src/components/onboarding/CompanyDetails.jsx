"use client";
import React from "react";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import UploadImg from "./UploadImg"
import {
  Flex,
  Form,
  Input,
  InputNumber,
  Option,
  Progress,
  Segmented,
  Select,
  Item,
} from "antd";

const CompanyDetails = () => {
  return (
    <div className="flex justify-center items-center gap-14 w-[100%] h-[100vh] px-20">
      <div className="w-[40%] h-[96vh] rounded-2xl bg-[#E6F7FF] flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src="OnbordingImg.svg"
          className="w-[90%]  "
        />
      </div>

      <div className="w-[40%] h-[100vh] flex flex-col relative">
        <div className="flex  items-center p-1 gap-1 border border-blue-500 btn btn-primary w-[100px] absolute right-2 top-8 cursor-pointer">
          <Image width={15} height={15} src="Logout.svg" />
          <button className="">Logout</button>
        </div>
        <div className="pt-20 flex flex-col">
          <div className="flex items-center gap-2">
            <IoChevronBackOutline />
            <p>Back</p>
          </div>
          <p className="font-sm">Onboarding</p>
          <Progress percent={40} showInfo={false} />

          <span className="text-[#4F7396] text-sm mb-3">step 1 of 3</span>

          <h2 className="text-xl mb-2 font-bold"> Add company details</h2>

          <p className="text-sm mb-2">
            Please provide your personal details, they will be used to complete
            your profile on Workflow App
          </p>
          <input
            placeholder="Legal Company Name"
            className="p-2 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />
          <input
            placeholder="Company Email Address"
            className="p-2 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />

          <div className="mb-2">
            <Form className="flex border w-[70%]">
              <select className="w-20 h-9 ml-3">
                <option>+91</option>
                <option>+86</option>
              </select>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full h-9 p-2 border-gray-300 outline-blue-500"
              />
            </Form>
          </div>
          <input
            placeholder="Address Line 1"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />
          <input
            placeholder="Address Line 2"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />

          <div>
            <div className="w-full mb-1">
              <select
                placeholder="Country"
                className="w-[33.5%] mr-4 p-1 border border-gray-300 outline-blue-500"
              >
                <option value="India">Indai</option>
                <option value="Austrila">Austrila</option>
                <option value="Usa">Usa</option>
              </select>
              <select
                placeholder="State"
                className="w-[33.5%] p-1 border border-gray-300 outline-blue-500"
              >
                <option value="Telangana">Telangana</option>
                <option value="Kerala">Kerala</option>
                <option value="Goa">Goa</option>
              </select>
            </div>
            <div>
              <select
                placeholder="City"
                className="w-[33.5%] mr-4 p-1 border border-gray-300 outline-blue-500"
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Varangel">Varangel</option>
                <option value="Mahaboob Nager">Mahaboob Nager</option>
              </select>
              <input
                type="number"
                placeholder="Zip Code"
                className="w-[33.5%] p-1 border border-gray-300 outline-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center h-20">
            <div className="">
              <UploadImg />
            </div>
            <div>
              <h2 className="border border-gray-300 p-1 pl-3">
                Upload Profile
              </h2>
              <p className="text-sm font-light">upload your profile picture</p>
            </div>
          </div>

          <button className="w-[70%] h-8 bg-[#1890FF] text-white">Next</button>


        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
