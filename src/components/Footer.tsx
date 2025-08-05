import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import CodingShaalaLogo from "../assets/codingshaala.png"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/courses" },
    { name: "Internship", href: "/internship" },
    { name: "Login", href: "/LoginForm" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Return & Refund", href: "/refund" },
  ];

  

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white px-1 pr-2 rounded-lg flex items-center justify-center">
                <img className="lg:h-[7vh] h-[6vh] object-fit-cover" src={CodingShaalaLogo} alt="" />
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering the next generation of developers with industry-relevant skills and practical experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div className="space-x-2">
                  <a href="tel:9630709988" className="text-sm hover:underline">
                    9630709988
                  </a>
                  <span className="text-sm">|</span>
                  <a href="tel:9630547773" className="text-sm hover:underline">
                    9630547773
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:codingshaala@gmail.com" className="text-sm hover:underline">
                  codingshaala@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          {/* <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2023 CodingShaala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;