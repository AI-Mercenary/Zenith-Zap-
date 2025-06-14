
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'PRE-BOOST',
      stage: 'Pre-Workout',
      description: 'Ignite your energy with our caffeine-enhanced hydration formula.',
      benefits: ['Increased Energy', 'Enhanced Focus', 'Optimal Hydration'],
      color: 'from-orange-600 to-orange-800',
      textColor: 'text-white'
    },
    {
      id: 2,
      name: 'MID-FLOW',
      stage: 'Mid-Workout',
      description: 'Sustain peak performance with electrolyte-rich endurance fuel.',
      benefits: ['Sustained Energy', 'Electrolyte Balance', 'Endurance Support'],
      color: 'from-sky-400 to-sky-600',
      textColor: 'text-white'
    },
    {
      id: 3,
      name: 'POST-RECOVER',
      stage: 'Post-Workout',
      description: 'Accelerate recovery with protein-enhanced restoration blend.',
      benefits: ['Muscle Recovery', 'Protein Synthesis', 'Rapid Rehydration'],
      color: 'from-gray-100 to-gray-200',
      textColor: 'text-gray-900'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-600">Performance</span> Line
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three specialized formulas designed for every phase of your workout journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={`w-full flex-shrink-0 bg-gradient-to-br ${product.color} p-12 min-h-[500px] flex flex-col justify-center`}
                >
                  <div className="text-center">
                    <h3 className={`text-3xl md:text-4xl font-bold ${product.textColor} mb-2`}>
                      {product.name}
                    </h3>
                    <p className={`text-lg ${product.textColor} opacity-80 mb-6`}>
                      {product.stage}
                    </p>
                    <p className={`text-xl ${product.textColor} mb-8 max-w-2xl mx-auto`}>
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className={`${product.textColor} opacity-90`}>
                          <div className="font-semibold">{benefit}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-orange-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
