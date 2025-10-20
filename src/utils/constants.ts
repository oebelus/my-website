import { Post, SkillsType } from "../types/post";

export const navLinks = [
  {
    id: "",
    name: "about_me;",
  },
  {
    id: "projects",
    name: "projects;",
  },
  {
    id: "blog",
    name: "blog;",
  },
  {
    id: "now",
    name: "now;",
  },
  {
    id: "my_notes",
    name: "my_notes;",
  },
  {
    id: "gallery",
    name: "gallery;",
  },
];

export const certifications = [
  {
    id: "postman",
    name: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    date: "Oct 22, 2024",
    link: "https://badgr.com/public/assertions/bW7gRhhwTBCb61xX5pCF0w?identity__email=imaneelfadilelidrissi@gmail.com",
    image:
      "https://api.badgr.io/public/assertions/bW7gRhhwTBCb61xX5pCF0w/image",
    credential: "",
  },
  {
    id: "introduction-to-coding",
    name: "Introduction to Coding",
    organization: "SheCodes",
    date: "Jun 2024",
    link: "https://www.shecodes.io/certificates/922007284ebc53de640d1180d2b75d09",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/212/039/original/212039.png?1719228912",
    credential: "922007284ebc53de640d1180d2b75d09",
  },
  {
    id: "introduction-to-web-development",
    name: "Introduction to Web Development",
    organization: "SheCodes",
    date: "Jun 2024",
    link: "https://www.shecodes.io/certificates/a229f8c472b6502a1bfb4c46da1cb86c",
    image:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/212/608/original/212608.png?1719416036",
    credential: "a229f8c472b6502a1bfb4c46da1cb86c",
  },
  {
    id: "foundational-c-sharp",
    name: "Foundationl C# with Microsoft",
    organization: "FreeCodeCamp",
    date: "Feb 2, 2024",
    link: "https://www.freecodecamp.org/certification/fccd9847d63-79c8-40e5-9aee-66e20a9f5d35/foundational-c-sharp-with-microsoft",
    image: "certifications/foundational-c-sharp.jpg",
    credential: "fccd9847d63-79c8-40e5-9aee-66e20a9f5d35-fcswm",
  },
  {
    id: "responsive-web-design",
    name: "Responsive Web Design",
    organization: "FreeCodeCamp",
    date: "Aug 2022",
    link: "https://www.freecodecamp.org/certification/fccd9847d63-79c8-40e5-9aee-66e20a9f5d35/responsive-web-design",
    image: "certifications/responsive-web-design.jpg",
    credential: "fccd9847d63-79c8-40e5-9aee-66e20a9f5d35-ljaads",
  },
  {
    id: "legacy-js",
    name: "Legacy JavaScript Algorithms and Data Structures",
    organization: "FreeCodeCamp",
    date: "Aug 2022",
    link: "https://www.freecodecamp.org/certification/fccd9847d63-79c8-40e5-9aee-66e20a9f5d35/javascript-algorithms-and-data-structures",
    image: "certifications/legacy-js.jpg",
    credential: "fccd9847d63-79c8-40e5-9aee-66e20a9f5d35-rwd",
  },
];

export const experience = [
  {
    id: "national-institute",
    title: "Full Stack Web Developer",
    title_type: "Internship",
    company: "National Institute of Innovation and Advanced Technology",
    location: "Casablanca, Morocco",
    date: "Sep 2024 - Nov 2024",
    location_type: "Remote",
    stack: ["Ruby", "Ruby on Rails", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "headstarter-ai",
    title: "Software Development Fellow",
    title_type: "Apprenticeship",
    company: "HeadStarter AI",
    location: "New York, USA",
    date: "Jul 2024 - Sep 2024",
    location_type: "Remote",
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind",
      "RAG",
      "AI",
    ],
  },
];

export const skills: SkillsType = {
  "Operating Systems": ["Windows", "GNU/Linux"],
  "Development Tools": ["Git", "npm", "Webpack", "Vite"],
  Languages: [
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "C",
    "Python",
    "SQL",
    "Ruby",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Web Development": [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "React",
    "Node.js",
    "Express",
    "Ruby on Rails",
    "Spring Boot",
    "Three.js",
  ],
};

