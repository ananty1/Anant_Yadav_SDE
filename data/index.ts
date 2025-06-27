export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Build with clarity, empathy, and execution",
    description: "Long term.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1-mine.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time-zone fluid, deadline sharp",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Code Learn Iterate.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Engineer with a product mindset.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI Automation plateform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s execute Your Ideas into reality",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Flash Sale System (High-Concurrency)",
    des: "Designed to handle 1M+ users for limited stock items with zero overselling. Used Redis + RabbitMQ for queueing, real-time inventory sync, and anti-bot protection.",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ananty1/Flipzon-Flash-Sale.git",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    des: "Built using TMDB dataset and KNN clustering. Gives personalized movie suggestions based on content filtering techniques.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/ananty1/movie_recommendation_tmdb_dataset.git",
  },
  {
    id: 3,
    title: "HomeBlog – Blogging Platform",
    des: "Full-fledged blog app with auth, blog creation, and content editing using Quill editor. MERN stack powered.",
    img: "/p7.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://home-blog-blogger-feels-home-here.vercel.app/",
  },
  {
    id: 4,
    title: "HomeCart – E-commerce Platform",
    des: "End-to-end commercial e-commerce site with cart, checkout, and order tracking built using Django and Bootstrap. Built to understand real-world product flows.",
    img: "/p8.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://home-cart-with-cwh.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working alongside Anant during the AI assistant project felt like collaborating with someone who genuinely understands both the code and the product. He has this rare clarity — always asking, 'What exactly are we trying to solve here?' before jumping into execution. His ability to break down complex systems into manageable, logical flows is something every team needs.",
    name: "Peer Feedback",
    title: "During Internship at Diploy AI",
  },
  {
    quote:
      "Anant isn't just a developer — he thinks like a product builder. I’ve seen him take vague instructions and turn them into structured, working systems, whether it's setting up Dockerized environments or implementing OpenAI workflows. He's calm under pressure and doesn't chase trends — he goes deep, learns fast, and always delivers clean, scalable code.",
    name: "Mentor Insight",
    title: "From AI System Design Mentorship",
  },
  {
    quote:
      "When we were setting up the CI/CD pipeline for GCP, Anant took complete ownership of the backend deployment setup. Despite system-level memory issues and SSH headaches, he figured out an efficient, secure workflow. What stood out was not just technical skill — but patience, discipline, and an obsession with getting things right.",
    name: "Colleague Note",
    title: "While Deploying AI Platform on GCP",
  },
  {
    quote:
      "Anant’s presence in any team changes the energy. He’s not loud — but always composed, strategic, and reliable. I’ve seen him lead during sports events, take responsibility in coding teams, and maintain high output even under pressure. If you're building something that requires both tech depth and leadership maturity, you’ll want someone like him in the room.",
    name: "General Peer Review",
    title: "Blending Tech & Leadership",
  },
];



export const companies = [
  {
    id: 1,
    name: "React / Next.js",
    img: "/react.png", // You can combine logos or show separately
    nameImg: "/reactName.png",
  },
  {
    id: 2,
    name: "Open AI",
    img: "/openai.png",
    nameImg: "/openaiName.png",
  },
   {
    id: 3,
    name: "Google Cloud",
    img: "/gcp.jpg",
    nameImg: "/gcpName.png",
  },
 {
    id: 4,
    name: "MongoDB",
    img: "/mongo.png",
    nameImg: "/mongoName.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack + AI Developer",
    desc: "Building a GPT-4 chatbot platform with real-time workflows, deployed via Docker + GCP.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern",
    desc: "Revamped UI, integrated Razorpay, boosted load speed 3×, and optimized SEO.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Intern",
    desc: "Built a WebRTC video chat app with pubsub tracking and full deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI Intern",
    desc: "Developed OpenAI-based summarization APIs with FastAPI + visualization UI.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    title: "GitHub",
    link: "https://github.com/ananty1",
  },
  {
    id: 2,
    img: "/twit.svg",
    title: "Twitter",
    link: "https://twitter.com", // update this if you have one
  },
  {
    id: 3,
    img: "/link.svg",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/anant-2-yadav/",
  },
];
