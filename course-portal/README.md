# CS 101 Course Portal

A React + Bootstrap course information website inspired by [Stanford CS course pages](https://web.stanford.edu/class/cs224n/) (e.g. CS224N, CS231n).

## Features

- **Home** — Course overview, staff, logistics, and quick links
- **Schedule** — Week-by-week table with lecture materials, events, and deadlines (Stanford-style)
- **Lecture Slides** — Organized by week with PDF/PPTX downloads and video links
- **Assignments** — Programming assignments with due dates, starter code, and rubrics
- **Course Info** — Prerequisites, grading, policies, and reference texts

## Tech Stack

- React 19 + Vite
- React Router
- Bootstrap 5 + React Bootstrap
- Bootstrap Icons

## Getting Started

```bash
cd course-portal
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

Edit `src/data/courseData.js` to update:

- Course title, term, and description
- Staff and instructor info
- Weekly schedule entries
- Assignment details
- Lecture slide links

## Build for Production

```bash
npm run build
npm run preview
```

Output is in the `dist/` folder.