export const projects = [
  {
    id: "vm",
    name: "Stack-Based Virtual Machine",
    description:
      "The Stack-Based Virtual Machine (SVM) is a Turing Complete virtual machine created using C#. It's designed to handle various tasks like arithmetic operations, manipulating stacks, controlling flow, and managing memory.",
    github: "https://github.com/oebelus/stackVM",
    technologies: ["C#"],
    features: [
      "Bytecode Interpretation: Executes bytecode instructions.",
      "Mnemonics Execution: Human-readable mnemonics can be converted to bytecode for execution.",
      "Control Flow: Supports jump and conditional jump instructions.",
      "Memory Operations: Load and store values in memory.",
    ],
  },
  {
    id: "parsenator",
    name: "parsenator",
    description:
      "Trying to implement a basic parser combinator for strings, that I wanted to use for my lisp interpreter project, because I like doing everything from scratch",
    github: "https://github.com/oebelus/parsenator",
    features: [
      "Specific matchers that match a specific output",
      "General matches that succeed any valid input.",
      'Logical combinators (such as "or" and "and").',
      'Transformation combinators (such as "map" and "seq").',
      "Error handling that contains one parser combinator which is fail (Always fails with a given error message).",
    ],
    technologies: ["Rust"],
  },
  {
    id: "ilisp",
    name: "ilisp",
    description:
      "A lisp interpreter, because why not? it's a Racket-like lisp (since I love Racket).",
    github: "https://github.com/oebelus/iLisp",
    features: [
      "Binary, unary, logical and comparison operations",
      "Conditionals.",
      "Function definitions and function calls.",
      "Supports recursion too.",
    ],
    technologies: ["Rust"],
  },
  {
    id: "ilanguage",
    name: "My Toy Imperative Language",
    description:
      "The first language I ever wrote in my life. Planning to write more and improve the ones I already wrote.",
    github: "https://github.com/oebelus/Language",
    technologies: ["C#"],
    features: [
      "The grammar is here: https://github.com/oebelus/Language/blob/master/Grammar.txt.",
      "It contains a Lexer, and Interpreter and a compiler to the VM I wrote (above project).",
      "Supports function calls definitions and function calls, has an environment for closures.",
      "Global and local variables.",
      "This project took me a lot of time but it was really fun.",
      "I followed Crafting Interpreters' book among other resources.",
    ],
  },
  {
    id: "rshell",
    name: "A Simple Shell",
    description:
      "A REPL POSIX compliant shell in Rust that's capable of interpreting shell commands, running external programs and some builtin commands.",
    github: "https://github.com/oebelus/rubik-s",
    features: [
      "Builtins: exit, echo, cat, type, cd, pwd.",
      "Navigation.",
      "Quoting.",
      "Redirection.",
      "Autocompletion.",
    ],
    technologies: ["Rust"],
  },
  {
    id: "expenses",
    name: "Expenses Tracker",
    description:
      "Expense Tracker is a simple and efficient full stack web application that helps you keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
    github: "https://github.com/oebelus/expensesTracker?tab=readme-ov-file",
    technologies: [
      "HTML 5",
      "Tailwind",
      "TypeScript",
      "React",
      "Chart.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "User Authentication.",
      "Expenses Logging: Add new expenses with details such as date, category, description, and amount.",
      "Expenses Categories, History and Summary.",
      "Handy search and filter options",
      "Responsive Design",
    ],
  },
  {
    id: "bf",
    name: "Brainf*ck Interpreter",
    description:
      "A simple Brainfuck interpreter that prompts you to input your Brainfuck code in the console and outputs the result. It supports all standard Brainfuck commands.",
    github: "https://github.com/oebelus/brainf-ckpreter",
    features: [
      "Standard Commands: Supports all standard Brainfuck commands, including nested brackets.",
      "Output and Tape: Displays the result and the tape after interpreting the code.",
      "Interactive: Prompts for input and displays results directly in the console.",
    ],
    technologies: ["C#"],
  },
  {
    id: "calculator",
    name: "Mathematical Expression Evaluator",
    description:
      "A TypeScript program that evaluates mathematical expressions in infix notation and returns the result. It supports binary operations (+, -, *, /, ^) and unary operations (!, sin, cos, tan).",
    github: "https://github.com/oebelus/calculators",
    features: [
      "Tokenizer: Parses the input expression into individual tokens.",
      "Shunting Yard Algorithm: Converts infix expressions to RPN while handling operator precedence and associativity.",
      "RPN Evaluation with AST: Evaluates RPN expressions by constructing and collapsing an Abstract Syntax Tree.",
      "Stack Calculation: Evaluates RPN expressions using stack-based calculations.",
    ],
    technologies: ["TypeScript"],
  },
  {
    id: "pong",
    name: "Pong Game",
    description:
      "A simple Pong game implemented in TypeScript. The game features two paddles and a ball that bounces around the screen. The objective is to score points by getting the ball past the opponent's paddle.",
    github: "https://github.com/oebelus/pongTs",
    features: [
      "Two Paddles: Controls for moving paddles up and down.",
      "Ball Mechanics: The ball bounces off paddles and walls.",
      "Scoring System: Tracks and displays scores for both players.",
      "Basic Controls: Allows players to move paddles using keyboard inputs.",
    ],
    technologies: ["TypeScript", "HTML5", "Canvas"],
    demo: "https://oebelus.github.io/pongTs/",
  },
  {
    id: "html-wrapper-plugin",
    name: "HTML Wrapper",
    description:
      "This is an Obsidian plugin that turns your favourite HTML snippets into reusable piece of code without the need to type them each time. It's already submitted, waiting for approval, but it works like magic. I use it on a daily basis!",
    github: "https://github.com/oebelus/html-wrapper-plugin",
    features: ["Save your favourite HTML and inline CSS styling."],
    technologies: ["TypeScript", "Obsidian", "Plugin"],
  },
  {
    id: "http_server",
    name: "HTTP Server in Java",
    description:
      "A custom-built HTTP server implemented in Java. This server handles incoming HTTP requests and provides responses based on the request type and URL.",
    github: "https://github.com/oebelus/http-server-java",
    features: [
      "File Handling: Supports GET requests to retrieve files and POST requests to save files.",
      "Echo Requests: Returns the request body in response, with optional Gzip compression.",
      "User-Agent Information: Provides the User-Agent string from request headers.",
      "Dynamic Response Generation: Generates HTTP responses based on request path and method.",
      "Error Handling: Responds with appropriate HTTP status codes for various scenarios.",
    ],
    technologies: ["Java", "Java Sockets", "HTTP Protocol"],
  },
  {
    id: "express_app",
    name: "Node.js API",
    description:
      "A TypeScript-based Express application with built-in middleware for security, logging, and compression. It is designed for scalability and ease of integration with various controllers.",
    github: "https://github.com/oebelus/node-api",
    features: [
      "Middleware Integration: Uses helmet for security, cors for cross-origin resource sharing, morgan for logging, and compression for response bodies size reduction.",
      "Database Connection: Connects to MongoDB using Mongoose.",
      "Controller-Based Routing: Routes requests through specified controllers.",
      "Error Handling: Centralized error handling through middleware.",
    ],
    technologies: [
      "Express",
      "Mongoose",
      "Compression",
      "CORS",
      "Morgan",
      "Helmet",
    ],
  },
  {
    id: "solar_system",
    name: "Solar System Simulator",
    description:
      "A Three.js-based solar system simulation showcasing the planets and their orbits. ",
    github: "https://github.com/oebelus/solarSystem",
    demo: "https://oebelus.github.io/solarSystem/",
    features: [
      "Planetary Visualization: Displays planets with textures and accurate scaling.",
      "Interactive Controls: Allows user interaction to explore the solar system with orbit controls.",
      "Real-Time Animation: Planets and orbits animate continuously to simulate movement.",
    ],
    technologies: ["Three.js", "TypeScript", "WebGL"],
  },
  {
    id: "movies_fullstack_website",
    name: "Movies' Website",
    description:
      "A full-stack website to manage movie lists, including 'seen', 'to watch', and 'top 100' movies.",
    github: "https://github.com/oebelus/moviesTs",
    features: [
      "Seen List: Track movies you have watched.",
      "Top 100: Explore the top 100 movies according to user ratings.",
      "Watchlist: Save movies you want to watch later.",
      "User Authentication: Ensure personalized lists and secure access.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "CORS",
      "Nodemon",
      "JWT",
    ],
  },
  {
    id: "simple_shell",
    name: "Simple Shell",
    description:
      "A basic command-line interface that reads user input and executes commands.",
    github: "https://github.com/oebelus/simpleShell",
    features: [
      "Command Execution: Executes user-entered commands and displays their output.",
      "Built-in Commands: Includes basic commands such as 'echo' to display messages or environment variable values, and 'env' to list environment variables and their values.",
    ],
    technologies: ["C"],
  },
  {
    id: "mini_games",
    name: "Mini Games",
    description:
      "A collection of simple games implemented in C using the ncurses library. It includes classic games like Snake and a retro racing game.",
    github: "https://github.com/oebelus/miniGames",
    features: [
      "Snake Game: Navigate a growing snake to eat fruit while avoiding collisions with boundaries and itself.",
      "Retro Racer: Control a car and avoid enemy cars in an ASCII art-based racing game.",
    ],
    technologies: ["C", "ncurses"],
  },
  {
    id: "ecommerce-api",
    name: "Spring eCommerce API",
    description:
      "A RESTful API for managing products, categories, images, and a shopping cart, built with Spring Boot.",
    github: "https://github.com/oebelus/EcomSpring",
    features: [
      "Product management with CRUD operations.",
      "Image upload and download functionality.",
      "Filter products by category, brand, and name.",
      "Retrieve all categories of products.",
      "Basic shopping cart management.",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "Postman", "MySQL"],
  },
  {
    id: "rubiks",
    name: "Rubik's Cube",
    description: "An interactive Three.js Rubik's cube.",
    github: "https://github.com/oebelus/rubik-s",
    features: [
      "Dynamic grid of colored cubes.",
      "Support for dragging and rotating cubes.",
      "Interaction through mouse events.",
      "Real-time updates and animations.",
      "Control over rotation direction and angle.",
    ],
    technologies: ["Three.js", "TypeScript", "TWEEN.JS"],
  },
];

