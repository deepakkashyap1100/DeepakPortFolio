import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: 'UI/Frontend Developer',
      company: 'AE TURN Solutions LLP',
      location: '',
      period: 'Aug-2025 - current',
      isCurrent: true,
      description: [
        'I have developed 3 projects, and currently 2 more projects are in progress in my organization. All of these projects have been built using the MERN stack.'
      ]
    },
    {
      id: 2,
      position: 'UI/Frontend Developer',
      company: 'Timeus Intractive Service',
      location: 'New Delhi',
      period: 'Aug-2023 - Feb-2025',
      isCurrent: false,
      description: [
        'During this time, I have developed more than 13 websites from scratch using HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, AJAX, and jQuery.'
      ]
    },
    {
      id: 3,
      position: 'UI/Frontend Developer',
      company: 'Business Thrust Techsoft Pvt. Ltd.',
      location: 'Noida (Sec-63)',
      period: 'June-2021 - Jul-2023',
      isCurrent: false,
      description: [
        'During this time, I developed 10+ UI projects from scratch and supported many others. I created cross-browser, cross-platform HTML5, CSS, and JavaScript solutions that matched complex design specs while maintaining clean, standards-compliant code.'
      ]
    }
  ];

  return (
    <section className="py-10 md:py-20 relative">
      {/* Background Decorative Elements */}
      {/* <div className="   absolute top-10 right-10 w-72 h-72 bg-teal-200 dark-theme:bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark-theme:opacity-10 animate-pulse"></div> */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 dark-theme:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark-theme:opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
              <FaBriefcase className="text-3xl text-teal-600 dark-theme:text-teal-400" />
              <div className="h-1 w-12 bg-gradient-to-l from-teal-500 to-teal-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark-theme:text-white mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 dark-theme:from-teal-400 dark-theme:to-teal-300">
                Journey </span>
            </h2>
            <p className="text-gray-600 dark-theme:text-gray-300 text-lg">My professional journey and achievements</p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line with Gradient */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-teal-500 to-purple-400 dark-theme:from-teal-500 dark-theme:via-teal-600 dark-theme:to-purple-500 rounded-full opacity-30 dark-theme:opacity-40"></div>

          {/* Experience Items */}
          <div className="space-y-8 lg:space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Animated Timeline Dot */}
                <div className="hidden md:flex absolute left-8 top-8 w-5 h-5 items-center justify-center z-10 transform -translate-x-1/2">
                  <div className={`absolute w-5 h-5 rounded-full ${exp.isCurrent ? ' bg-gradient-to-r from-teal-500 to-teal-600 dark-theme:from-teal-400 dark-theme:to-teal-500 animate-pulse' : 'bg-gradient-to-r from-purple-500 to-purple-600 dark-theme:from-purple-400 dark-theme:to-purple-500'} shadow-lg`}></div>
                  <div className={`absolute w-8 h-8 rounded-full ${exp.isCurrent ? 'bg-teal-400' : 'bg-purple-400'} opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>

                {/* Content Card */}
                <div className="md:ml-20 bg-white dark-theme:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark-theme:shadow-gray-900 transition-all duration-300 overflow-hidden border border-gray-100 dark-theme:border-gray-700 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Gradient Top Border */}
                  <div className={`h-2 ${exp.isCurrent ? 'bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 animate-pulse' : 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500'}`}></div>

                  <div className="p-6 lg:p-8">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start ">
                      {/* Position and Company */}
                      <div className="mb-4 lg:mb-0 flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-3 rounded-xl ${exp.isCurrent ? 'bg-gradient-to-br from-teal-0 to-teal-300 dark-theme:from-teal-900 dark-theme:to-teal-800' : 'bg-gradient-to-br from-purple-50 to-purple-100 dark-theme:from-purple-900 dark-theme:to-purple-800'} group-hover:scale-110 transition-transform duration-300`}>
                            <FaBriefcase className={`text-2xl ${exp.isCurrent ? 'text-teal-600 dark-theme:text-teal-400 ' : 'text-purple-600 dark-theme:text-purple-400'}`} />
                          </div>
                          <div>
                            <h6 className="text-2xl lg:text-3xl font-bold text-gray-900 dark-theme:text-white mb-2 group-hover:text-teal-600 dark-theme:group-hover:text-teal-400 transition-colors duration-300">
                              {exp.position}
                            </h6>
                            <div className="flex flex-col gap-2">
                              <h6 className="text-lg font-semibold text-gray-700 dark-theme:text-gray-200">{exp.company}</h6>
                              {exp.location && (
                                <div className="flex items-center gap-2 text-gray-600 dark-theme:text-gray-400">
                                  <FaMapMarkerAlt className="text-sm text-teal-500 dark-theme:text-teal-400" />
                                  <span className="text-sm font-medium">{exp.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark-theme:from-gray-700 dark-theme:to-gray-600 rounded-full border-2 border-gray-200 dark-theme:border-gray-600 shadow-sm">
                        <FaCalendarAlt className={`text-sm ${exp.isCurrent ? 'text-teal-600 dark-theme:text-teal-400' : 'text-purple-600 dark-theme:text-purple-400'}`} />
                        <span className="font-bold text-gray-800 dark-theme:text-white text-sm lg:text-base whitespace-nowrap">
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="ml-2 px-3 py-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6 pl-0 lg:pl-16">
                      <ul className="space-y-3">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className="relative mt-2 mr-4 flex-shrink-0">
                              <div className={`w-3 h-3 rounded-full ${exp.isCurrent ? 'bg-gradient-to-r from-teal-500 to-teal-600 dark-theme:from-teal-400 dark-theme:to-teal-500' : 'bg-gradient-to-r from-purple-500 to-purple-600 dark-theme:from-purple-400 dark-theme:to-purple-500'} shadow-md`}></div>
                              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full ${exp.isCurrent ? 'bg-teal-400' : 'bg-purple-400'} opacity-0 group-hover/item:opacity-30 transition-opacity duration-300`}></div>
                            </div>
                            <span className="text-gray-700 dark-theme:text-gray-300 leading-relaxed text-base">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default WorkExperience;
