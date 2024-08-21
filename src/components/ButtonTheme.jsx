"use client";

import { useState } from "react";

export const ButtonTheme = ({ acti, indx }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={(isActive ? "btn-neutral" : "btn-ghost") + " btn btn-sm"}
      onClick={() => {
        console.log("okkkkk", isActive);
        setIsActive(!isActive);
      }}
    >
      {acti+" "+indx}
    </button>
  );
};
