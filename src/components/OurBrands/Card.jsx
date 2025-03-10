import { motion } from "framer-motion";

const Card = ({ titleImg, coverImg, characterImg, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative w-[200px] h-[300px] flex justify-center items-end  perspective-1000  group"
        whileHover={{
          rotateX: 25,
          translateY: -10,
          boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
        }}
      >
        

        
        <img
          src={coverImg}
          alt="Title"
          className="w-full  transition-transform duration-500"

        />

        {/* Character */}
        <motion.img
          src={characterImg}
          alt="Character"
          className="absolute w-full opacity-0 transition-all duration-500 z-[-1] group-hover:opacity-100 group-hover:translate-y-[-30%] group-hover:z-10"
        />
      </motion.div>
    </a>
  );
};

export default Card;
import React from 'react';
import { Users, Palette, Code, LineChart } from 'lucide-react';

const teamMembers = [
  {
    name: "Jane Doe",
    role: "UI & UX Designer",
    icon: <Palette className="w-8 h-8 mb-4 opacity-80" />,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Crafting beautiful and intuitive user experiences"
  },
  {
    name: "Alex Smith",
    role: "CEO Expert",
    icon: <Users className="w-8 h-8 mb-4 opacity-80" />,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Leading with vision and strategic innovation"
  },
  {
    name: "Emily New",
    role: "Web Developer",
    icon: <Code className="w-8 h-8 mb-4 opacity-80" />,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    bio: "Building robust and scalable web solutions"
  },
  {
    name: "Lisa Boley",
    role: "Marketing Lead",
    icon: <LineChart className="w-8 h-8 mb-4 opacity-80" />,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Driving growth through strategic marketing"
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#100721] to-[#2d1457] py-20 px-4 font-mono">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Meet Our <span className="text-purple-400">Team</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 justify-center h-[500px] w-full max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex-1 min-w-[200px] bg-[#1e0e3e] backdrop-blur-lg rounded-2xl p-6 
                         transition-all duration-500 ease-in-out cursor-pointer 
                         hover:flex-[2] hover:bg-[#2d1457]"
            >
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-500/30
                            transition-all duration-500 group-hover:w-24 group-hover:h-24">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="text-center">
                {member.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-300 text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-purple-200/80 text-sm opacity-0 max-h-0 transition-all duration-500
                            group-hover:opacity-100 group-hover:max-h-20">
                  {member.bio}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl 
                            transition-all duration-500 group-hover:border-purple-500/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;