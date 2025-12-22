import React from "react";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";

function Profile({ profile }) {
  return (
    <div data-aos="fade">
      <div className="flex-auto sm:gap-4 sm:flex">
        <img
          src={profile.avatar}
          alt="Avatar"
          className="rounded mx-auto sm:mx-0 mb-4 sm:mb-0 w-52 h-52"
        />

        <span>
          <h1 className="text-4xl font-bold leading-tight text-center sm:text-left">
            {profile.username}
          </h1>

          <p className="opacity-75 mx-auto sm:mx-0 text-center sm:text-left sm:w-3/4 break-all">
            {profile.description}
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <iframe
              src="https://beta.nowplaying.site/FhFOcaXI4MMmkPiM"
              width="300"
              height="120"
              loading="lazy"
              frameBorder="0"
              scrolling="no"
              className="rounded-xl"
            />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Profile;
