// Ensure correct base URL for assets. Fall back to '/course-portal/' when BASE_URL isn't set.
const baseUrl = import.meta.env.BASE_URL || '/course-portal/'

export const materials = {
  thinkLikeProgrammer: {
    label: 'Think Like a Programmer',
    filename: 'Topic-1.pptx',
    url: `${baseUrl}materials/Slides/Topic-1.pptx`,
  },
  candpython: {
    label: 'C and Python',
    filename: 'Topic-2.pptx',
    url: `${baseUrl}materials/Slides/Topic-2.pptx`,
  },
  identifiers: {
    label: 'Identifiers, Statements, Variables, and Keywords',
    filename: 'Topic-3.pptx',
    url: `${baseUrl}materials/Slides/Topic-3.pptx`,
  },
  inputOutputStatements: {
    label: 'Input/Output, Command Line Arguments, and Basic Syntax',
    filename: 'Topic-4.pptx',
    url: `${baseUrl}materials/Slides/Topic-4.pptx`,
  },
  dataTypes: {
    label: 'Data types',
    filename: 'Topic-5.pptx',
    url: `${baseUrl}materials/Slides/Topic-5.pptx`,
  },
  operators: {
    label: 'Operators',
    filename: 'Topic-6.pptx',
    url: `${baseUrl}materials/Slides/Topic-6.pptx`,
  },
  Expressions: {
    label: 'Expressions',
    filename: 'Topic-7.pptx',
    url: `${baseUrl}materials/Slides/Topic-7.pptx`,
  },
  controlFlow: {
    label: 'Control Flow',
    filename: 'Topic-8.pptx',
    url: `${baseUrl}materials/Slides/Topic-8.pptx`,
  },
  loops: {
    label: 'Loops',
    filename: 'Topic-9.pptx',
    url: `${baseUrl}materials/Slides/Topic-9.pptx`,
  },
  builtInFunctions: {
    label: 'Built-in Functions',
    filename: 'Topic-10.pptx',
    url: `${baseUrl}materials/Slides/Topic-10.pptx`,
  },
  pythonLabTaskGitHubVSCode: {
    label: 'Python Lab Task: Git, GitHub & VS Code',
    filename: 'Python_Lab_Task_Git_GitHub_VSCode.pdf',
    url: `${baseUrl}materials/Assignments/Python_Lab_Task_Git_GitHub_VSCode.pdf`,
  },
  week1LabTask: {
    label: 'Week - 1 Lab Task',
    filename: 'Week - 1 Lab Task.pdf',
    url: `${baseUrl}materials/Assignments/Week - 1 Lab Task.pdf`,
  },
  week2LabTask: {
    label: 'Week - 2 Lab Task',
    filename: 'Week - 2 Lab Task.pdf',
    url: `${baseUrl}materials/Assignments/Week - 2 Lab Task.pdf`, 
  },
  pythoncasebasedexamples: {
    label: 'Python Case Based Examples',
    filename: 'python_case_based_examples.pdf',
    url: `${baseUrl}materials/Assignments/python_case_based_examples.pdf`,
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
    date: 'Tue Jan 6',
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
    date: 'Tue Jan 13',
    description: 'C and Python',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.candpython.url,
        download: materials.candpython.filename,
      },
    ],
    events: [],
    deadlines: [{ label: 'PA 0 due', type: 'assignment' }],
  },
  {
    date: 'Tue Jan 20',
    description: 'Identifiers, Statements, Variables, and Keywords',
    materials: [
      { label : 'slides',
        type: 'ppt',
        url: materials.identifiers.url,
        download: materials.identifiers.filename,
      }
    ],
    events: [{ label: '1:30–2:50 PM, NVIDIA Auditorium', type: 'session' }],
    deadlines: [],
  },
  {
    date: 'Tue Jan 27',
    description: 'Input/Output, Command Line Arguments, and Basic Syntax',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.inputOutputStatements.url,
        download: materials.inputOutputStatements.filename,
      }
    ],
    events: [],
    deadlines: [],
  },
  {
    date: 'Aug 1',
    description: 'Data types',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.dataTypes.url,
        download: materials.dataTypes.filename,
      }
    ],
    events: [],
    deadlines: [],
  },
  {
    date: 'Aug 1',
    description: 'operators',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.operators.url,
        download: materials.operators.filename,
      }
    ],
    events: [],
    deadlines: [],
  },
  {
    date: 'Aug 1',
    description: 'Expressions',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.Expressions.url,
        download: materials.Expressions.filename,
      }
    ],
    events: [],
    deadlines: [],  
  },
  {
    date: 'Aug 1',
    description: 'Conditional statements',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.controlFlow.url,
        download: materials.controlFlow.filename,
      }
    ],
    events: [],
    deadlines: [],  
  },
  {
    date: 'Aug 1',
    description: 'Iteration statements',
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.loops.url,
        download: materials.loops.filename,
      }
    ],
    events: [],
    deadlines: [],  
  },
  {
    date: 'Aug 1',
    description: 'Built-in Functionsand Modules', 
    materials: [
      {
        label: 'slides',
        type: 'ppt',
        url: materials.builtInFunctions.url,
        download: materials.builtInFunctions.filename,
      }
    ],
    events: [],
    deadlines: [],  
  },
]

