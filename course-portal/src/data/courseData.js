const baseUrl = import.meta.env.BASE_URL

export const materials = {
  thinkLikeProgrammer: {
    label: 'Think Like a Programmer',
    filename: 'think-like-a-programmer.pptx',
    url: `${baseUrl}materials/think-like-a-programmer.pptx`,
  },
  CandPython: {
    label: 'C and Python',
    filename: 'c-and-python.pptx',
    url: `${baseUrl}materials/c-and-python.pptx`,
  },
}

export const courseInfo = {
  code: '23CS301',
  title: 'Problem Solving using Python',
  term: 'ODD Semester 2026',
  institution: 'GMRIT Deemed to be University',
  description:
    'Python is one of the most popular and versatile programming languages in the world. This course provides a thorough Problem Solving using Python, covering fundamentals through advanced topics including data structures, object-oriented programming, and practical applications in data science and web development.',
  quote: {
    text: 'Take it. 23CS301 taught me how to think like a programmer and build real-world applications.',
    attribution: 'A 23CS301 student',
  },
  instructors: [
    { name: 'Mr. S. Vinod Kumar', role: 'Assistant Professor', email: 'vinodkumar.s@gmrit.edu.in' },
  ],
  
  logistics: {
    lectures: 'Monday(Lab), Tuesday/Wednesday/Thursday.',
    officeHours: 'Hybrid format — remote (Zoom) or in person. See the schedule for times and locations.',
    contact:
      'Ask course-related questions, email vinodkumar.s@gmrit.edu.in.',
  },
  prerequisites: [
    'Introduction to C Programming',
    'Basic familiarity with using a computer',
    'Willingness to practice coding regularly',
  ],
  grading: [
    { component: 'Midterm Exam-1', weight: '40 Marks' },
    { component: 'Midterm Exam-2', weight: '40 Marks' },
    { component: 'Lab Internal Exam', weight: '10 Marks' },
    { component: 'Lab External Exam', weight: '20 Marks' },
    { component: 'Semester Exam', weight: '70 Marks' },

  ],
  
  textbooks: [
    { title: 'Python Crash Course', author: 'Eric Matthes', note: 'Recommended, not required' },
    { title: 'Automate the Boring Stuff with Python', author: 'Al Sweigart', note: 'Free online' },
    { title: 'Think Python', author: 'Allen B. Downey', note: 'Free online' },
  ],
}

export const schedule = [
  {
    week: 1,
    date: 'Tue Jul 16',
    description: 'Think Like a Programmer',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.thinkLikeProgrammer.url,
        download: materials.thinkLikeProgrammer.filename,
      },
    ],
    events: [],
    deadlines: [],
  },
  {
    date: 'Thu Jan 23',
    description: 'C and Python',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.CandPython.url,
        download: materials.CandPython.filename,
      },
    ],
    events: [],
    deadlines: [{ label: 'PA 0 due', type: 'assignment' }],
  },
  {
    date: 'Fri Jan 9',
    description: 'Python Environment Review Session',
    materials: [
      { label: 'colab', type: 'colab', url: '#' },
    ],
    events: [{ label: '1:30–2:50 PM, NVIDIA Auditorium', type: 'session' }],
    deadlines: [],
  },
]

