import { motion } from 'motion/react';
import { Users, HeartHandshake, Video } from 'lucide-react';

export default function GetInvolved() {
  return (
    <div className="w-full">
      <section className="bg-slate-900 text-white py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get Involved
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            Join us in empowering the next generation of learners and leaders.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Attend a Session */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Video size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Attend a Session</h2>
              <p className="text-slate-600 mb-8 flex-grow">
                Middle school students can join free Student Mentor Program sessions and learn about different extracurricular and educational opportunities.
              </p>
              <a href="#" className="block w-full text-center px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-colors">
                Register for a Session
              </a>
            </motion.div>

            {/* Become a Mentor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Become a Mentor</h2>
              <p className="text-slate-600 mb-8 flex-grow">
                High school students can share an activity, program, competition, research experience, or other educational experience that has been meaningful to them.
              </p>
              <a href="#" className="block w-full text-center px-6 py-3 bg-slate-50 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
                Apply to Become a Mentor
              </a>
            </motion.div>

            {/* Volunteer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-600/20">
                <HeartHandshake size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Volunteer</h2>
              <p className="text-slate-600 mb-8 flex-grow">
                Students and community members can support NEXT EDUCATION's educational and STEM outreach programs in various capacities.
              </p>
              <a href="#" className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                Volunteer With Us
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
