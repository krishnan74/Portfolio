import React from "react";

const Avatar = (props) => {
  return (
    <div
      className=" w-[70%] h-[30%] max-w-[400px] border-2 border-[#212121] overflow-hidden "
      style={{ boxShadow: "5px 5px 0px 0px #212121" }}
    >
      <img
        src={props.imageURL}
        alt=""
        className="object-cover w-full h-full object-center"
      />
    </div>
  );
};

export default Avatar;
