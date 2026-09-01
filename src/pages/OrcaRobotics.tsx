import { motion } from 'motion/react';
import { Bot, Wrench, Users, Trophy, ExternalLink } from 'lucide-react';

import orca1 from '../assets/images/Orca1.jpg';
import orca2 from '../assets/images/Orca2.jpg';
import orca3 from '../assets/images/Orca3.jpg';
import orca4 from '../assets/images/Orca4.png';
import christopherPhoto from '../assets/images/christopher.jpg';
import sophiaPhoto from '../assets/images/Sophia.jpg';

export default function OrcaRobotics() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${orca1})` }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700/50 text-slate-300 font-medium text-sm border border-slate-600/50 backdrop-blur-sm"
          >
            <Bot size={16} />
            <span>FTC Team #21587</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Orca Robotics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A student-led FIRST Tech Challenge robotics program operated by NEXT
            EDUCATION, focused on engineering, teamwork, and community STEM
            outreach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://orcarobotics.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              Visit Orca Robotics Website
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                More Than Just Robots
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2022, the team brings together students who are
                passionate about engineering, programming, CAD, robotics,
                problem solving, teamwork, and community service.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                The goal is not simply to build competitive robots. Students
                learn how to collaborate, solve difficult engineering problems,
                lead teams, and use what they have learned to inspire others.
              </p>
            </div>

            {/* Real Orca Robotics Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={orca1}
                    alt="Orca Robotics team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={orca2}
                    alt="Orca Robotics competition"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={orca3}
                    alt="Orca Robotics team members"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={orca4}
                    alt="Orca Robotics STEM outreach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-700 mb-6">
                <Trophy size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Competition
              </h3>

              <p className="text-slate-600">
                Orca Robotics has competed successfully at the Maryland state
                and FIRST Tech Challenge World Championship levels, tackling
                complex engineering challenges.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-700 mb-6">
                <Users size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                STEM Outreach
              </h3>

              <p className="text-slate-600">
                Beyond competition, the team emphasizes giving back through
                robotics demonstrations, STEM exhibitions, and introducing
                younger students to engineering.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-700 mb-6">
                <Wrench size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Skill Development
              </h3>

              <p className="text-slate-600">
                Members gain hands-on experience in CAD, programming (Java),
                mechanical design, leadership, and project management.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="border-t border-slate-100 pt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Team Leadership
              </h2>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Founded by students, for students. Our leadership is dedicated
                to both robotics excellence and educational mentorship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full mb-6 overflow-hidden">
                  <img
                    src={christopherPhoto}
                    alt="Christopher Wang"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Christopher Wang
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  Founder & Captain
                </p>

                <p className="text-slate-600">
                  Christopher leads the engineering and strategy for Orca
                  Robotics, fostering a culture of innovation, teamwork, and
                  community engagement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full mb-6 overflow-hidden">
                  <img
                    src={sophiaPhoto}
                    alt="Sophia Wang"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Sophia Wang
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  Founder & Captain
                </p>

                <p className="text-slate-600">
                  As a co-founder and captain, Sophia brings strong leadership
                  to the team. She is also a dedicated SAT Gold Tutor with over
                  100+ hours of tutoring experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
