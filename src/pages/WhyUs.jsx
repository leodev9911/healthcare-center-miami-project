import testimony1 from "../assets/testimony1.png"
import testimony2 from "../assets/testimony2.png"
import testimony3 from "../assets/testimony3.png"
import StarComponent from "../components/WhyUs/StarComponent"

export default function WhyUs() {
  const stars = Array(5).fill("")

  return (
    <>
      <section className="text-center">
        <div>
          <h2 className="font-extrabold text-2xl lg:text-5xl mb-3 text-colors-pageBlue">Por Qué Nosotros</h2>
          <p className="text-colors-pageGray text-sm lg:text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            <br />
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <section className="flex flex-col gap-7 mt-20">
          <h3 className="text-2xl lg:text-5xl font-extrabold text-colors-pageBlue">Testimonios</h3>
          <div className="flex flex-col gap-24">
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between flex-grow gap-8">
              <img className="lg:w-[50%] h-auto" src={testimony1} alt="Services image" />
              <div className="lg:w-[50%] flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl xl:text-4xl font-extrabold mb-4 text-colors-pageGray">Alejandro Cuervo</h2>
                <p className="text-sm xl:text-lg mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
                <div className="flex justify-center gap-2">
                  {stars.map((star, index) => {
                    return (
                      <StarComponent 
                        key={index}
                        color='#F69D40' 
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between flex-grow gap-8">
              <img className="lg:w-[50%] h-auto" src={testimony2} alt="Services image" />
              <div className="lg:w-[50%] flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl xl:text-4xl font-extrabold mb-4 text-colors-pageGray">Alejandro Cuervo</h2>
                <p className="text-sm xl:text-lg mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
                <div className="flex justify-center gap-2">
                  {stars.map((star, index) => {
                    return (
                      <StarComponent 
                        key={index}
                        color='#F69D40' 
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between flex-grow gap-8">
              <img className="lg:w-[50%] h-auto" src={testimony3} alt="Services image" />
              <div className="lg:w-[50%] flex flex-col items-center text-center flex-grow">
                <h2 className="text-2xl xl:text-4xl font-extrabold mb-4 text-colors-pageGray">Alejandro Cuervo</h2>
                <p className="text-sm xl:text-lg mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
                <div className="flex justify-center gap-2">
                  {stars.map((star, index) => {
                    return (
                      <StarComponent 
                        key={index}
                        color='#F69D40' 
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}