// import OnboardingDetails from "@/components/onboarding/onboardingDetails";

import Image from "next/image";
import UploadImg from "./UploadImg"
// import { Progress, Flex, Segmented,Form , Select, Option, Input,InputNumber} from "antd";
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

import { UserOutlined } from "@ant-design/icons";

const Onboarding = () => {
  const { Option } = Select;
 

  return (
    <div className="flex justify-center items-center gap-14 w-[100%] h-[100vh] px-20 ">
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
          <p>Onboarding</p>
          <Progress percent={20} showInfo={false} />

          <span className="text-[#4F7396] text-sm mb-6">step 1 of 3</span>

          <h2 className="text-2xl mb-4 font-bold"> Personal Details</h2>

          <p className="text-md mb-4">
            Please provide your personal details, they will be used to complete
            your profile on Workflow App
          </p>

          <input
            placeholder="First name"
            className="p-1 mb-3 border border-gray-300 outline-blue-500 w-[70%] "
          />
          <input
            placeholder="Last name"
            className="p-1 mb-3 border border-gray-300 outline-blue-500 w-[70%]"
          />

          <div className="mb-3">
            <Flex gap="small" align="flex-start" vertical>
              <Segmented
                options={[
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                          // color:"blue"
                        }}
                      >
                        <div>Mate</div>
                      </div>
                    ),
                    value: "Male",
                  },
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                        }}
                      >
                        <div>Female</div>
                      </div>
                    ),
                    value: "Female",
                  },
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                        }}
                      >
                        <div>Other</div>
                      </div>
                    ),
                    value: "Other",
                  },
                ]}
              />
            </Flex>
          </div>

          <input
            type="date"
            placeholder="Date of birth"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%]"
          />

        <div>
          <Form className="flex border w-[70%]">
            <select className="w-20 h-9 ml-3">
              <option >+91</option>
              <option>+86</option>
            </select>
            <input type="number" className="w-full h-9 p-2 border-gray-300 outline-blue-500"/>
          </Form> 
        </div>


        {/* this is from the uploadin the image  */}
        <div className="flex items-center gap-5 h-20 mt-4">
          
          <div className="">
            <UploadImg />
          </div>
          <div>
            <h2 className="border border-gray-300 p-1 pl-3">Upload Profile</h2>
            <p className="font-sm font-light">upload your profile picture</p>
          </div>
        </div>
          
        <button className="w-[70%] lg:mt-6 h-8 bg-[#1890FF] text-white items-end">Next</button>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;
