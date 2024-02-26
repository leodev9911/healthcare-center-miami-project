export default function LinkButton({ text }) {
  return (
    <a 
      href=""
      className="text-colors-pageWhite w-80 py-2 lg:py-4 flex items-center justify-center bg-colors-pageBlue rounded-[50px] lg:w-60 text-xl"
    >
      {text}
    </a>
  )
}