export default function LinkButton({ text }) {
  return (
    <a 
      href=""
      className="text-white w-80 py-2 lg:py-4 flex items-center justify-center bg-[#158EE2] rounded-[50px] lg:w-60 text-[18px]"
    >
      {text}
    </a>
  )
}