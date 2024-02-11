import Link from "next/link";

export function AboutUs() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
          <section className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full">
            <div>
           

              <ServiceCard
                title="Our Company"
                description="Welcome to your destination for professional lawn care and landscape design services. As a newly established business, we are dedicated to providing top-quality solutions to meet our clients' outdoor maintenance and design needs."
              />
              <h2 className="text-gray-500 justify-text-left md:text-base dark:text-gray-400">
                <br></br><br></br><b className="text-gray-300"> We specialize in two core areas:</b><br /><br />
              </h2>
              <ServiceCard
                title="Lawn Care"
                description="Our team is passionate about transforming ordinary lawns into verdant, healthy landscapes that enhance the beauty and value of your property. From regular mowing and edging to fertilization and weed control, we offer comprehensive lawn care services to keep your lawn looking its best year-round."
              />
              <ServiceCard
                title="Budget-Friendly Landscape Design"
                description="We believe that every outdoor space has the potential to be beautiful, regardless of budget constraints. Our small-budget landscape design services are tailored to meet your aesthetic preferences and financial considerations, providing creative solutions to maximize the visual appeal and functionality of your outdoor environment."
              />
            </div>
          </section>
          <div className="flex justify-center mt-12">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="./Contact"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