export const contacts = [
  {
    id: "x",
    name: "X",
    link: "https://twitter.com/oebelus",
    image:
      "https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000",
  },
  {
    id: "bluesky",
    name: "Bluesky",
    link: "https://bsky.app/profile/oebelus.bsky.social",
    image: "./bluesky.svg",
  },
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/oebelus",
    image:
      "https://img.icons8.com/?size=100&id=v551nqGeHhGn&format=png&color=000000",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    link: "https://leetcode.com/u/oebelus/",
    image: "",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/oebelus",
    image: "./hackerrank.svg",
  },
  {
    id: "tumblr",
    name: "Tumblr",
    link: "https://oebelus.tumblr.com/",
    image: "https://img.icons8.com/?size=100&id=62153&format=png&color=000000",
  },
];

export const builds = [
  "Dynamic and responsive websites, and full-stack applications (MERN, Spring/React).",
  "3D visualizations with Three.js.",
  "Command-line tools and utilities.",
];

export const hobbies = [
  "Gaming.",
  "Learning About Some Random Topic.",
  'Watching: ["Movie", "Series", "Anime", "YouTube"].',
  'Reading: ["Manga", "Comics", "A Book"].',
  "Drawing.",
];

export const facts = [
  "My favorite numbers are 7 and 17.",
  "My favorite dinosaur `at the moment` is the Therizinosaurus.",
  "I'm a huge fan of construction vehicles and trucks.",
  "My major has nothing to do with Computer Science.",
  "I collect toys, shells, rocks...",
  "Jack of all trades, master of none.",
];

