import { motion } from 'motion/react';
import { BookOpen, Users, Award, Shield } from 'lucide-react';

import christopherPhoto from '../assets/images/christopher.jpg';
import sophiaPhoto from '../assets/images/Sophia.jpg';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About NEXT EDUCATION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Created by students and families who believe that some of the most valuable educational knowledge comes from experience.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-slate-600 mx-auto">
            <p className="lead text-2xl text-slate-900 font-medium mb-8">
              Students often discover important programs, competitions, research opportunities, leadership experiences, and STEM activities through friends, teachers, or chance encounters. NEXT EDUCATION seeks to make those experiences easier to discover and more accessible to other students.
            </p>
            <p className="mb-6">
              Through our Student Mentor Program and Orca Robotics program, we provide opportunities for students to learn, lead, mentor, build, and serve their communities.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-10 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                <Shield size={32} />
              </div>
              <div>
                <p className="text-slate-900 font-medium m-0">NEXT EDUCATION, INC. is a 501(c)(3) nonprofit organization and an approved MCPS Student Service Learning organization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Founders */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Student Leaders</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              NEXT EDUCATION is driven by students who are passionate about sharing their experiences to help others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Christopher Wang */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img
                    src={christopherPhoto}
                    alt="Christopher Wang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Christopher Wang</h3>
                  <p className="text-blue-600 font-medium">Co-Founder | Grade 12</p>
                  <p className="text-slate-500 text-sm">Montgomery Blair High School</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Christopher is a 12th-grade student at Montgomery Blair High School with strong interests in physics, mathematics, engineering, robotics, and scientific research.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award size={18} className="text-blue-600" />
                  Key Experiences
                </h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">Founder and Captain of Orca Robotics FTC Team #21587</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">USA Physics Olympiad (USAPhO) Bronze Medalist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">1st Place, Physics — Maryland State Science Olympiad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">National 4th Place & Maryland Champion — Science Bowl, Team Captain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Five-time AIME qualifier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Extensive experience in competitive robotics and STEM activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Scientific research experience, including advanced quantum physics research</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 italic text-sm bg-slate-50 p-4 rounded-xl">
                Christopher believes that students benefit greatly from learning about opportunities from peers who have experienced them firsthand. His experiences in academic competitions, research, and STEM helped inspire NEXT EDUCATION's student-centered approach to mentorship and education.
              </p>
            </motion.div>

            {/* Sophia Wang */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img
                    src={sophiaPhoto}
                    alt="Sophia Wang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Sophia Wang</h3>
                  <p className="text-blue-600 font-medium">Co-Founder | Grade 11</p>
                  <p className="text-slate-500 text-sm">Student Mentor Program Founder</p>
                  <p className="text-slate-500 text-sm">Richard Montgomery High School</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Sophia is an 11th-grade student at Richard Montgomery High School passionate about robotics, scientific research, STEM education, mentorship, and community service.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award size={18} className="text-blue-600" />
                  Key Experiences
                </h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">Founder and student leader of the NEXT EDUCATION Student Mentor Program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">Founder and Captain of Orca Robotics FTC Team #21587</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="font-medium text-slate-800">SAT Gold Tutor (100+ Hours of Tutoring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>FIRST Tech Challenge World Championship-level robotics experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Leadership in robotics outreach and community STEM activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Scientific research experience, including computational biology research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Student mentorship and STEM education</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 italic text-sm bg-slate-50 p-4 rounded-xl">
                Through the Student Mentor Program, Sophia hopes to make it easier for younger students to discover opportunities, learn directly from experienced students, and find activities they genuinely enjoy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600">How NEXT EDUCATION grew naturally from years of student STEM activities and community service.</p>
          </div>

          <div className="relative border-l-2 border-blue-100 pl-8 ml-4 md:ml-auto md:mr-auto space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              <h3 className="text-xl font-bold text-slate-900">2022</h3>
              <p className="text-slate-600 mt-2 text-lg">Orca Robotics founded.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-400 rounded-full border-4 border-white shadow"></div>
              <h3 className="text-xl font-bold text-slate-900">2022–2026</h3>
              <p className="text-slate-600 mt-2 text-lg">Students participate in robotics competitions, STEM outreach, camps, demonstrations, research, and educational activities.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-800 rounded-full border-4 border-white shadow"></div>
              <h3 className="text-xl font-bold text-slate-900">2026</h3>
              <ul className="mt-2 space-y-3 text-lg text-slate-600">
                <li className="flex gap-3"><BookOpen className="text-blue-500 shrink-0 mt-1" size={20} /> NEXT EDUCATION becomes a 501(c)(3) nonprofit organization.</li>
                <li className="flex gap-3"><Shield className="text-blue-500 shrink-0 mt-1" size={20} /> NEXT EDUCATION becomes an MCPS-approved SSL organization.</li>
                <li className="flex gap-3"><Users className="text-blue-500 shrink-0 mt-1" size={20} /> Student Mentor Program launched to connect experienced high school students with younger students.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
