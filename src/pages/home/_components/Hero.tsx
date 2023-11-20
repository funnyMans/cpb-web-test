import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-evenly pt-10 gap-y-10">
      <div className="sm:max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Сначала постоянно выкидывало{" "}
        </h1>
        <span className="font-bold text-2xl text-red-300">
          Error 401: UNAUTHORIZED
        </span>

        <h3 className="text-lg font-bold text-blue-300 sm:text-xl">
          И я решил было сдаться еще в субботу
        </h3>
        <h5 className="text-lg font-bold text-cyan-300 sm:text-xl">
          пока в понедельник не увидел это:
        </h5>
        <p className="my-4 text-8xl text-emerald-400 font-extrabold">
          "Ок, ждем"
        </p>

        <Link
          to={"products"}
          className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
        >
          Shop Collection
        </Link>
      </div>
      <div className="pointer-events-none  lg:max-w-7xl hidden md:block">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
