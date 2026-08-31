import { motion } from 'motion/react';
import { Clock, Video, Users, CheckCircle2, MessageCircle, HelpCircle, Award } from 'lucide-react';
import heroImg from '../assets/images/StudentMentorProgram.png';

export default function StudentMentorProgram() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm border border-blue-500/30 backdrop-blur-sm"
          >
            <Users size={16} />
            <span>Free Virtual Program</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Learn From Students Who Have Been There
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 font-medium mb-8"
          >
            Real experiences. Practical advice. New possibilities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Many middle school students and families know that opportunities such as robotics, Science Bowl, Science Olympiad, debate, research, volunteering, and summer programs exist, but they may not know what these experiences are really like or how to begin.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#" className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg">
              View Upcoming Sessions
            </a>
            <a href="#" className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-100 transition-colors">
              Become a Student Mentor
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Works</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The Student Mentor Program allows younger students to hear directly from high school students who have actually participated in these activities. Sessions are designed to be informal, practical, and interactive.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Video size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Virtual Sessions</h3>
                    <p className="text-slate-600">Offered free of charge, generally held on Friday evenings from 7:00–8:00 PM.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Informal Sharing</h3>
                    <p className="text-slate-600">Rather than a formal one-hour lecture, mentors share their experiences for approximately 15–20 minutes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Q&A</h3>
                    <p className="text-slate-600">Followed by guided discussion and open student Q&A in a friendly, conversational atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Typical Session Format</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-slate-900">Welcome and introduction</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-slate-900">15–20 minutes of experience sharing</p>
                    <p className="text-sm text-slate-600 mt-1">Mentor talks about how they started, challenges, and lessons learned.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-slate-900">Guided discussion</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-slate-900">Student Q&A</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 font-bold shrink-0">5</div>
                  <div>
                    <p className="font-semibold text-slate-900">Resources and closing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* For Middle Schoolers */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">For Middle School Students</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Discover new activities and opportunities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Ask questions directly to experienced high school students.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Learn what students wish they had known when they were younger.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Explore possible interests before entering high school.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Register as a Student &rarr;
                </a>
              </div>
            </div>

            {/* For High Schoolers */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">For High School Mentors</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-slate-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Share an experience that has been meaningful to you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-slate-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Help younger students discover opportunities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-slate-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Develop communication and leadership skills.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-slate-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Give back to your community.</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-blue-50 p-4 rounded-xl mb-4 text-sm text-blue-800">
                  <strong>MCPS SSL Hours:</strong> Eligible MCPS students may earn approved SSL hours for qualifying volunteer service.
                </div>
                <a href="#" className="text-slate-700 font-semibold hover:text-slate-900 flex items-center gap-2">
                  Apply to Become a Mentor &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
