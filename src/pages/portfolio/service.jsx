const projects = [
    {
        title: "Steal My Deck",
        body: "A unique card game featuring a 40-card deck, hand-crafted and divided into four Italian suits: Neapolitan, Piacentine, Triestine, and Sicilian. Built as a junior developer.",
        path: "",
        github: "Steal-My-Deck",
    },
    {
        title: "Who Let The Dogs Out?",
        body: "A RESTful app for dog owners to locate nearby parks and gather essential information. Developed in my early career as a junior developer.",
        path: "",
        github: "project-2",
    },
    {
        title: "Game Hub",
        body: "A cutting-edge React application designed for discovering and engaging with a vast array of video games. Leveraging the latest in web technologies, GamePoint offers an immersive experience, allowing users to explore, filter, and learn about their favorite games with ease..",
        path: "",
        github: "gamepoint",
    },
];

export function getProjects() {
    projects.forEach((item) => {
        item.path = `${item.title.replace(/\s/g, "").toLowerCase()}`;
        if (item.path.includes("?")) {
            item.path = item.path.replace("?", "");
        }
    });
    return projects;
}
