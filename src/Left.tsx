type LeftProps = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  textContent: string;
  setTextcontent: React.Dispatch<React.SetStateAction<string>>;
  setParsedData: React.Dispatch<React.SetStateAction<string>>;
};
const Left = ({option, setOption, textContent, setTextcontent, setParsedData}: LeftProps) => {
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextcontent(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const handleClick = () => {
    if (option == "textarea") {
      const parsedText = JSON.parse(textContent);
      setParsedData(parsedText);
    } else {
      const parsedText = "adf";
    }
  };
  return (
    <div className="h-full w-1/2 flex flex-col gap-3">
      <h2 className="text-[20px]">Choose your mode</h2>
      <div className="flex justify-between w-1/2">
        <select
          name="file"
          className="outline-0 w-[35%] cursor-pointer py-1 px-2"
          value={option}
          onChange={handleChange}
        >
          <option value="textarea">Text</option>
          <option value="file">File</option>
        </select>
      </div>
      {option === "textarea" && (
        <textarea
          className="h-4/5 w-full border outline-0 placeholder-white p-3"
          placeholder="Paste your code here"
          value={textContent}
          onChange={handleTextChange}
        />
      )}
      {option === "file" && (
        <input type="file" className="border p-3 cursor-pointer outline-none" />
      )}
      {option && (
        <button className="border cursor-pointer" onClick={() => {handleClick()}}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Left;
