import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-amber-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/pro1.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Kran Cho</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-10 text-center ">" Always believe in yourself "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> -
        </p>
        <p>
          <b>Location:</b> Phatthalung
        </p>
      </div>
    </div>
  );
};

export default Profile;
