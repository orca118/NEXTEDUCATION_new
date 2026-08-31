import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-12 text-center">
            Have questions about our programs, volunteering, or donations? We'd love to hear from you.
          </p>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Email Us</h2>
            <p className="text-slate-600 mb-8">
              For all inquiries, please reach out to us via email and our team will get back to you as soon as possible.
            </p>
            <a 
              href="mailto:contact@nexteducationglobal.org"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              <Send size={20} />
              contact@nexteducationglobal.org
            </a>
          </div>
          
          <div className="mt-12 text-center text-slate-500">
            <p>NEXT EDUCATION, INC. is a 501(c)(3) nonprofit organization.</p>
            <p>Approved MCPS Student Service Learning (SSL) Organization.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
