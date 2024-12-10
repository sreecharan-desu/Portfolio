import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "sreecharan309@gmail.com",
      link: "mailto:sreecharan309@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 6300625861",
      link: "tel:+916300625861"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "SBI Road, Pamidipadu, Ongole, 523213, India",
      link: "https://maps.google.com/?q=SBI+Road+Pamidipadu+Ongole"
    }
  ]

  return (
    <div name="contact" className="w-full min-h-screen bg-dark text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div>
          <h2 className="text-4xl font-bold border-b-4 border-orange p-2 inline">Contact Me</h2>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-dark-light border border-orange/20 
                           hover:border-orange/60 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 rounded-full bg-orange/10 text-orange 
                                group-hover:bg-orange/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange mb-1">{info.label}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-dark-light border border-orange/20 
                           focus:border-orange/60 focus:outline-none focus:ring-2 
                           focus:ring-orange/20 transition-colors text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-dark-light border border-orange/20 
                           focus:border-orange/60 focus:outline-none focus:ring-2 
                           focus:ring-orange/20 transition-colors text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-dark-light border border-orange/20 
                           focus:border-orange/60 focus:outline-none focus:ring-2 
                           focus:ring-orange/20 transition-colors text-white resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-orange hover:bg-orange-light
                         text-white font-medium flex items-center justify-center gap-2 
                         hover:shadow-glow transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <FaPaperPlane className="text-sm" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 