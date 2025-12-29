import React from "react";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";

function Profile({ profile }) {
  return (
    <div data-aos="fade-up" className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-secondary/20 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-500 rounded-full blur-md opacity-30"></div>
          <img
            src={profile.avatar}
            alt="Avatar"
            className="relative rounded-full mx-auto sm:mx-0 w-40 h-40 object-cover border-4 border-white/5 shadow-lg transform transition duration-500 hover:scale-105 filter grayscale hover:grayscale-0"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            {profile.username}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed font-light max-w-2xl">
            {profile.description}
          </p>

          <div className="mt-6 flex justify-center sm:justify-start gap-4">
           </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
