export default function Main({ children }) {
  return (
    <main className="flex flex-col flex-grow items-center w-full px-5 pt-[60px] pb-[200px] lg:max-w-[80%] mx-auto my-0">
      {children}
    </main>
  )
}