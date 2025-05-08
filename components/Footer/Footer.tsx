import React from "react";
  const Footer: React.FC = () => {

    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    const copyright = `© ${getYear()} CampusConnect. All rights reserved.`;
    const bottomLinks = [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Contact Us", url: "/contact" },
    ];

    return (
      <section className="flex justify-center px-4 md:px-6 lg:px-14 xl:px-16">
        <div className="w-full">
          <footer>
            <div className="flex flex-col justify-between gap-4 border-t p-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export default Footer;
  