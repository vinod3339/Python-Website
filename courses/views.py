from django.shortcuts import render


def get_course_data():
    return {
        "course_code": "23CS301",
        "course_name": "Problem Solving using Python",
        "semester": "ODD 2026",
        "last_updated": "July 2026",
        "highlights": [
            "Weekly lectures with downloadable slide decks",
            "Hands-on assignments with deadlines and grading rubric",
            "Clear grading policy and office hour schedule",
        ],
        "slides": [
            {
                "week": "Week 1",
                "topic": "Course Introduction and Syllabus",
                "file": "week-01-introduction.pdf",
            },
            {
                "week": "Week 2",
                "topic": "Python Fundamentals",
                "file": "week-02-python-fundamentals.pdf",
            },
            {
                "week": "Week 3",
                "topic": "Data Structures and Algorithms",
                "file": "week-03-data-structures.pdf",
            },
        ],
        "assignments": [
            {
                "title": "Assignment 1: Python Basics",
                "due": "July 20, 2026",
                "status": "Open",
            },
            {
                "title": "Assignment 2: Data Structures",
                "due": "August 03, 2026",
                "status": "Upcoming",
            },
            {
                "title": "Mini Project: Course Portal",
                "due": "August 17, 2026",
                "status": "Planned",
            },
        ],
        "instructor": "Mr. S. Vinod Kumar",
        "office_hours": "MON & FRI, 4:00 PM - 5:00 PM",
        "email": "vinodkumar.s@gmrit.edu.in",
    }


def home(request):
    return render(request, "courses/home.html", get_course_data())


def slides(request):
    return render(request, "courses/slides.html", get_course_data())


def assignments(request):
    return render(request, "courses/assignments.html", get_course_data())
