export default function HeroSectionTitle({ 
  heroTitle,
  location 
}) {
  return (
    <h1
      className={`font-extrabold text-5xl lg:text-[60px] ${location.pathname === '/' && 'lg:max-w-[80%]'} leading-[60px] lg:leading-[100px] pb-4 lg:pb-16 pt-5`}
    >
      {heroTitle}
    </h1>
  )
}