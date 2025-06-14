
const Products = () => {
  const products = [
    {
      name: 'PRE-BOOST',
      stage: 'Pre-Workout',
      description: 'Ignite your energy with our caffeine-enhanced hydration formula designed to prepare your body for peak performance.',
      benefits: [
        'Natural caffeine boost for enhanced energy',
        'B-vitamins for mental focus and clarity',
        'Electrolytes for optimal hydration',
        'Zero sugar crash formula'
      ],
      bgColor: 'bg-gradient-to-br from-orange-600 to-orange-800',
      textColor: 'text-white',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-gray-900'
    },
    {
      name: 'MID-FLOW',
      stage: 'Mid-Workout',
      description: 'Sustain peak performance with our electrolyte-rich endurance fuel that keeps you going when it matters most.',
      benefits: [
        'Rapid electrolyte replenishment',
        'Sustained energy release',
        'Prevents muscle cramps',
        'Light, refreshing taste'
      ],
      bgColor: 'bg-gradient-to-br from-sky-400 to-sky-600',
      textColor: 'text-white',
      buttonColor: 'bg-white hover:bg-gray-100 text-sky-600'
    },
    {
      name: 'POST-RECOVER',
      stage: 'Post-Workout',
      description: 'Accelerate recovery with our protein-enhanced restoration blend that helps your body rebuild and recover faster.',
      benefits: [
        '20g high-quality whey protein',
        'Anti-inflammatory compounds',
        'Muscle recovery acceleration',
        'Glycogen replenishment'
      ],
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
      textColor: 'text-gray-900',
      buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-600">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three scientifically formulated hydration solutions designed for every phase of your workout journey.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${product.textColor} mb-2`}>
                    {product.name}
                  </h2>
                  <p className={`text-lg ${product.textColor} opacity-80 mb-6`}>
                    {product.stage}
                  </p>
                  <p className={`text-xl ${product.textColor} mb-8 leading-relaxed`}>
                    {product.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className={`${product.buttonColor} px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105`}>
                      Buy Now
                    </button>
                    <button className={`border-2 ${product.textColor === 'text-white' ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} px-8 py-3 rounded-lg font-bold transition-all duration-300`}>
                      Know More
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold ${product.textColor} mb-6`}>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={`${product.textColor} flex items-center`}>
                        <div className={`w-2 h-2 rounded-full ${product.textColor === 'text-white' ? 'bg-white' : 'bg-orange-600'} mr-3`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
