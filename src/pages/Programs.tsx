import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Bot, Users } from 'lucide-react';

import mentorImage from '../assets/images/StudentMentorProgram.png';
import orcaImage from '../assets/images/Orca4.png';

export default function Programs() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Empowering students through mentorship, robotics, and hands-on
            experiences.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Student Mentor Program */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                <Users size={16} />
                <span>Mentorship & Leadership</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Student Mentor Program
              </h2>

              <p className="text-xl font-medium text-slate-700 mb-6">
                Students Sharing Experience. Younger Students Discovering
                Possibilities.
              </p>

              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                A free virtual program connecting experienced high school
                students with middle school students. High school mentors share
                firsthand experiences from activities such as robotics,
                Science Bowl, Science Olympiad, debate, research, and
                leadership.
              </p>

              <Link
                to="/student-mentor-program"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Explore the Program <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={mentorImage}
                  alt="Student Mentor Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Orca Robotics */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={orcaImage}
                  alt="Orca Robotics FTC Team 21587"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-medium text-sm mb-6">
                <Bot size={16} />
                <span>STEM & Engineering</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Orca Robotics
              </h2>

              <p className="text-xl font-medium text-slate-700 mb-6">
                FTC Team #21587
              </p>

              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                A student-led FIRST Tech Challenge robotics program founded in
                2022. Beyond building competitive robots, Orca Robotics
                emphasizes giving back to the community through STEM outreach,
                robotics camps, and exhibitions to inspire younger students in
                engineering and problem solving.
              </p>

              <Link
                to="/orca-robotics"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-900 transition-colors"
              >
                Visit Orca Robotics <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
