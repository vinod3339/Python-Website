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
  Lists: {
    label: 'Lists',
    filename: 'Topic-11.pptx',
    url: `${baseUrl}materials/Slides/Topic-11.pptx`,
  },
  Tuples: {
    label: 'Tuples',
    filename: 'Topic-12.pptx',
    url: `${baseUrl}materials/Slides/Topic-12.pptx`,
  },
  Dictionaries: {
    label: 'Dictionaries',
    filename: 'Topic-13.pptx',
    url: `${baseUrl}materials/Slides/Topic-13.pptx`,
  },
  pythonLabTaskGitHubVSCode: {
    label: 'Python Lab Task: Git, GitHub & VS Code',
    filename: 'Python_Lab_Task_Git_GitHub_VSCode.pdf',
    url: `${baseUrl}materials/Assignments/Python_Lab_Task_Git_GitHub_VSCode.pdf`,
  },
  pythonsyllabus: {
    label: 'Python Syllabus',
    filename: 'Syllabus.pdf',
    url: `${baseUrl}materials/Assignments/Syllabus.pdf`,
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
  week3LabTask: {
    label: 'Week - 3 Lab Task',
    filename: 'Week - 3 Lab Task.pdf',
    url: `${baseUrl}materials/Assignments/Week - 3 Lab Task.pdf`,
  },
  listNotebook: {
    label: 'List',
    filename: 'List.ipynb',
    url: 'https://colab.research.google.com/github/vinod3339/Python-Website/blob/main/course-portal/public/materials/Jupyter%20Notebooks/List.ipynb',
  },
}

export const courseInfo = {
  code: '23CS301',
  title: 'Problem Solving using Python',
  term: 'ODD Semester 2026',
  institution: 'GMRIT Deemed to be University',
  description:
    'Python is one of the most popular and versatile programming languages in the world. This course provides thorough problem-solving skills using Python, covering fundamentals through data structures, control flow, functions, modular programming, and practical applications.',
  quote: {
    text: 'Take it. 23CS301 taught me how to think like a programmer and build real-world applications.',
    attribution: 'A 23CS301 student',
  },
  instructors: [
    { name: 'Mr. S. Vinod Kumar', role: 'Assistant Professor', email: 'vinodkumar.s@gmrit.edu.in' },
  ],
  logistics: {
    lectures: 'Monday (Lab), Tuesday / Wednesday / Thursday.',
    officeHours: 'Hybrid format — remote or in-person. See the schedule for times and locations.',
    videos: 'Recorded lectures available on course portal / LMS.',
    contact: 'For course-related questions, email vinodkumar.s@gmrit.edu.in.',
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
    entries: [
      {
        date: 'Aug 4',
        description: 'Think Like a Programmer & C vs Python Overview',
        materials: [
          {
            label: 'Topic 1 Slides',
            type: 'ppt',
            url: materials.thinkLikeProgrammer.url,
            download: materials.thinkLikeProgrammer.filename,
          },
          {
            label: 'Topic 2 Slides',
            type: 'ppt',
            url: materials.candpython.url,
            download: materials.candpython.filename,
          },
        ],
        events: [{ label: 'Course Orientation & Environment Setup', type: 'session' }],
        deadlines: [
          {
            label: 'PA 0: Git & GitHub Task released',
            type: 'assignment',
          },
        ],
      },
      {
        date: 'Aug 6',
        description: 'Identifiers, Statements, Variables, Keywords, Input/Output & Basic Syntax',
        materials: [
          {
            label: 'Topic 3 Slides',
            type: 'ppt',
            url: materials.identifiers.url,
            download: materials.identifiers.filename,
          },
          {
            label: 'Topic 4 Slides',
            type: 'ppt',
            url: materials.inputOutputStatements.url,
            download: materials.inputOutputStatements.filename,
          },
        ],
        events: [],
        deadlines: [
          {
            label: 'Week 1 Lab Task released',
            type: 'assignment',
          },
        ],
      },
    ],
  },
  {
    week: 2,
    entries: [
      {
        date: 'Aug 11',
        description: 'Data Types, Operators & Expressions',
        materials: [
          {
            label: 'Topic 5 Slides',
            type: 'ppt',
            url: materials.dataTypes.url,
            download: materials.dataTypes.filename,
          },
          {
            label: 'Topic 6 Slides',
            type: 'ppt',
            url: materials.operators.url,
            download: materials.operators.filename,
          },
          {
            label: 'Topic 7 Slides',
            type: 'ppt',
            url: materials.Expressions.url,
            download: materials.Expressions.filename,
          },
        ],
        events: [],
        deadlines: [
          {
            label: 'Week 2 Lab Task & Case Examples released',
            type: 'assignment',
          },
        ],
      },
    ],
  },
  {
    week: 3,
    entries: [
      {
        date: 'Aug 18',
        description: 'Control Flow (Conditionals) & Loops (Iteration)',
        materials: [
          {
            label: 'Topic 8 Slides',
            type: 'ppt',
            url: materials.controlFlow.url,
            download: materials.controlFlow.filename,
          },
          {
            label: 'Topic 9 Slides',
            type: 'ppt',
            url: materials.loops.url,
            download: materials.loops.filename,
          },
        ],
        events: [],
        deadlines: [
          {
            label: 'Week 3 Lab Task released',
            type: 'assignment',
          },
        ],
      },
    ],
  },
  {
    week: 4,
    entries: [
      {
        date: 'Aug 25',
        description: 'Built-in Functions, Modules & Data Structures (Lists, Tuples, Dictionaries)',
        materials: [
          {
            label: 'Topic 10 Slides',
            type: 'ppt',
            url: materials.builtInFunctions.url,
            download: materials.builtInFunctions.filename,
          },
          {
            label: 'Topic 11 Slides (Lists)',
            type: 'ppt',
            url: materials.Lists.url,
            download: materials.Lists.filename,
          },
          {
            label: 'Topic 12 Slides (Tuples)',
            type: 'ppt',
            url: materials.Tuples.url,
            download: materials.Tuples.filename,
          },
          {
            label: 'Topic 13 Slides (Dictionaries)',
            type: 'ppt',
            url: materials.Dictionaries.url,
            download: materials.Dictionaries.filename,
          },
          {
            label: 'List Notebook',
            type: 'colab',
            url: materials.listNotebook.url,
          },
        ],
        events: [],
        deadlines: [
          {
            label: 'Week 3 Lab Task due',
            type: 'assignment',
          },
        ],
      },
    ],
  },
]

