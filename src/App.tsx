import React from "react";
import {
  Target,
  Zap,
  Box,
  Gauge,
  MessageSquare,
  RotateCcw,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import TestimonialSlider from "./components/TestimonialSlider";
import BlogCard from "./components/BlogCard";


function App() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        style={{
          backgroundImage: "url(/img/hero.png)",
          backgroundSize: "cover", // Ensures the image covers the whole section
          backgroundRepeat: "no-repeat", // Prevents repeating the image
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center p-6 rounded-lg">
          <div className="mt-16 md:mt-0">
            {" "}
            {/* Added margin-top for mobile */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Digital Marketing Solutions for Business Growth
            </h1>
            <p className="text-gray-200 mb-8">
              Transform your online presence with data-driven marketing
              strategies. We help businesses achieve measurable growth through
              innovative digital solutions.
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex flex-wrap gap-8 md:gap-12 mt-12"></div>
          </div>
          <div className="relative">
            <img
              src="./img/avatar.png"
              alt="Digital Marketing Solutions"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business
            needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Target}
            title="SEO Optimization"
            description="Boost your search rankings and drive organic traffic"
          />
          <FeatureCard
            icon={Zap}
            title="Social Media Marketing"
            description="Engage your audience across all platforms"
          />
          <FeatureCard
            icon={Box}
            title="Content Strategy"
            description="Create compelling content that converts"
          />
          <FeatureCard
            icon={Gauge}
            title="Performance Marketing"
            description="Data-driven campaigns for maximum ROI"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Email Marketing"
            description="Nurture leads with targeted campaigns"
          />
          <FeatureCard
            icon={RotateCcw}
            title="Analytics & Reporting"
            description="Track and optimize your marketing efforts"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Know Details About Our Company
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="./img/abo.jpg"
            alt="Marketing Agency Office"
            className="rounded-lg w-full"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leading Digital Marketing Agency
            </h2>
            <p className="text-gray-400 mb-8">
              With over a decade of experience, we've helped hundreds of
              businesses achieve their marketing goals through innovative
              digital strategies and data-driven solutions.
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="meetup" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Taktaka MeetUp
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Know Details About Our Company
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="./img/meetup.jpg"
            alt="Marketing Agency Office"
            className="rounded-lg w-full"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leading Digital Marketing Agency
            </h2>
            <p className="text-gray-400 mb-8">
              With over a decade of experience, we've helped hundreds of
              businesses achieve their marketing goals through innovative
              digital strategies and data-driven solutions.
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Explore Our Latest Case Studies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                key={item}
                className={`rounded-lg overflow-hidden bg-[#151923] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={`https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80`}
                  alt={`Case Study ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {item}
                  </h3>
                  <p className="text-gray-400">
                    Brief description of the project and its impact.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`
    @keyframes fade-up {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-up {
      animation: fade-up 0.6s ease-out forwards;
    }
  `}</style>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Client Success Stories
        </h2>
        <TestimonialSlider />
      </section>
      {/* Partners */}
  

      {/* Blog Posts */}
      <section id="blog" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and strategies in digital
            marketing
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            title="10 SEO Strategies That Actually Work in 2024"
            excerpt="Learn the most effective SEO techniques that are driving results in today's digital landscape."
            date="Mar 15, 2024"
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
            title="The Future of Social Media Marketing"
            excerpt="Discover emerging trends and platforms that will shape the future of social media marketing."
            date="Mar 12, 2024"
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
            title="Mastering Content Marketing"
            excerpt="Expert tips for creating content that engages your audience and drives conversions."
            date="Mar 10, 2024"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Grow Your Business
            </h2>
            <p className="text-gray-400 mb-8">
              Schedule a free consultation to discuss your marketing needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span>contact@solsaa.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span>123 Marketing Ave, NY 10001</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-[#151923] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-[#151923] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-[#151923] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 w-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151923] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="./img/logo.png" alt="Client Satisfaction Icon" />
              </div>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Get marketing tips and trends
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 p-2 rounded-lg bg-[#0B0F19] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                <button className="bg-blue-600 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2024 TakTaka Marketing Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
