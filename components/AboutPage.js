function AboutPage() {
  const { isDarkMode } = useTheme();

  const teamMembers = [
    {
      name: 'ABHIJITH T',
      role: 'Developer & Maintainer',
      description: 'MCA Student passionate about creating educational resources',
      image: 'assets/abhi.jpg',
      social: {
        github: 'https://github.com/zoxilsi',
        linkedin: 'https://linkedin.com/in/zoxilsi',
        twitter: 'https://twitter.com/zoxilsi',
        email: 'mailto:24mp2275@rit.ac.in'
      }
    }
  ];

  const features = [
    {
      icon: 'heart',
      title: 'Made with Love',
      description: 'Built by students who understand the challenges of MCA curriculum'
    },
    {
      icon: 'users',
      title: 'Community Driven',
      description: 'Open source project welcoming contributions from everyone'
    },
    {
      icon: 'shield',
      title: 'Always Free',
      description: 'No ads, no subscriptions, no hidden costs - education should be free'
    },
    {
      icon: 'zap',
      title: 'Modern Tech',
      description: 'Built with React, Tailwind CSS, and modern web technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-8">
            <div className="icon-heart text-white text-3xl"></div>
          </div>
          
          <h1 className="text-5xl font-black text-black dark:text-white mb-6">
            About MCA Notes
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            MCA Notes is a comprehensive, community-driven platform designed to help Master of Computer Applications 
            students excel in their academic journey. We provide free access to study materials, notes, and resources 
            for the KTU 2020 curriculum.
          </p>

          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] font-bold">
            🎓 Empowering MCA Students Since 2024
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To democratize access to quality educational resources and create a supportive 
              community for MCA students worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#f0f0f0] dark:bg-gray-900 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] text-center">
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-4`}>
                  <div className={`icon-${feature.icon} text-white text-2xl`}></div>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate individuals behind MCA Notes
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] max-w-md">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-black text-black dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 hover:bg-gray-700 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-github text-white"></div>
                  </a>
                  
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-linkedin text-white"></div>
                  </a>
                  
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-500 hover:bg-sky-400 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-twitter text-white"></div>
                  </a>
                  
                  <a
                    href={member.social.email}
                    className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-mail text-white"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Platform Statistics
            </h2>
            <p className="text-xl text-blue-100">
              Growing every day with your support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Study Materials', value: '500+', icon: 'book' },
              { label: 'Question Papers', value: '100+', icon: 'file-text' },
              { label: 'Lab Exercises', value: '50+', icon: 'code' },
              { label: 'Happy Students', value: '1000+', icon: 'users' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${stat.icon} text-blue-600 text-2xl`}></div>
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black dark:text-white mb-4">
            Want to Contribute?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Help us make MCA Notes even better by contributing your notes, 
            reporting issues, or spreading the word.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <div className="icon-github text-xl"></div>
              Contribute on GitHub
            </a>
            
            <button
              onClick={() => window.handlePageChange('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-black dark:text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <div className="icon-mail text-xl"></div>
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}