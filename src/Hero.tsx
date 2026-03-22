import Left from "./Left"
import Right from "./Right"
import { useState } from "react";
const Hero = () => {
  const [option, setOption] = useState("textarea");
  const [textContent, setTextcontent] = useState("");
  const [parsedData, setParsedData] = useState({});
  return (
    <div className="w-full h-[88%] flex gap-3 p-3 bg-[#474646]">
      <Left option={option} setOption={setOption} textContent={textContent} setTextcontent={setTextcontent} setParsedData={setParsedData}/>
      <Right content={parsedData}/>
    </div>
  )
}

export default Hero