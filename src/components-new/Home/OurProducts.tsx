import img1 from "@assets-new/OurProducts/our-product-image-1.png";
import img2 from "@assets-new/OurProducts/our-product-image-2.png";
import img3 from "@assets-new/OurProducts/our-product-image-3.png";
import img4 from "@assets-new/OurProducts/our-product-image-4.png";

// Decorative elements built with CSS

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
      link: "/invoice-generator",
    },
    {
      title: "GST Calculator",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img3,
      link: "/gst-calculator",
    },
    {
      title: "SMM Panel",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
      image: img4,
      link: "/smm-panel",
    },
  ];

  return (
    <section id="products" className="bg-white pt-20 pb-0 overflow-hidden">
      {/* Section Header - Outside the blue background container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Products
          </h2>
        </div>
      </div>

      {/* Blue Background Container for Swiper/Cards and CSS Circles */}
      <div className="relative bg-[#E7F2FD] py-20">
        {/* Background decorative CSS circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* --- 5 Solid Yellow One-Line Circles --- */}
          {/* 1. Top Left Corner (cut off) */}
          <div className="absolute top-[-60px] left-[16%] w-[105px] h-[100px] border-4 border-[#f5c324] rounded-full opacity-85" />
          
          {/* 2. Top Middle (above Card 3) */}
          <div className="absolute top-[-30px] right-[32%] w-[80px] h-[85px] border-4 border-[#f5c324] rounded-full opacity-85" />
          
          {/* 3. Top Right Corner (cut off) */}
          <div className="absolute bottom-[50px] right-[10%] w-[110px] h-[110px] border-4 border-[#f5c324] rounded-full opacity-85" />
          
          {/* 4. Bottom Left (below Card 1) */}
          <div className="absolute bottom-[32px] left-[9%] w-[80px] h-[80px] border-4 border-[#f5c324] rounded-full opacity-85" />
          
          {/* 5. Bottom Right (below Card 4, cut off) */}
          <div className="absolute bottom-[-30px] right-[40%] w-[50px] h-[50px] border-4 border-[#f5c324] rounded-full opacity-85" />

          {/* --- 4 Two-Line Dotted/Dashed Circles --- */}
          {/* 1. Left Edge Dotted Circle (cut off, half) */}
          <div className="absolute top-[25%] left-[-45px] w-[90px] h-[90px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>

          {/* 2. Top Center Dotted Circle (above Card 2, full/3-half) */}
          <div className="absolute top-[40px] left-[35%] w-[120px] h-[115px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>

          {/* 3. Bottom Left-Center Dotted Circle (below Card 2) */}
          <div className="absolute bottom-[36px] left-[28%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>

          {/* 4. Bottom Right-Center Dotted Circle (below Card 3-4) */}
          <div className="absolute bottom-[52px] right-[32%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>

          {/* 5. top Right-Center Dotted Circle (below Card 3-4) */}
          <div className="absolute top-[28px] right-[18%] w-[70px] h-[70px] border-2 border-dotted border-[#f5c324] rounded-full opacity-70">
            <div className="absolute inset-[4px] border-2 border-dotted border-[#f5c324] rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
      </div>
    </section>
  );
}
