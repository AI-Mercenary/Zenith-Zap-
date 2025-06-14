
import { MessageCircle } from 'lucide-react';

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Placeholder WhatsApp link - replace with actual number
    const phoneNumber = "+1234567890";
    const message = "Hi! I'm interested in learning more about Zenith Zap products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <MessageCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-orange-600">Community</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Connect with fellow athletes, get personalized hydration advice, and stay updated with the latest 
            performance tips from our expert team. Join thousands of athletes who trust Zenith Zap for their 
            peak performance journey.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">What you'll get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold">Expert Advice</h3>
                  <p className="text-gray-300 text-sm">Personalized hydration and nutrition tips</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold">Exclusive Offers</h3>
                  <p className="text-gray-300 text-sm">First access to new products and discounts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold">Community Support</h3>
                  <p className="text-gray-300 text-sm">Connect with like-minded athletes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold">Latest Updates</h3>
                  <p className="text-gray-300 text-sm">Stay informed about new research and products</p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center mx-auto group"
          >
            <MessageCircle className="mr-3 group-hover:animate-pulse" size={28} />
            Join Our Community
          </button>
          
          <p className="text-gray-400 mt-6 text-sm">
            Click the button above to start chatting with our team on WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
