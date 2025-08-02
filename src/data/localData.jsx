
import countryList from '../images/work/countryList2.png'
import toDoApp from '../images/work/toDoApp.png'
import expences from '../images/work/expences.png'
// import deliveryManagment from '../images/work/delivery-site.png'
// import seoMalesiya from '../images/work/seoMalesiya.png'


export const projectData = [
    {
        id: 1,
        projectImage: countryList,
        projectName: "Country Data List",
        desc: 'In this Project, countries Card listing using real REST API. I have developed shorting and filter feature in this project.',
        usedTech: ['ReactJs',
            'Tailwind CSS',
        ],
        liveURL: 'https://countries-loca-datal-01.netlify.app/',
        sourceCode: 'https://github.com/deepakkashyap1100/Countries_API',
        features: ['Shorting [A-Z] - [Z-A]',
            'Searching',
            'Filtering',
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