export const posts: Post[] = [
  {
    id: "vhdlone",
    title: "A Tutorial Introduction to VHDL Programming: Chapter 1 Solutions",
    date: "10/20/2025",
    category: ["FPGA", "VHDL", "Hardware", "Digital Electronics"],
    description:
      "Suggested Solutions for the first chapter of A Tutorial Introduction to VHDL Programming",
    content: "VhdlOne",
  },
  {
    id: "servobin",
    title: "Electrical Trash Bin",
    date: "09/11/2025",
    category: ["Electronics", "Arduino", "Servo"],
    description: "A relatively smart Trash Bin",
    content: "ServoBin",
  },
  {
    id: "fractals",
    title: "Generative Recursion",
    date: "04/08/2025",
    category: ["Racket", "Functional Programming"],
    description:
      "Patterns I generated while trying to implement the Sierpinski Carpet.",
    content: "Fractals",
  },
  {
    id: "chapterone",
    title: "Category Theory For Programmers: Chapter 1 Solutions",
    date: "09/18/2024",
    category: ["Category Theory", "Mathematics"],
    description:
      "Suggested Solutions for the first chapter of Category Theory for Programmers",
    content: "ChapterOne",
  },
  {
    id: "beans",
    title: "An Introduction to Beans in Spring",
    date: "08/21/2024",
    category: ["Spring", "Java"],
    description: "A small friendly introduction to Beans and IoC in Spring",
    content: "Beans",
  },
];

export const gallery = [
  {
    id: "drawings",
    name: "Drawings",
    description: "A collection of my drawings and paintings",
  },
];

