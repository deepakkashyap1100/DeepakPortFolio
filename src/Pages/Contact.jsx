import React, { useId } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgylkwe");
  const fId = useId();

  if (state.succeeded) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50 dark-theme:bg-gray-900 transition-colors duration-300">
        <div className="max-w-md w-full bg-white dark-theme:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-20 h-20 bg-green-100 dark-theme:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaPaperPlane className="text-3xl text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900  mb-4">Message Sent!</h2>
          <div className="text-gray-600  mb-8">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/30"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div className="space-y-8 lg:pr-8">
            <div className=" mb-16">
              <h1 className="text-4xl md:text-5xl font-bold  mb-4 tracking-tight">
                Get in <span className="text-teal-600 dark:text-teal-400">Touch</span>
              </h1>
              <p className="text-lg text-gray-600  max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </p>
            </div>
            <div className="   rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-1 border">
              <h3 className="text-2xl font-bold  mb-6">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark-theme:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-xl text-teal-600 dark-theme:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 ">Email</h4>
                    <p className="text-gray-600 ">deepakkashyap1100@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark-theme:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-purple-600 dark-theme:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 ">Location</h4>
                    <p className="text-gray-600 ">India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark-theme:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl text-orange-600 dark-theme:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 ">Phone</h4>
                    <div className="text-gray-500">+91 81716 54421</ div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white dark-theme:bg-gray-800 rounded-2xl border  p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative ">
              <div>
                <label htmlFor={fId + 'name'} className="block text-sm font-medium text-gray-700  mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id={fId + 'name'}
                  name="username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50  border border-gray-200 dark-theme:border-gray-600 text-gray-900  focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="John Doe"
                  required
                />
                <ValidationError prefix="Name" field="username" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor={fId + 'email'} className="block text-sm font-medium text-gray-700  mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id={fId + 'email'}
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50  border border-gray-200 dark-theme:border-gray-600 text-gray-900  focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="john@example.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label
                  htmlFor={fId + 'mobile'}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Number
                </label>

                <input
                  type="text"
                  id={fId + 'mobile'}
                  name="mobile"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 dark-theme:border-gray-600 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="+91 98765 43210"
                  required
                />

                <ValidationError
                  prefix="Mobile"
                  field="mobile"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>


              <div>
                <label htmlFor={fId + 'message'} className="block text-sm font-medium text-gray-700  mb-2">
                  Message
                </label>
                <textarea
                  id={fId + 'message'}
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50  border border-gray-200 dark-theme:border-gray-600 text-gray-900  focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
