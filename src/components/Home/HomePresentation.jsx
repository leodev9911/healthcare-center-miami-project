export default function HomePresentation({ children }) {
  return (
    <section className="relative z-10 lg:max-w-[80%] flex items-center flex-col text-center text-colors-pageWhite gap-8 px-2">
      {children}
    </section>
  )
}