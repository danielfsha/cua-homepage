const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/trycua",
      icon: <></>,
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/trycua",
      icon: <></>,
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/mVnXXpdE85",
      icon: <></>,
    },
    {
      name: "Privacy",
      href: "#privacy",
      icon: <></>,
    },
    {
      name: "Cookies",
      href: "#cookies",
      icon: <></>,
    },
  ];

  return (
    <footer className="h-[64px] border-t border-[#c2c2c2] shadow-md bg-white fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center justify-center space-x-2">
          <img width={43} height={43} src="./images/cua-logo.svg" />
          <span className="pb-2">trycua</span>
        </div>
        {/* Social links on the right */}
        <div className="flex space-x-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-thin text-[16px] tracking-normal"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
