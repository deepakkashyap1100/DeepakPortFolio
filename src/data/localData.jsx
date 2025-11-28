
import countryList from '../images/work/bizaario.png'
import toDoApp from '../images/work/toDoApp.png'
import expences from '../images/work/expences.png'
// import deliveryManagment from '../images/work/delivery-site.png'
// import seoMalesiya from '../images/work/seoMalesiya.png'


export const projectData = [
  {
    id: 1,
    projectImage: countryList,
    projectName: "Bizaario Care ",
    desc: 'Bizaario Care is a health-tech platform founded in 2024. It aims to modernize global access to medical care by connecting patients from underserved regions to top Indian hospitals using AI-powered digital infrastructure.',
    usedTech: ['ReactJs',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'Express.js',
    ],
    liveURL: 'https://bizaariocare.com/',
    // sourceCode: 'https://github.com/deepakkashyap1100/Countries_API',
    features: ['Digitization of medical records & EMR integration',
      'Global patient-to-hospital matchmaking (incl. treatment planning & second opinions)',
      'End-to-end medical tourism support (hospital + travel + post-treatment care)',
      'AI-enabled clinical decision support'
    ],
  },

  {
    id: 2,
    projectImage: expences,
    projectName: "Track Your Daily Expences",
    desc: 'This Application helps track your daily expenses. You can sort records by amount. The Data have been saved in localStorage.',
    usedTech: ['ReactJs',
      'Tailwind CSS',
      'LocalStorage',
      'Shorting'
    ],
    features: ['Shorting [A-Z] - [Z-A]',
      'Advance Form Validation',

    ],
    liveURL: 'https://expencereport.netlify.app/',
    sourceCode: 'https://github.com/deepakgitofficial/Form_in_react_01/tree/react_form_V_1.02',
  },
  {
    id: 3,
    projectImage: toDoApp,
    projectName: "Daily Routne Time Table",
    desc: 'I have Developet this App in React Js, and store data localy in JSON format',
    usedTech: ['ReactJs',
      'Tailwind',
      'CSS',
      'JSON API',
    ],
    // liveURL: '',
    sourceCode: 'https://github.com/deepakgitofficial/CURC_Operation_API',
  },

]
