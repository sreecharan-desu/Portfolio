import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/socials';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Memoize the interval callback to prevent re-creation
  const rotateTestimonials = useCallback(() => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials.length]);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(rotateTestimonials, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, rotateTestimonials]);

  return (
    <section id="testimonials" className="mt-16 w-full px-4 md:px-8 lg:px-16 py-12 mb-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span className="text-gray-400 font-medium text-sm uppercase tracking-wider mb-2">
            What People Say
          </span>
          <h2 className="text-4xl first-letter:text-5xl md:text-4xl font-bold text-white mb-4 text-center">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full"></div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name} // Unique key for each testimonial
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl text-gray-300
                         hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20
                         flex flex-col justify-between"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="mb-6">
                <svg className="h-6 w-6 text-gray-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm md:text-base italic text-gray-300 leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-gray-500/30 object-cover"
                    priority={index === 0} // Preload first image
                    unoptimized={false} // Use Next.js image optimization
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-xs text-gray-300">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div
            key={testimonials[activeIndex].name} // Unique key for the active testimonial
            className="relative bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl text-gray-300"
          >
            <div className="mb-6">
              <svg className="h-6 w-6 text-gray-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm italic text-gray-300 leading-relaxed min-h-24">
                &quot;{testimonials[activeIndex].quote}&quot;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-gray-500/30 object-cover"
                  priority={activeIndex === 0} // Preload first image
                  unoptimized={false} // Use Next.js image optimization
                />
              </div>
              <div>
                <a href={testimonials[activeIndex].profile} target="_blank">
                  {' '}
                  <p className="text-white font-medium">{testimonials[activeIndex].name}</p>{' '}
                </a>
                <a href={testimonials[activeIndex].profile} target="_blank">
                  {' '}
                  <p className="text-xs text-gray-300">{testimonials[activeIndex].title}</p>{' '}
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-gray-500 w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call To Action */}
      </div>
    </section>
  );
};

export default Testimonials;
