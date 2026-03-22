const Rgiht = ({content}: {content: object}) => {
  return (
    <div className="h-full w-1/2 bg-[#2a2a2a] border p-2">
      <h2>Parsed JSON structure will appear below.</h2>
      {content && (<pre>{JSON.stringify(content, null, 2)}</pre>)}
    </div>
  )
}

export default Rgiht