export const assignments = [
  {
    id: 'pa0',
    number: 0,
    title: 'Environment Setup & Hello World',
    dueDate: 'Thu Jul 22, 5:00 PM',
    released: 'Tue Jul 14',
    points: 10,
    description:
      'Install Python, set up your development environment, and write your first program. Submit a screenshot of your terminal running a "Hello, World!" script.',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Setup Guide', 
        type: 'pdf',
        url: materials.pythonLabTaskGitHubVSCode.url,
        download: materials.pythonLabTaskGitHubVSCode.filename,
        icon: 'file-pdf' },
    ],
    topics: ['Python installation', 'IDE setup', 'Basic syntax'],
  },
  {
    id: 'pa1',
    number: 1,
    title: 'Fundamentals of Python',
    dueDate: 'Tue Jul 28, 12:00 PM',
    released: 'Tue Jan 24',
    points: 70,
    description:
      'Python Fundametals',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Week 1 Lab Task (PDF)', 
        type: 'pdf',
        url: materials.week1LabTask.url,
        download: materials.week1LabTask.filename,
        icon: 'file-pdf' },
    ],
    topics: ['Identifiers', 'statements', 'variables', 'keywords',  'input/output', 'command line arguments'],
  },
  {
    id: 'pa2',
    number: 2,
    title: 'Data types and Operators',
    dueDate: 'Sat Aug 1, 12:00 PM',
    released: 'Tue Aug 3',
    points: 50,
    description:
      'Data types and Operators',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      { label: 'Week 2 Lab Task (PDF)', 
        type: 'pdf',
        url: materials.week2LabTask.url,
        download: materials.week2LabTask.filename,
        icon: 'file-pdf' },
        { label: 'Python Case Based Examples (PDF)',
        type: 'pdf',
        url: materials.pythoncasebasedexamples.url,
        download: materials.pythoncasebasedexamples.filename,
        icon: 'file-pdf' },
    ],
    topics: ['integers', 'floats', 'strings', 'lists', 'tuples', 'dictionaries', 'operators'],
  },
  {
    id: 'pa3',
    number: 3,
    title: 'Object Oriented Programming',
    dueDate: 'Sat Aug 1, 12:00 PM',
    released: 'Tue Aug 3',
    points: 50,
    description:
      'Object Oriented Programming',
    resources: [
      { label: 'Starter Code', url: '#', icon: 'code-slash' },
      
    ],
    topics: ['integers', 'floats', 'strings', 'lists', 'tuples', 'dictionaries', 'operators'],
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
      { label: 'Intro Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Intro Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 1,
    title: 'Variables, Data Types & Basic Operations',
    date: 'Thu Jan 8',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 2,
    title: 'Conditionals, Loops & Iteration',
    date: 'Tue Jan 13',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 2,
    title: 'Functions & Scope',
    date: 'Thu Jan 15',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 3,
    title: 'Lists, Tuples & Dictionaries',
    date: 'Tue Jan 20',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 3,
    title: 'Strings & File I/O',
    date: 'Thu Jan 22',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [],
    video: null,
  },
  {
    week: 4,
    title: 'Classes & Objects',
    date: 'Tue Jan 27',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 4,
    title: 'Inheritance & Polymorphism',
    date: 'Thu Jan 29',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [],
    video: null,
  },
  {
    week: 5,
    title: 'Error Handling & Testing',
    date: 'Tue Feb 3',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
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
  },
  {
    week: 5,
    title: 'Modules & Packages',
    date: 'Thu Feb 5',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 6,
    title: 'NumPy & Array Operations',
    date: 'Tue Feb 10',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Colab Notebook', url: null, format: 'colab' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 6,
    title: 'Pandas & Data Analysis',
    date: 'Thu Feb 12',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [],
    video: null,
  },
  {
    week: 7,
    title: 'Data Visualization with Matplotlib',
    date: 'Tue Feb 17',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 7,
    title: 'Working with APIs & JSON',
    date: 'Thu Feb 19',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [],
    video: null,
  },
  {
    week: 8,
    title: 'Web Basics with Flask',
    date: 'Tue Feb 24',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Slides (PPTX)', url: null, format: 'pptx' },
    ],
    notes: [{ label: 'Lecture Notes', url: null }],
    video: null,
  },
  {
    week: 8,
    title: 'Final Project Overview',
    date: 'Thu Feb 26',
    slides: [
      { label: 'Slides (PDF)', url: null, format: 'pdf' },
      { label: 'Project Handout', url: null, format: 'doc' },
    ],
    notes: [],
    video: null,
  },
]
