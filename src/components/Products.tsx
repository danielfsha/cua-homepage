import { Button } from "./ui/button";

// Product type definition
type ProductProps = {
  title: string;
  description: string;
  features: string[];
  // imageUrl: string;
  reversed?: boolean;
  isEarlyPreview?: boolean;
  link: string;
};

const ProductCard = ({
  title,
  description,
  features,
  // imageUrl,
  reversed,
  isEarlyPreview,
  link,
}: ProductProps) => {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center mb-32 last:mb-0`} // Reduced mb-24 to mb-12
    >
      {/* Content Column */}
      <div className="flex-1">
        <div className="flex items-center justify-between py-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-geist-medium">
            {title}
          </h3>

          {isEarlyPreview && (
            <button className="text-[16px] tracking-wide px-3 py-2 space-x-2 flex items-center justify-center rounded-full text-blue-900 border-blue-900 border-1 pr-4 bg-blue-700/20">
              <span>Early preview</span>
              <img src="./images/stars.svg" width={20} />
            </button>
          )}
        </div>
        <p className="mb-6 text-[17px] tracking-normal text-gray-500">
          {description}
        </p>

        <ul className="flex text-[17px] flex-col items-start justify-start space-y-3 py-4 pb-12">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <Button variant="default" size="icon" className="size-7 p-0">
                  <img src="./images/check-mark.svg" width={22} />
                </Button>

                <span>{feature}</span>
              </div>
            );
          })}
        </ul>

        <a href={link}>
          <Button variant="default" size="lg" className="space-x-3 pr-4">
            <span>Try {title} now</span>

            <img src="./images/arrow-right.svg" width={32} />
          </Button>
        </a>
      </div>
      {/* Image Column */}
      <div className="flex-1">
        {/* <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" /> */}
      </div>
    </div>
  );
};

// Products Section Component
const Products = () => {
  // Sample product data
  const products = [
    {
      title: "Agent",
      description:
        "Computer-Use AI Agent (CUA) framework for running agentic RPA workflows  on macOS/Linux, supporting any Vision Language Models (cloud or local).",
      features: [
        "AI-powered task automation",
        "Support for multiple VLMs",
        "macOS and Linux compatibility",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      isEarlyPreview: false,
      link: "https://www.trycua.com/",
    },
    {
      title: "Computer",
      description:
        "Computer Use Interface (CUI) for automated interaction with c/ua Containers, PyAutoGUI-compatible",
      features: [
        "PyAutoGUI compatibility",
        "Seamless container integration",
        "Intuitive automation interface",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
      reversed: true,
      isEarlyPreview: false,
      link: "https://www.trycua.com/",
    },
    {
      title: "Lume",
      description:
        "Virtualization layer to run macOS & Linux VMs on Containers with near-native performance on Apple Silicon, powered by Apple's Virtualization.Framework",
      features: [
        "Near-native performance",
        "Apple Silicon optimization",
        "Container-based virtualization",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500",
      isEarlyPreview: false,
      link: "https://www.trycua.com/",
    },
    {
      title: "MCP",
      description:
        "MCP Server for running Agent from Cursor, Claude Desktop, and other MCP clients",
      features: [
        "Multi-client support",
        "Seamless integration with Cursor",
        "Claude Desktop compatibility",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500",
      isEarlyPreview: true,
      reversed: true,
      link: "https://www.trycua.com/",
    },
  ];

  return (
    <section id="products" className="py-24 pb-48">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-7xl text-[#161619] md:text-6xl mb-6 font-geist-medium tracking-tight">
            Products
          </h1>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              // imageUrl={product.imageUrl}
              reversed={product.reversed}
              isEarlyPreview={product.isEarlyPreview}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