export const images = [
  {
    link: "velociraptor.jpg",
    name: "Velociraptor",
    description:
      "Velociraptor is one of my favourite dinosaurs, I have learned to like the feathered version the hard way ;)",
    date: "Sep 26, 2024",
    topics: ["Dinosaurs", "Animal"],
  },
  {
    link: "carnotaurus.jpg",
    name: "Carnotaurus",
    description: "Carnotaurus",
    date: "Sep 15, 2024",
    topics: ["Dinosaurs", "Animal"],
  },
  {
    link: "godzilla.jpg",
    name: "Godzilla",
    description: "Godzilla",
    date: "May 12, 2024",
    topics: ["Godzilla"],
  },
  {
    link: "pseudoceros.jpg",
    name: "Pseudoceros Dimidiatus",
    description:
      "Pseudoceros Dimidiatus is a hermaphrodite flatworm that may be found in the Indian and Western Pacific ocean, in coral reefs. When two flat worms mate, they fight over who gets to fertilize and who gets to be fertilized. The winner gets to play the role of the male, fertilizing the other.",
    date: "2020",
    topics: ["Animal"],
  },
  {
    link: "amphiprion.jpg",
    name: "Amphiprion Ocellaris",
    description: "Amphiprion Ocellaris is Nemo :3",
    date: "2020",
    topics: ["Animal"],
  },
  {
    link: "sandman.jpg",
    name: "Morpheus",
    description: "Morpheus, the sandman",
    date: "Oct 1, 2023",
    topics: ["Comics"],
  },
  {
    link: "madara.jpg",
    name: "Madara Uchiha from Naruto",
    description: "Madara Uchiha from Naruto",
    date: "2018",
    topics: ["Anime"],
  },
  {
    link: "beetle.jpg",
    name: "A green beetle",
    description:
      "I forgot the name of the beetle, I have to look it up again :D",
    date: "2020",
    topics: ["Insects"],
  },
  {
    link: "bird.jpg",
    name: "Grey-headed Bristlebill",
    description: "Grey-headed Bristlebill",
    date: "2020",
    topics: ["Animal", "Birds"],
  },
  {
    link: "doodle.jpg",
    name: "Doodle",
    description: "Doodle",
    date: "Sep 14, 2024",
    topics: ["Animal"],
  },
  {
    link: "pou.jpg",
    name: "Pou",
    description: "Pou",
    date: "2023",
    topics: ["Pets", "Digital"],
  },
  {
    link: "piano.jpg",
    name: "Piano",
    description: "Piano en flammes",
    date: "2019",
    topics: ["Music"],
  },
  {
    link: "dancer.jpg",
    name: "Dancer",
    description: "Dancer",
    date: "2020",
    topics: [],
  },
  {
    link: "cygne.jpg",
    name: "Un cygne échoué sur un rivage perdu",
    description: "A swan washed up on a lost shore",
    date: "2020",
    topics: ["Animal", "Bird"],
  },
  {
    link: "brain.jpg",
    name: "Brain",
    description: "Brain",
    date: "2023",
    topics: ["Anatomy", "Digital"],
  },
  {
    link: "hippocampus.jpg",
    name: "Hippocampus",
    description: "Hippocampus",
    date: "2023",
    topics: ["Anatomy", "Digital"],
  },
  {
    link: "mms.jpg",
    name: "M&M's",
    description: "M&M's",
    date: "2020",
    topics: ["Food", "3D"],
  },
  {
    link: "kaneki.jpg",
    name: "Kaneki from Tokyo Ghoul",
    description: "Kaneki from Tokyo Ghoul",
    date: "2017",
    topics: ["Anime"],
  },
  {
    link: "migi.jpg",
    name: "Migi from Parasyte",
    description: "Migi from Parasyte",
    date: "2016",
    topics: ["Anime"],
  },
  {
    link: "turtle.jpg",
    name: "A stack of animals",
    description: "Snail. Frog. Turtle.",
    date: "2022",
    topics: ["Animal"],
  },
];

