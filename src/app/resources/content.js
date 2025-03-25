import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Varun K",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Hindi", "Malayalam", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Varunkkumar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/varun-k-kumar2004/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:varunkausal2004@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Varun K Kumar</>,
  subline: (
    <>
      I'm Varun, a passionate student from <InlineCode>Chennai</InlineCode>,
      where I contribute to the field of electronics and communication through
      continuous learning and practical application of emerging technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a 3rd-year B.E. Electronics and Communication Engineering student
        at Velammal Engineering College, passionate about embedded systems, IoT,
        and automation. I have developed Arduino-based projects, including a
        Water Level Indicator and a Voice-Controlled Vehicle, showcasing my
        hands-on skills in sensor technology and IoT integration. I also
        presented a research paper at the National IEEE Conference,
        demonstrating my technical expertise and communication abilities.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Chennai International Airport",
        // timeframe: "2022 - Present",
        role: "Intern",
        achievements: [
          <>
            As an intern at Chennai International Airport Authority Office
            (CIAAO), I gained hands-on experience in flight coordination, ground
            handling, security systems, and server room operations, enhancing my
            knowledge of aviation security and operational efficiency
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Chennai Metro Rail Limited",
        // timeframe: "2018 - 2022",
        role: "Internship Trainee",
        achievements: [
          <>
            During my training at Chennai Metro Rail Limited (CMRL), I gained
            hands-on knowledge of metro signalling systems, safety protocols,
            and advanced train control technologies, enhancing my understanding
            of automation and control in metro networks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Velammal Engineering College",
        description: <>Bachelor of Engineering</>,
      },
      {
        name: "Velammal Vidyalaya",
        description: <>Higher Secondary Education</>,
      },
      {
        name: "Maharishi Vidya Mandir",
        description: <>Secondary Education</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "React JS",
        description: (
          <>Proficient in modern react development.</>
        ),
        images: [
        ],
      },
      {
        title: "Object Oriented Programming",
        description: (
          <>Comfortable with OOPs concepts with programming languages like JAVA and C.</>
        ),
        images: [
        ],
      },
      {
        title: "Arduino",
        description: (
          <>Made multiple projects with Arduino using Sensors and Bluetooth.</>
        ),
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
