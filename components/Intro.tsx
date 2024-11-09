"use client"
export const Intro= ()=>{
    return(
        <div className="flex flex-col items-center justify-center">
        <div className="relative z-0 translate-y-1/2 h-36 w-36">
          <div className="absolute bottom-0 left-0 rounded-full h-32 w-32 border border-lightgrey">
          </div>
          <div className=" absolute top-0 right-0 rounded-full h-20 w-20 border border-lightgrey object-right-top"></div>
        </div>
        <div className="relative z-10 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className=" text-xl sm:text-3xl font-bold text-cyan dark:text-vpblue">
            Simple, traffic-based pricing
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center text-sm sm:text-base text-lightgrey">
            <p>Sign-up for our 30-day trial. </p>
            <p>No credit card reqired.</p>
          </div>
        </div>
      </div>
    )
}