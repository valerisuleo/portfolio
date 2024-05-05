const about = {
    experience: [
        {
            title: "Senior Full Stack Developer",
            company: "ClickASnap",
            timeWindow: "2023 - Present",
            where: "London, UK",
            description:
                "Developed and maintained the pattern library utilizing Storybook to ensure consistent UI components across projects. Acted as the 'keeper' of the library, overseeing the integration and standardization of components, hooks, and global services. Crafted numerous reusable components and services, significantly enhancing development efficiency and code quality. Worked with Amazon DynamoDB, Jest, JavaScript, React.js, Node.js, TypeScript, and Express.js, contributing to the development of scalable and maintainable web applications."
        },
        {
            title: "Senior Front-end Developer",
            company: "Virgin",
            timeWindow: "2021 - 2023",
            where: "London, UK",
            description:
                "Spearheaded the documentation process for new starter onboarding. Developed and maintained reusable components for team use. Managed workload distribution among team members and mentored junior developers. Involved in code review, unit testing, and responsive design using Bootstrap grid. Collaborated with designers and project managers to integrate solutions with existing codebases."
        },
        {
            title: "Product Developer",
            company: "NetSupport",
            timeWindow: "2020 - 2021",
            where: "London, UK",
            description:
                "Specialized in UI development using Material Design for Angular. Designed schemas for backend developers to optimize REST API responses. Integrated real-time communication in applications using WebRTC and ReactJS."
        },
        {
            title: "Front-end Developer",
            company: "appScatter",
            timeWindow: "2019 - 2020",
            where: "London, UK",
            description:
                "Developed a mobile app distribution platform enhancing my skills in JS object-oriented development. Gained significant experience in Agile methodologies, Angular 8, and various testing frameworks."
        },
        {
            title: "Junior Software Engineer",
            company: "Indra",
            timeWindow: "2018 - 2019",
            where: "Rome, Italy",
            description:
                "Translated UI/UX designs into functional web components. Played a key role in developing a wizard application for the Bank of Italy."
        },
        {
            title: "Co-Founder, Web Designer, Radio Host, and Blogger",
            company: "V-Quadro",
            timeWindow: "2012 - 2014",
            where: "Rome, Italy",
            description:
                "Co-founded the company and played a pivotal role in its growth and online presence. Spearheaded the web design initiatives, driving significant traffic increase through effective blogging and SEO strategies. Hosted radio programs and managed a blogging platform, honing communication and content creation skills."
        }
    ],
    education: [
        {
            nameInstitute: "General Assembly",
            educationLevel: "Licenses & Certifications",
            field: "Full Stack Developer Certificate",
            when: "May 2017 - Aug 2017",
            where: "London, United Kingdom",
        },
        {
            nameInstitute: "Università degli Studi di Parma",
            educationLevel: "Master's degree",
            field: "Trade Marketing and Trading Strategies",
            when: "2010 - 2012",
            where: "Parma, Italy",
        },
        {
            nameInstitute: "Università degli Studi di Roma Tre",
            educationLevel: "Bachelor's degree",
            field: "Company and Market Economics",
            when: "2002 - 2007",
            where: "Roma, Italy",
        }
    ],
}


export function getExpericencesAndEducation() {
    return about;
}
