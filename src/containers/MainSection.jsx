export default function Main({ children }) {
  return (
    <main className="flex flex-col flex-grow items-center w-full px-5 py-[60px] lg:max-w-[80%] mx-auto my-0">
      {children}
    </main>
  )
}