import Link from "next/link";
import { TractorIcon } from "lucide-react";
import { FlowerIcon } from "lucide-react";
import { CropIcon } from "lucide-react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export function Lawncare() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            icon={<TractorIcon className="h-12 w-12 text-green-500" />}
            title="Lawn Care"
            description="We provide professional lawn care services to keep your yard looking its best."
            link="#"
          />
          <ServiceCard
            icon={<FlowerIcon className="h-10 w-10 text-purple-500" />}
            title="Garden Design"
            description="Our expert designers can create a beautiful and functional garden space tailored to your needs."
            link="#"
          />
          <ServiceCard
            icon={<CropIcon className="h-10 w-10 text-blue-500" />}
            title="Irrigation System Installation"
            description="We install efficient irrigation systems to ensure your plants get the right amount of water."
            link="#"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md p-6 rounded-md">
      <div className="flex items-center mb-4">{icon}</div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <Link href={link} passHref>
          <a className="text-blue-500 hover:underline mt-2 inline-block">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}

// Define TractorIcon, FlowerIcon, and CropIcon components here...
