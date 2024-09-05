"use client";

import Link from "next/link";

export const ButtonTheme = ({ acti,initActiv,indx }) => {

  return (
    <Link
      className={(initActiv? "btn-neutral" : "btn-ghost") + " btn btn-sm"}
href={`/activities/${(String(indx)=="100"?"all":indx)}`}
    >
      {acti}
    </Link>
  );
};
