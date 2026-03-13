const Rgiht = ({content}: {content: string}) => {
  return (
    <div className="h-full w-1/2 bg-[#2a2a2a] border p-2">
      <h2>Parsed JSON structure will appear below.</h2>
      {content && (<p>{content}</p>)}
    </div>
  )
}

export default Rgiht