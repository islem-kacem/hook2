import React, { useState } from "react";
import InfoCards from "../component/InfoCards";
import AddInfo from "../component/AddInfo";
import { info } from "../Data/InfoData";

export default function () {
  const [data, setData] = useState(info);
  const add = (newInfo) => {
    setData([...data, newInfo]);
  };

  return (
    <>
      <InfoCards data={data} setData={setData} />
      <AddInfo add={add} />
    </>
  );
}
