
const TeamSection = () => {
  const team = [
    {
      name: 'Sarah Chen',
      position: 'Founder & CEO',
      bio: 'Former Olympic trainer with 15+ years in sports nutrition',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e0c4?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Head of R&D',
      bio: 'PhD in Sports Science, leading our formula innovation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Thompson',
      position: 'Athletic Director',
      bio: 'Professional marathon runner and performance coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      position: 'Nutrition Specialist',
      bio: 'Certified sports nutritionist working with elite athletes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The experts behind your performance enhancement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-orange-600">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-orange-600 font-semibold mb-3">{member.position}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