export const songs = [
  {
    id: 0,
    link: "songs/X_vs_Zero_Decisive_Battle_2_Soundtrack.mp3",
    name: "X vs Zero Decisive Battle 2",
    artist: "Breis",
    image: "xvszero.jpg",
  },
  {
    id: 1,
    link: "songs/Igorrr_Tout_Petit_Moineau.mp3",
    name: "Tout Petit Moineau",
    artist: "Igorrr",
    image: "igorrr.jpg",
  },
  {
    id: 2,
    link: "songs/No_Leaf_Clover.mp3",
    name: "No Leaf Clover",
    artist: "Metallica",
    image: "metallica.jpg",
  },
  {
    id: 3,
    link: "songs/SABATON_The_Attack_of_the_Dead_Men.mp3",
    name: "The Attack of the Dead Men",
    artist: "Sabaton",
    image: "sabaton.jpg",
  },
  {
    id: 4,
    link: "songs/Spear_of_Justice.mp3",
    name: "Spear of Justice",
    artist: "Toby Fox",
    image: "undertale.jpg",
  },
  {
    id: 5,
    link: "songs/Forget_Not.mp3",
    name: "Forget Not",
    artist: "Ne Obliviscaris",
    image: "ne_obliviscaris.jpg",
  },
  {
    id: 6,
    link: "songs/And_Then_There_Was_Silence.mp3",
    name: "And Then There Was Silence",
    artist: "Blind Guardian",
    image: "blind_guardian.jpg",
  },
  {
    id: 7,
    link: "songs/Megaman_X_5.mp3",
    name: "Megaman X5 Intro",
    artist: "",
    image: "megaman_x5.jpg",
  },
];

export const currently = {
  cs: {
    verb: "learning",
    icon: "book",
    items: ["Rust", "Haskell", "Racket"],
  },
  courses: {
    verb: "doing",
    icon: "📚",
    items: [
      "The OSSU curriculum: currently doing the Systematic Program Design",
    ],
  },
  games: {
    verb: "playing",
    icon: "game",
    items: [
      "Detroit: Become Human",
      "The Legend of Zelda: Breath of the Wild",
      "Pokémon Legends: Arceus",
    ],
  },
  series: {
    verb: "watching",
    icon: "movie",
    items: ["Westworld", "Ben 10"],
  },
  books: {
    verb: "reading",
    icon: "book",
    items: [
      "Logically Fallacious",
      "Crafting Interpreters",
      "Category Theory for Programmers",
    ],
  },
};

export const games = [
  {
    id: "trackmania",
    name: "Trackmania",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202303/2020/096cc3084128fe458078a76d70785a23026a416d583ae5bb.jpg",
    comment: "This is my favorite game of all the time.",
  },
  {
    id: "detroit",
    name: "Detroit: Become Human",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBiZTAwYzQtZDkyMC00NjM4LWI5ODUtNWM3NGE3YjZjY2M1XkEyXkFqcGc@._V1_.jpg",
    comment: "Cool story with a lot of Androids going out of control.",
  },
  {
    id: "zelda",
    name: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/250px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    comment: "It's an addictive game, makes time go faster.",
  },
  {
    id: "pokemon",
    name: "Pokémon Legends: Arceus",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDQ3ZjQyNjMtYjI0Yi00MDQxLTk0MzQtZjBiYmY0MWYyY2UyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    comment: "Collecting Pokémons was never this fun :3",
  },
];

export const media_books = ["Flatland", "Logically Fallacious"];

export const websites = [
  {
    name: "eclock",
    description: "A boring stale normal clock, made with Elm.",
    link: "oebelus.github.io/eclock/",
  },
  {
    name: "pokemon or programming concept?",
    description: "An undertale themed mini-game.",
    link: "https://oebelus.github.io/poke-or-prog/",
  },
  {
    name: "Sudoku",
    description:
      "I used a sudoku API, but the solution to the grids is an algorithm I wrote.",
    link: "https://oebelus.github.io/sudoku-solver/",
  },
  {
    name: "Fractal-Mania",
    description: "Some read-only fractals, I love THREE.js",
    link: "https://oebelus.github.io/fractals-mania/",
  },
  {
    name: "Rubik's Cube",
    description: "A wonky-af Rubik's, written with the worst code ever.",
    link: "https://oebelus.github.io/rubik-s/",
  },
  {
    name: "3D Solar System",
    description:
      "One of the first code snippets I wrote, I had too much fun doing it (Wait for the website to load).",
    link: "https://oebelus.github.io/solarSystem/",
  },
  {
    name: "Platf2D",
    description: "A luck-based platformer game.",
    link: "https://oebelus.github.io/platf2d/",
  },
  {
    name: "Pong",
    description: "A pong game where you can either draw or lose.",
    link: "https://oebelus.github.io/pongTs/",
  },
  {
    name: "plan8arium",
    description: "3D rotating planets with their data and a gravity simulator.",
    link: "https://oebelus.github.io/plan8arium/",
  },
];
