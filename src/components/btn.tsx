const btn = (props:{text:string;onClick?:()=>void}) => {
  return (
    <div onClick={props.onClick} className=" cursor-pointer flex justify-center items-center h-12 w-20 bg-black bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 ">
        <h1>{props.text}</h1>
    </div>
  )
}

export default btn