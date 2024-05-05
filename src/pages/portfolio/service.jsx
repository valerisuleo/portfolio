const projects = [
    {
        title: 'Steal My Deck',
        body: 'A unique card game featuring a 40-card deck, hand-crafted and divided into four Italian suits: Neapolitan, Piacentine, Triestine, and Sicilian. Built as a junior developer.',
        path: '',
        github: 'Steal-My-Deck'
    },
    {
        title: 'Who Let The Dogs Out?',
        body: 'A RESTful app for dog owners to locate nearby parks and gather essential information. Developed in my early career as a junior developer.',
        path: '',
        github: 'project-2'
    },
    {
        title: 'MTv Cribs',
        body: "A RESTful real estate app with an Express backend and AngularJs frontend. Features include ng-class for dynamic styling, a custom CSS carousel, and ngMessages for form validation. Developed while I was a junior developer.",
        path: '',
        github: 'small-projects/tree/master/AngularJS/Real%20Estate%20Apps'
    },
    {
        title: 'iTunes Artwork',
        body: 'This RESTful app uses jQuery animations and maintains two referenced models. Features user authentication and exclusive editing rights for the creator of each resource. Built in my early career.',
        path: '',
        github: 'small-projects/tree/master/itunes-screensaver'
    },
    {
        title: 'Dark Skies',
        body: "WebApp that integrates a public API to fetch weather data, developed using AngularJS. Built as a junior developer, this project includes proxy requests and API consumption.",
        path: '',
        github: 'small-projects/tree/master/AngularJS/darkskies'
    },
    {
        title: 'Open Weather',
        body: "A React app that displays real-time weather and a five-day forecast for London. Includes a countdown and progress bar that resets after one minute. Created during my junior developer phase.",
        path: '',
        github: 'small-projects/tree/master/code-test/open-weather'
    }
];


export function getProjects() {
    projects.forEach((item) => {
        item.path = `${item.title.replace(/\s/g,'').toLowerCase()}`
        if (item.path.includes('?')) {
            item.path = item.path.replace('?', '');
        }
        
    })
    return projects;
}