export const assignments = [
  {
    id: 'pa0',
    number: 0,
    title: 'Environment Setup & Git / GitHub / VS Code',
    dueDate: 'Sat Aug 8, 11:59 PM',
    released: 'Tue Aug 4',
    points: 10,
    description:
      'Install Python & VS Code, set up Git & GitHub environment, and complete the setup exercises.',
    resources: [
      {
        label: 'Git & GitHub Setup Guide (PDF)',
        type: 'pdf',
        url: materials.pythonLabTaskGitHubVSCode.url,
        download: materials.pythonLabTaskGitHubVSCode.filename,
        icon: 'file-pdf',
      },
      {
        label: 'python Syllabus',
        type: 'pdf',
        url: materials.pythonsyllabus.url,
        download: materials.pythonsyllabus.filename,
        icon: 'file-pdf',
      },
    ],
    topics: ['Syllabus','Python installation', 'Git & GitHub', 'VS Code setup'],
  },
  {
    id: 'pa1',
    number: 1,
    title: 'Week 1 Lab Task: Fundamentals of Python',
    dueDate: 'Sat Aug 15, 11:59 PM',
    released: 'Thu Aug 6',
    points: 50,
    description:
      'Practice fundamental Python concepts including identifiers, variables, keywords, basic I/O operations, and command-line arguments.',
    resources: [
      {
        label: 'Week 1 Lab Task (PDF)',
        type: 'pdf',
        url: materials.week1LabTask.url,
        download: materials.week1LabTask.filename,
        icon: 'file-pdf',
      },
    ],
    topics: ['Identifiers', 'Variables', 'Keywords', 'Input/Output', 'Command-line arguments'],
  },
  {
    id: 'pa2',
    number: 2,
    title: 'Week 2 Lab Task: Data Types & Operators',
    dueDate: 'Sat Aug 22, 11:59 PM',
    released: 'Tue Aug 11',
    points: 50,
    description:
      'Explore built-in data types, arithmetic/logical/bitwise operators, and solve case-based problem scenarios.',
    resources: [
      {
        label: 'Week 2 Lab Task (PDF)',
        type: 'pdf',
        url: materials.week2LabTask.url,
        download: materials.week2LabTask.filename,
        icon: 'file-pdf',
      },
      {
        label: 'Case Based Examples (PDF)',
        type: 'pdf',
        url: materials.pythoncasebasedexamples.url,
        download: materials.pythoncasebasedexamples.filename,
        icon: 'file-pdf',
      },
    ],
    topics: ['Integers', 'Floats', 'Strings', 'Operators', 'Case-based exercises'],
  },
  {
    id: 'pa3',
    number: 3,
    title: 'Week 3 Lab Task: Conditionals & Loops',
    dueDate: 'Sat Aug 29, 11:59 PM',
    released: 'Tue Aug 18',
    points: 50,
    description:
      'Implement decision-making constructs (if-elif-else) and loop structures (for, while, break, continue) to solve structured problems.',
    resources: [
      {
        label: 'Week 3 Lab Task (PDF)',
        type: 'pdf',
        url: materials.week3LabTask.url,
        download: materials.week3LabTask.filename,
        icon: 'file-pdf',
      },
    ],
    topics: ['if statements', 'for loops', 'while loops', 'break and continue'],
  },
]

