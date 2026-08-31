import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Users, Heart, Lightbulb, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 xl:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles size={16} />
              <span>501(c)(3) Nonprofit Educational Organization</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Empowering Students to <span className="text-blue-400">Learn, Lead & Give Back</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              NEXT EDUCATION is creating student-led opportunities in STEM education, mentorship, leadership, and community service. Through robotics and peer mentorship, students develop their own skills while helping younger students discover new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors gap-2 group"
              >
                Explore Our Programs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/get-involved" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
              >
                Get Involved
              </Link>
              <Link 
                to="/donate" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Support Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              NEXT EDUCATION empowers students to become learners, mentors, leaders, and contributors to their communities. We create meaningful opportunities for students to explore STEM, share their experiences, develop leadership skills, and make educational opportunities more accessible to others.
            </p>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <p className="text-2xl font-medium text-blue-900 leading-snug">
                "Students can accomplish more when they learn from one another and use their experiences to help the next generation."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Programs</h2>
            <p className="text-lg text-slate-600">
              We focus on student-led initiatives where experienced students guide and inspire the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Student Mentor Program Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop" 
                  alt="Students mentoring" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur text-blue-600 p-2.5 rounded-xl shadow-sm">
                    <Users size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Student Mentor Program</h3>
                <p className="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wider">Students Sharing Experience. Younger Students Discovering Possibilities.</p>
                <p className="text-slate-600 mb-8 flex-grow">
                  A free virtual program connecting experienced high school students with middle school students. Mentors share firsthand experiences from robotics, science competitions, research, and leadership to help younger students discover what's possible.
                </p>
                <div className="space-y-2">
                  <a href="#" className="block w-full text-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors text-sm">
                    View Upcoming Sessions
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="#" className="block w-full text-center px-4 py-2.5 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-colors text-sm">
                      Register as Student
                    </a>
                    <a href="#" className="block w-full text-center px-4 py-2.5 bg-slate-50 text-slate-700 font-medium rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors text-sm">
                      Become a Mentor
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orca Robotics Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2940&auto=format&fit=crop" 
                  alt="Students working on robotics" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur text-slate-800 p-2.5 rounded-xl shadow-sm">
                    <Bot size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Orca Robotics</h3>
                <p className="text-slate-500 font-medium mb-4 text-sm uppercase tracking-wider">FTC Team #21587</p>
                <p className="text-slate-600 mb-8 flex-grow">
                  A student-led FIRST Tech Challenge robotics program. Beyond building competitive robots, Orca Robotics emphasizes giving back to the community through STEM outreach, robotics camps, and exhibitions for younger students.
                </p>
                <div className="space-y-2 mt-auto">
                  <Link to="/orca-robotics" className="block w-full text-center px-4 py-2.5 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-900 transition-colors text-sm">
                    Visit Orca Robotics
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact/Call to Action */}
      <section className="py-20 md:py-28 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={48} className="mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Help Students Discover What's Possible</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Your support helps NEXT EDUCATION provide free educational programs, student mentorship, robotics opportunities, STEM outreach, and community activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
            >
              Donate to NEXT EDUCATION
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            NEXT EDUCATION, INC. is a 501(c)(3) nonprofit organization. Contributions may be tax-deductible to the extent permitted by law.
          </p>
        </div>
      </section>
    </div>
  );
}
