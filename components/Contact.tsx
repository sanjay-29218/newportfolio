import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { type } from "os";

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};
export default function Contact({}: Props) {
  const { register, handleSubmit ,reset } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> =  async(data) => {
    const response =  await fetch('https://sanjay-s-website-default-rtdb.firebaseio.com/contact.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
        }
        })

    // window.location.href="mailto:sanjay29218@gmail.com?subject={data.subject}&body={data.message}";
    console.log(data);
  };
  
  return (
    <div
      className=" flex relative flex-col pb-[5rem] text-center md:text-left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex  flex-col items-center space-y-10 mt-[15rem]">
        <h4 className="text-2xl font-semibold text-center ">
          Looking for something?
          <div className="decoration-[#F7AB0A]/50 underline  text-center pt-4">
            Let's Talk
          </div>
        </h4>
        <div className="flex items-center">
          <PhoneIcon className="text-[#F7A80A] gap-2 h-7 w-7 animate-pulse" />
          <p className="text-md">+9779861345770</p>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="text-[#F7A80A] h-7 w-7 animate-pulse" />
          <p className="text-md">sanjay29218@gmail.com</p>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="text-[#F7A80A] gap-2 h-7 w-7" />
          <p className="text-md">Talchikhel,Lalitpur</p>
        </div>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  gap-2 w-fit 
                "
        >
          <div className="flex flex-col  gap-2 md:flex-row md:gap-2">
            <input
              className="input"
              {...register("name")}
              placeholder="Name"
              type="text"
              required
            />
            <input
              className="input "
              {...register("email")}
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <input
            className="input"
            {...register("subject")}
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="input"
            {...register("message")}
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10  rounded-md 
                    text-black font-bold "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
