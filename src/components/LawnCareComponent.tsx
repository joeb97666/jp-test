'use client'
import Link from "next/link"

export function Lawncare() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
          <section className="flex flex-col items-center space-y-4 w-full">
            <TractorIcon className="h-12 w-12" />
            <h3 className="text-2xl font-bold">Lawn Care</h3>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              We provide professional lawn care services to keep your yard looking its best.
            </p>
          </section>
          <br></br>
          <div className="flex flex-col items-center space-y-3">
            <Link className="text-center" href="#">
              <FlowerIcon className="h-10 w-10" />
              <h3 className="text-xl font-bold"> Garden Design</h3>
              <p className="text-gray-500 md:text-base dark:text-gray-400">
                Our expert designers can create a beautiful and functional garden space tailored to your needs.
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Link className="text-center" href="#">
              <CropIcon className="h-10 w-10" />
              <h3 className="text-xl font-bold">Irrigation System Installation</h3>
              <p className="text-gray-500 md:text-base dark:text-gray-400">
                We install efficient irrigation systems to ensure your plants get the right amount of water.
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}


function TractorIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4h9l1 7" />
      <path d="M4 11V4" />
      <path d="M8 10V4" />
      <path d="M18 5c-.6 0-1 .4-1 1v5.6" />
      <path d="m10 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <circle cx="7" cy="15" r=".5" />
      <circle cx="7" cy="15" r="5" />
      <path d="M16 18h-5" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}


function FlowerIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7.5a4.5 4.5 0 1 4.5M12 7.5A4.5 7.5 12M12 7.5V9m-4.5 3a4.5 4.5M7.5 12H9m7.5 0a4.5 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5" />
      <path d="M14.5 14.5 16" />
    </svg>
  )
}


function CropIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 2h14" />
      <path d="M18 22V8a2 2 0 0-2-2H2" />
    </svg>
  )
}
