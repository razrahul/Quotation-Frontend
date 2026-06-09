import img1 from "@assets-new/OurProducts/our-product-image-1.png";
import img2 from "@assets-new/OurProducts/our-product-image-2.png";
import img3 from "@assets-new/OurProducts/our-product-image-3.png";
import img4 from "@assets-new/OurProducts/our-product-image-4.png";

// Ellipse backgrounds for section
import elipse3by4 from "@assets-new/OurProducts/our-product-3by4-elipse.png";
import elipseFull from "@assets-new/OurProducts/our-product-full-elipse.png";
import elipseSidow from "@assets-new/OurProducts/our-product-full-sidow-elipse.png";
import elipseHalf from "@assets-new/OurProducts/our-product-half-elipse.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurProducts() {
  const products = [
    {
      title: "Quotation Generator",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img1,
      link: "/quotation",
    },
    {
      title: "Invoice Generator",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img2,
      link: "#",
    },
    {
      title: "GST Calculator",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img3,
      link: "#",
    },
    {
      title: "SMM Panel",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img4,
      link: "#",
    },
  ];

  return (
    <section id="products" className="relative py-20 bg-[#e9f2ff] overflow-hidden">
      {/* Background decorative ellipses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <img
          src={elipse3by4}
          alt=""
          className="absolute top-[-40px] left-[-40px] w-64 h-64 object-contain opacity-50"
        />
        <img
          src={elipseFull}
          alt=""
          className="absolute top-[10%] left-[45%] w-48 h-48 object-contain opacity-50"
        />
        <img
          src={elipseHalf}
          alt=""
          className="absolute top-[20%] right-[-50px] w-56 h-56 object-contain opacity-50"
        />
        <img
          src={elipseSidow}
          alt=""
          className="absolute bottom-[-60px] left-[15%] w-72 h-72 object-contain opacity-50"
        />
        <img
          src={elipseFull}
          alt=""
          className="absolute bottom-[-100px] right-[-20px] w-80 h-80 object-contain opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Products
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the right tool to speed up your administrative processes and business efficiency.
          </p>
        </div>

        {/* Products Swiper Carousel */}
        <div className="w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.7,
                spaceBetween: 28,
              },
            }}
            className="w-full py-4 overflow-visible"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto flex">
                <div className="w-full bg-white rounded-[32px] p-6 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Mockup image inside card */}
                    <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center aspect-[1.3] overflow-hidden border border-slate-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="mt-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <a
                      href={product.link}
                      className="inline-flex items-center justify-center bg-[#014798] hover:bg-[#003d82] text-white text-xs font-semibold rounded-full px-5 py-3 transition-colors shadow-sm"
                    >
                      View Product Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
