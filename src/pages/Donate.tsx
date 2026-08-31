import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="w-full">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Heart size={40} className="fill-blue-600" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Help Students Discover <br className="hidden md:block"/> What's Possible
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg text-slate-600 mx-auto mb-12"
          >
            <p className="leading-relaxed">
              Your support helps NEXT EDUCATION provide free educational programs, student mentorship, robotics opportunities, STEM outreach, and community activities.
            </p>
            <p className="leading-relaxed">
              Donations directly support programs including the <strong>Student Mentor Program</strong> and <strong>Orca Robotics</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-8"
          >
            <a href="#" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-600/20 active:scale-95 transform duration-200">
              Donate to NEXT EDUCATION
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-slate-500"
          >
            NEXT EDUCATION, INC. is a 501(c)(3) nonprofit organization. Contributions may be tax-deductible to the extent permitted by law.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
