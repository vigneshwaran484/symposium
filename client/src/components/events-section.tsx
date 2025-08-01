import React from 'react';

type EventItem = {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  alt: string;
  rules: string[];
};

export default function EventsSection() {
  const events: EventItem[] = [
    {
      title: "BRAIN BYTES",
      subtitle: "(MATHS OLYMPIAD)",
      tagline: "Where Genius Meets Numbers!",
      image: "https://jetsigma24mathssymposium.netlify.app/img/olympiad-removebg-preview.jpg",
      alt: "Math Olympiad",
      rules: [
        "Individual Event",
        "Consists of Single round"
      ]
    },
    {
      title: "MATH ENIGMES",
      subtitle: "(MATH PUZZLES)",
      tagline: "Unravel the Mystery of Numbers!",
      image: "https://jetsigma24mathssymposium.netlify.app/img/download.png",
      alt: "Math Puzzles",
      rules: [
        "Two participants per team",
        "Consists of 2 rounds",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round"
      ]
    },
    {
      title: "PIE FIESTA",
      subtitle: "(MATH FUN)",
      tagline: "Discover the Joy in Every Number!",
      image: "https://jetsigma24mathssymposium.netlify.app/img/Pi%20Maths%2C%20Mathematics%20Teacher%2C%20Best%20Student%20Of%20Mathematic%20Lover%2C%20Png%20Printable%2C%20Digital%20File.jpeg",
      alt: "Math Fun",
      rules: [
        "Two participants per team",
        "Consists of 2 rounds",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round"
      ]
    },
    {
      title: "NUMERO NEXUS",
      subtitle: "(MATH QUIZ)",
      tagline: "Prove Your Prowess with Numbers!",
      image: "https://jetsigma24mathssymposium.netlify.app/img/Gemini_Generated_Image_xk08g8xk08g8xk08.jpeg",
      alt: "Math Quiz",
      rules: [
        "Two participants per team",
        "Consists of 2 rounds",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round"
      ]
    },
    {
      title: "GRID MATH",
      subtitle: "(MATH CROSSWORD)",
      tagline: "Crack the Clues, Conquer the Math Grid!",
      image: "npm run",
      alt: "Math Crossword",
      rules: [
        "Two participants per team",
        "Consists of 2 rounds",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round"
      ]
    }
  ];

  const ruleIcons: Record<string, string> = {
    "Individual Event": "fas fa-user",
    "Two participants per team": "fas fa-users",
    "Consists of Single round": "fas fa-clock",
    "Consists of 2 rounds": "fas fa-layers",
    "Prelims will be conducted": "fas fa-filter",
    "Top 5 teams qualify to the final round": "fas fa-medal"
  };

  return (
    <section id="events" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-center text-white mb-16">Competition Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src={event.image} 
                  alt={event.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = "https://via.placeholder.com/400x200?text=Event+Image";
                    target.className = "w-full h-full object-contain bg-gray-800 p-4";
                  }}
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">{event.title}</h3>
              <p className="text-blue-300 font-medium mb-3">{event.subtitle}</p>
              <p className="text-yellow-400 font-semibold text-lg mb-4 italic">"{event.tagline}"</p>
              <ul className="text-gray-300 space-y-2">
                {event.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <i 
                      className={`${ruleIcons[rule] || 'fas fa-check'} text-blue-400 mr-2 mt-1 flex-shrink-0`}
                      aria-hidden="true"
                    ></i>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Registration Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl border border-blue-500 flex flex-col">
            <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Registration" 
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "https://via.placeholder.com/400x200?text=Register+Now";
                  target.className = "w-full h-full object-contain bg-gray-800 p-4";
                }}
              />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Register Now</h3>
            <p className="text-blue-100 mb-6">Secure your spot in these exciting math competitions!</p>
            <a 
              href="https://sympo.stjosephs-engg.cc/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors hover:shadow-lg text-center"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}