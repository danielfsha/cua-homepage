import { motion } from "framer-motion";

// Product type definition
type ProductProps = {
  title: string;
  description: string;
  imageUrl: string;
  reversed?: boolean;
  index: number;
};

const ProductCard = ({
  title,
  description,
  imageUrl,
  reversed,
  index,
}: ProductProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.4, margin: "-100px" }}
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center mb-12 last:mb-0`} // Reduced mb-24 to mb-12
    >
      {/* Content Column */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {/* Image Column */}
      <div className="flex-1">
        <div className="bg-gradient-to-tr from-purple-100 to-indigo-50 p-6 rounded-2xl shadow-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Products Section Component
const Products = () => {
  // Sample product data
  const products = [
    {
      title: "Intuitive Development Environment",
      description:
        "Our cutting-edge IDE provides smart autocompletion, integrated debugging tools, and real-time collaboration features that boost developer productivity and streamline the coding process.",
      imageUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Advanced Deployment Pipeline",
      description:
        "Deploy with confidence using our automated CI/CD pipeline that ensures thorough testing, seamless integration, and zero-downtime deployments for maximum reliability and performance.",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
      reversed: true,
    },
    {
      title: "Powerful Analytics Dashboard",
      description:
        "Gain valuable insights into your application's performance with our comprehensive analytics platform, featuring customizable dashboards, real-time monitoring, and actionable intelligence.",
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our suite of innovative tools and platforms designed to
            elevate your development workflow.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              reversed={product.reversed}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
