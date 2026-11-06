import img1 from "@assets-new/OurProducts/our-product-image-1.png";
import img2 from "@assets-new/OurProducts/our-product-image-2.png";
import img3 from "@assets-new/OurProducts/our-product-image-3.png";
import img4 from "@assets-new/OurProducts/our-product-image-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

export default function OurProducts() {
  const products = [
    {
      label: "FREE QUOTATION TOOL",
      title: "Online Quotation Generator",
      description:
        "Create professional business quotations online with our free quotation generator. Add customer details, products, services, quantities, and prices to prepare clear, organized quotations for your clients.",
      image: img1,
      link: "/nexquote",
      buttonText: "Create Quotation →",
    },
    {
      label: "SMART BILLING TOOL",
      title: "Free Online Invoice Generator",
      description:
        "Generate professional invoices online with our easy-to-use invoice maker. Organize customer information, item descriptions, quantities, pricing, and billing details to simplify your invoicing process.",
      image: img2,
      link: "/invoice-generator",
      buttonText: "Create Invoice →",
    },
    {
      label: "GST CALCULATION TOOL",
      title: "Free Online GST Calculator",
      description:
        "Calculate GST quickly with our free online GST calculator. Easily find GST-inclusive and GST-exclusive amounts using applicable tax rates, helping you simplify tax calculations for everyday business transactions.",
      image: img3,
      link: "/gst-calculator",
      buttonText: "Calculate GST →",
    },
    {
      label: "SOCIAL MEDIA SOLUTIONS",
      title: "Social Media Marketing Panel",
      description:
        "Explore our SMM panel for convenient access to available social media marketing services. Discover digital marketing solutions designed to support your online promotional activities and social media management needs.",
      image: img4,
      link: "/smm-panel",
      buttonText: "Explore SMM Panel →",
    },
  ];

  // Repeat products to ensure Swiper has enough slides (12 items) for seamless infinite looping
  // in both left and right directions without stuttering or getting stuck.
  const displayProducts = [...products, ...products, ...products];

  return (
    <section
      id="products"
      className="bg-white pt-6 lg:pt-10 pb-0 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            EXPLORE OUR BUSINESS TOOLS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Free Online Business Tools for Smarter Business Management
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our collection of online business tools designed to simplify quotations, billing, tax calculations, and digital business activities. Whether you are a freelancer, startup owner, or small business professional, TechTime Software offers practical solutions for everyday business needs.
          </p>
        </div>
      </div>

      {/* Blue Background Container for Swiper/Cards and CSS Circles */}
      <div className="relative bg-[#E7F2FD] py-10 lg:py-16">
        {/* Background decorative CSS circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* --- 5 Solid Yellow One-Line Circles --- */}
          <div className="absolute top-[-60px] left-[16%] w-[105px] h-[100px] border-4 border-[#f5c324] rounded-full opacity-85 hidden sm:block" />
          <div className="absolute top-[-30px] right-[32%] w-[80px] h-[85px] border-4 border-[#f5c324] rounded-full opacity-85 hidden md:block" />
          <div className="absolute bottom-8 right-2 w-16 h-16 sm:w-[110px] sm:h-[110px] sm:bottom-[50px] sm:right-[10%] border-4 border-[#f5c324] rounded-full opacity-85" />
          <div className="absolute bottom-[32px] left-[9%] w-[80px] h-[80px] border-4 border-[#f5c324] rounded-full opacity-85 hidden sm:block" />
          <div className="absolute bottom-[-30px] right-[40%] w-[50px] h-[50px] border-4 border-[#f5c324] rounded-full opacity-85 hidden sm:block" />

          {/* --- 4 Two-Line Dotted/Dashed Circles --- */}
          <div className="absolute top-[25%] left-[-45px] w-[90px] h-[90px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70 z-0">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
          <div className="absolute top-[40px] left-[35%] w-[120px] h-[115px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70 hidden md:block">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
          <div className="absolute bottom-[36px] left-[28%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70 hidden md:block">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
          <div className="absolute bottom-[52px] right-[32%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70 hidden md:block">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
          <div className="absolute top-[28px] right-[18%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70 hidden md:block">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Products Swiper Carousel */}
          <div className="w-full max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Mousewheel]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={600}
              loop={true}
              loopPreventsSliding={false}
              spaceBetween={24}
              grabCursor={true}
              mousewheel={{
                forceToAxis: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.15,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2.1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 24,
                },
              }}
              className="w-full py-4 overflow-visible [&_.swiper-wrapper]:items-stretch"
            >
              {displayProducts.map((product, idx) => (
                <SwiperSlide key={`${product.title}-${idx}`} className="!h-auto flex">
                  <div className="group w-full bg-white rounded-[28px] p-6 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full min-h-[480px]">
                    <div className="flex flex-col grow">
                      {/* Mockup image */}
                      <div className="bg-gradient-to-tr from-slate-50 to-blue-50/30 rounded-2xl p-4 flex items-center justify-center h-44 sm:h-48 overflow-hidden border border-slate-100/80 shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="mt-5 flex flex-col grow">
                        <div className="mb-2">
                          <span className="inline-block text-[11px] font-bold tracking-wider text-[#014798] uppercase bg-blue-50 px-2.5 py-1 rounded-full">
                            {product.label}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight min-h-[56px] flex items-center">
                          {product.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 min-h-[85px] flex items-start">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-6 pt-2 shrink-0">
                      <Link
                        to={product.link}
                        className="w-full inline-flex items-center justify-center bg-[#014798] hover:bg-[#003d82] text-white text-xs font-semibold rounded-full px-5 py-3 transition-colors shadow-sm text-center"
                      >
                        {product.buttonText}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
