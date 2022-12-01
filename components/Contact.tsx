import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};
export default function Contact({}: Props) {
  const [value, setValue] = useState<Input>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submitdata = async(e:any) => {
    e.preventDefault();
    const res = await fetch('https://sanjay-s-website-default-rtdb.firebaseio.com/contact.json',{
      method:'POST',
      body:JSON.stringify(value), 
      headers:{
        'Content-Type':'application/json'
      }  
        })
    const data = await res.json();
    if(value.subject&&value.message&&value.email&&value.name){
      alert('Message sent successfully')
      setValue(
        {
          name: "",
          email: "",
          subject: "",
          message: "",
        }
      )
  
    }
    else{
      alert('Please fill all the fields')
    }

    
  };

  return (
    <div
      className=" flex relative flex-col pb-[8rem] text-center md:text-left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex  flex-col items-center space-y-10 mt-[15rem]">
        <h4 className="text-2xl font-semibold text-center ">
          Looking for something?
          <div className="decoration-[#F7AB0A]/50 underline  text-center pt-4">
            Let&apos;s Talk
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
          <MapPinIcon className="text-[#F7A80A] gap-2 h-7 w-7 animate-pulse" />
          <p className="text-md">Talchikhel,Lalitpur</p>
        </div>
        <form
          method="POST"
          className="flex flex-col  gap-2 w-fit 
                "
          onSubmit={submitdata}
        >
          <div className="flex flex-col  gap-2 md:flex-row md:gap-2">
            <input
              className="input"
              placeholder="Name"
              autoComplete="off"
              type="text"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              required
            />
            <input
              className="input "
              placeholder="Email"
              autoComplete="off"
              type="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              required
            />
          </div>
          <input
            className="input"
            placeholder="Subject"
            value={value.subject}
            autoComplete="off"
            type="text"
            onChange={(e) => setValue({ ...value, subject: e.target.value })}
          />
          <textarea
            className="input"
            placeholder="Message"
            value={value.message}
            autoComplete="off"
            onChange={(e) => setValue({ ...value, message: e.target.value })}
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