export const assignments = [
  {
    id: 'pa0',
    number: 0,
    title: 'Environment Setup & Hello World',
    dueDate: 'Thu Jan 8, 5:00 PM',
    released: 'Tue Jan 6',
    points: 10,
    description:
      'Install Python, set up your development environment, and write your first program. Submit a screenshot of your terminal running a "Hello, World!" script.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Setup Guide', url: '#', icon: 'book' },
    ],
    topics: ['Python installation', 'IDE setup', 'Basic syntax'],
  },
  {
    id: 'pa1',
    number: 1,
    title: 'Control Flow & Functions',
    dueDate: 'Tue Jan 20, 5:00 PM',
    released: 'Tue Jan 13',
    points: 100,
    description:
      'Implement a number guessing game and a function library for common mathematical operations. Practice using conditionals, loops, and writing reusable functions.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Handout (PDF)', url: '#', icon: 'file-pdf' },
    ],
    topics: ['if/else', 'for/while loops', 'functions', 'scope'],
  },
  {
    id: 'pa2',
    number: 2,
    title: 'Data Structures',
    dueDate: 'Thu Jan 29, 5:00 PM',
    released: 'Thu Jan 22',
    points: 100,
    description:
      'Build a text analyzer that processes files and computes word frequencies, and implement a simple contact book using dictionaries.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Handout (PDF)', url: '#', icon: 'file-pdf' },
      { label: 'Test Data', url: '#', icon: 'folder' },
    ],
    topics: ['lists', 'dictionaries', 'file I/O', 'string methods'],
  },
  {
    id: 'pa3',
    number: 3,
    title: 'Object-Oriented Programming',
    dueDate: 'Tue Feb 10, 5:00 PM',
    released: 'Fri Jan 30',
    points: 100,
    description:
      'Design a class hierarchy for a library management system. Implement Book, Member, and Library classes with appropriate methods and inheritance.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Handout (PDF)', url: '#', icon: 'file-pdf' },
      { label: 'UML Diagram', url: '#', icon: 'diagram-3' },
    ],
    topics: ['classes', 'inheritance', '__init__', 'methods'],
  },
  {
    id: 'pa4',
    number: 4,
    title: 'Data Analysis with Pandas',
    dueDate: 'Tue Feb 24, 5:00 PM',
    released: 'Tue Feb 17',
    points: 100,
    description:
      'Analyze a real-world dataset using Pandas and Matplotlib. Create visualizations and write a short report summarizing your findings.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Dataset (CSV)', url: '#', icon: 'table' },
      { label: 'Colab Notebook', url: '#', icon: 'cloud' },
    ],
    topics: ['Pandas', 'Matplotlib', 'data cleaning', 'visualization'],
  },
  {
    id: 'project',
    number: 'Final',
    title: 'Capstone Project',
    dueDate: 'Fri Mar 13, 5:00 PM',
    released: 'Thu Feb 26',
    points: 200,
    description:
      'Build a complete Python application of your choice. Options include a web app, data analysis tool, game, or automation script. Present your project at the demo day.',
    resources: [
      { label: 'Project Guidelines', url: '#', icon: 'book' },
      { label: 'Proposal Template', url: '#', icon: 'file-earmark-text' },
      { label: 'Rubric', url: '#', icon: 'list-check' },
    ],
    topics: ['Full application', 'documentation', 'presentation'],
  },
]

export const lectures = [
  {
    week: 1,
    title: 'Course Introduction & Python Setup',
    date: 'Tue Jan 6',
    slides: [
      { label: 'Intro Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Intro Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: null,
  },
  {
    week: 1,
    title: 'Variables, Data Types & Basic Operations',
    date: 'Thu Jan 8',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 2,
    title: 'Conditionals, Loops & Iteration',
    date: 'Tue Jan 13',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 2,
    title: 'Functions & Scope',
    date: 'Thu Jan 15',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 3,
    title: 'Lists, Tuples & Dictionaries',
    date: 'Tue Jan 20',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 3,
    title: 'Strings & File I/O',
    date: 'Thu Jan 22',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [],
    video: '#',
  },
  {
    week: 4,
    title: 'Classes & Objects',
    date: 'Tue Jan 27',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 4,
    title: 'Inheritance & Polymorphism',
    date: 'Thu Jan 29',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [],
    video: '#',
  },
  {
    week: 5,
    title: 'Error Handling & Testing',
    date: 'Tue Feb 3',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 5,
    title: 'Modules & Packages',
    date: 'Thu Feb 5',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 6,
    title: 'NumPy & Array Operations',
    date: 'Tue Feb 10',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Colab Notebook', url: '#', format: 'colab' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 6,
    title: 'Pandas & Data Analysis',
    date: 'Thu Feb 12',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [],
    video: '#',
  },
  {
    week: 7,
    title: 'Data Visualization with Matplotlib',
    date: 'Tue Feb 17',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 7,
    title: 'Working with APIs & JSON',
    date: 'Thu Feb 19',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [],
    video: '#',
  },
  {
    week: 8,
    title: 'Web Basics with Flask',
    date: 'Tue Feb 24',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Slides (PPTX)', url: '#', format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: '#' }],
    video: '#',
  },
  {
    week: 8,
    title: 'Final Project Overview',
    date: 'Thu Feb 26',
    slides: [
      { label: 'Slides (PDF)', url: '#', format: 'pdf' },
      { label: 'Project Handout', url: '#', format: 'doc' },
    ],
    notes: [],
    video: '#',
  },
]
