
const Blog = () => {
  const blogPosts = [
    {
      title: 'The Science Behind Pre-Workout Hydration',
      excerpt: 'Discover how proper hydration before exercise can boost your performance by up to 25% and prevent early fatigue.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      date: 'December 10, 2024',
      category: 'Science',
      readTime: '5 min read'
    },
    {
      title: 'Electrolyte Balance: Why It Matters More Than You Think',
      excerpt: 'Learn about the critical role of electrolytes in muscle function and how to maintain optimal levels during intense workouts.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      date: 'December 8, 2024',
      category: 'Nutrition',
      readTime: '7 min read'
    },
    {
      title: 'Post-Workout Recovery: The Golden Hour',
      excerpt: 'Maximize your gains with the right nutrition and hydration strategy within the first hour after your workout.',
      image: 'https://images.unsplash.com/photo-1506629905607-53d5c1d4b1ae?w=800&h=600&fit=crop',
      date: 'December 5, 2024',
      category: 'Recovery',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Science', 'Nutrition', 'Recovery', 'Training'];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zenith <span className="text-orange-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights on performance, nutrition, and hydration to help you reach your peak potential.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                category === 'All'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Latest Posts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Latest <span className="text-orange-600">Posts</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="text-orange-600 hover:text-orange-500 font-semibold transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Performance Tips
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on sports nutrition, hydration science, and performance optimization delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
