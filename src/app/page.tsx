import React from "react";
import Image from "next/image";
import simo from "../../public/images/simo.jpg";

export default function Home() {
  return (
    <div className="bg-red-200">
      <Image src={simo} alt="suffer" width={1500} height={300}></Image>
    </div>
  );
}
