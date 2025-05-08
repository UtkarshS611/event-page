import Image from "next/image";

const Features = () => {
  const feature1 = {
      title: "Discover Events",
      description:
        "Explore a wide range of events happening in your college and beyond.",
      image: "feature1.svg",
    },
    feature2 = {
      title: "Manage Events",
      description:
        "Easily create, edit, and manage your events with our intuitive interface.",
      image: "feature2.svg",
    },
    feature3 = {
      title: "Host Events",
      description:
        "Seamlessly host events and engage with participants through our platform.",
      image: "feature3.svg",
    },
    feature4 = {
      title: "Connect with Peers",
      description:
        "Network with like-minded individuals and build connections through events.",
      image: "feature4.svg",
    };
  return (
    <section className="py-32 flex justify-center px-4 md:px-6 lg:px-14 xl:px-16">
      <div className="w-full">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            Blocks built with Shadcn & Tailwind
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            Finely crafted components built with React, Tailwind and Shadcn UI.
            Developers can copy and paste these blocks directly into their
            project.
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature1.title}</h2>
                <p className="text-muted-foreground">{feature1.description}</p>
                <Image
                  width={700}
                  height={700}
                  src={feature1.image}
                  alt={feature1.title}
                  className="mt-8"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{feature2.title}</h2>
                <p className="text-muted-foreground">{feature2.description}</p>
                <Image
                  width={700}
                  height={700}
                  src={feature2.image}
                  alt={feature2.title}
                  className="mt-8"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
                <Image
                  width={700}
                  height={700}
                  src={feature3.image}
                  alt={feature3.title}
                  className="mt-8"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>
                <Image
                  width={700}
                  height={700}
                  src={feature4.image}
                  alt={feature4.title}
                  className="mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
