import React from "react";
import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
  description: "this is profile page",
};

const Profile = () => {
  return (
    <div className="flex items-center justify-center mt-60">
      <div>
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who's watching?
        </h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default Profile;
