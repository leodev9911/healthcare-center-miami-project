export default function HomeHeaderSlider() {
  return (
    <section className="relative z-10 max-w-5xl flex items-center gap-[4px] px-2 pb-24 lg:pb-96">
      <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full mx-1 cursor-pointer bg-colors-pageBlue"></div>
      <div className="w-2 lg:w-3 h-2 lg:h-3 bg-colors-pageGray rounded-full mx-1 cursor-pointer"></div>
      <div className="w-2 lg:w-3 h-2 lg:h-3 bg-colors-pageGray rounded-full mx-1 cursor-pointer"></div>
    </section>
  )
}