export const lectures = [
  {
    week: 1,
    title: 'Think Like a Programmer & C vs Python',
    date: 'Aug 4',
    slides: [
      { label: 'Topic 1: Think Like a Programmer (PPTX)', url: materials.thinkLikeProgrammer.url, format: 'pptx', download: materials.thinkLikeProgrammer.filename },
      { label: 'Topic 2: C and Python (PPTX)', url: materials.candpython.url, format: 'pptx', download: materials.candpython.filename },
    ],
    notes: [],
    video: null,
  },
  {
    week: 1,
    title: 'Identifiers, Statements, Variables, Keywords & I/O',
    date: 'Aug 6',
    slides: [
      { label: 'Topic 3: Identifiers & Keywords (PPTX)', url: materials.identifiers.url, format: 'pptx', download: materials.identifiers.filename },
      { label: 'Topic 4: Input/Output & Syntax (PPTX)', url: materials.inputOutputStatements.url, format: 'pptx', download: materials.inputOutputStatements.filename },
    ],
    notes: [],
    video: null,
  },
  {
    week: 2,
    title: 'Data Types, Operators & Expressions',
    date: 'Aug 11',
    slides: [
      { label: 'Topic 5: Data types (PPTX)', url: materials.dataTypes.url, format: 'pptx', download: materials.dataTypes.filename },
      { label: 'Topic 6: Operators (PPTX)', url: materials.operators.url, format: 'pptx', download: materials.operators.filename },
      { label: 'Topic 7: Expressions (PPTX)', url: materials.Expressions.url, format: 'pptx', download: materials.Expressions.filename },
    ],
    notes: [],
    video: null,
  },
  {
    week: 3,
    title: 'Control Flow & Loops',
    date: 'Aug 18',
    slides: [
      { label: 'Topic 8: Control Flow (PPTX)', url: materials.controlFlow.url, format: 'pptx', download: materials.controlFlow.filename },
      { label: 'Topic 9: Loops (PPTX)', url: materials.loops.url, format: 'pptx', download: materials.loops.filename },
    ],
    notes: [],
    video: null,
  },
  {
    week: 4,
    title: 'Built-in Functions, Lists, Tuples & Dictionaries',
    date: 'Aug 25',
    slides: [
      { label: 'Topic 10: Built-in Functions (PPTX)', url: materials.builtInFunctions.url, format: 'pptx', download: materials.builtInFunctions.filename },
      { label: 'Topic 11: Lists (PPTX)', url: materials.Lists.url, format: 'pptx', download: materials.Lists.filename },
      { label: 'Topic 12: Tuples (PPTX)', url: materials.Tuples.url, format: 'pptx', download: materials.Tuples.filename },
      { label: 'Topic 13: Dictionaries (PPTX)', url: materials.Dictionaries.url, format: 'pptx', download: materials.Dictionaries.filename },
      { label: 'List Jupyter Notebook', url: materials.listNotebook.url, format: 'colab' },
    ],
    notes: [],
    video: null,
  },
]
