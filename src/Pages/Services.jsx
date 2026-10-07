import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    description:
      "We build fast, responsive, and secure custom websites tailored to your brand's goals.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "🎨",
    description:
      "Elegant, modern, user-centric designs that make your product easy and enjoyable to use.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: "📈",
    description:
      "SEO, social media and paid ads to grow your online presence and reach more customers.",
  },
  {
    id: 4,
    title: "Mobile App Creation",
    icon: "📱",
    description:
      "High-performance iOS and Android apps with a smooth, fluid experience.",
  },
  {
    id: 5,
    title: "Brand Identity",
    icon: "✨",
    description:
      "Memorable logos, color guidelines and cohesive visuals that make your brand stand out.",
  },
  {
    id: 6,
    title: "Content Strategy",
    icon: "✍️",
    description:
      "High-converting copy, blog posts and content schedules that keep customers coming back.",
  },
];

const Services = () => {
  return (
    <div>

      <section className="services">
        <div className="services-header">
          <h3>Our Services</h3>
          <p>
            Explore the solutions we offer to help your business grow.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <Link to="/contact" className="service-link">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;