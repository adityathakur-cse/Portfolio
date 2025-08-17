import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dialog: MatDialog) { }

  openPopup(companyId: any): void {
    console.log(companyId);
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {

      width: '80%',
      maxWidth: '1200px',
      data: companyId
    });
  }


  // Array of data
  aboutme: string = `I’m a Computer Science student passionate about building scalable and responsive full-stack applications. I work primarily with the MERN stack, integrating tools like Tailwind CSS, JWT auth, and third-party APIs to deliver clean and performant solutions.
  My key project, HabitBuddy, features daily streak tracking, Calendar sync, and reminder scheduling.
I’m constantly exploring new technologies and best practices to sharpen my skills and build software that solves real problems.`;

  work: Array<any> = [
      {
        id: 1,
        company: "Nari Shakti Jagran Samiti (NGO)",
        position: "Teacher",
        time_period: "June 2024 - August 2024",
        place: "Jalandhar, Punjab, India",
        overview: "Nari Shakti Jagran Samiti is a community-focused NGO that supports underprivileged children and women through education and skill-development initiatives.",
        my_role: "Taught Science, Mathematics, and Computer Fundamentals to school-aged children; prepared activity-based lesson plans and worksheets; conducted basic digital literacy sessions (typing, MS Office basics, internet safety); offered one-on-one mentoring and coordinated with NGO staff for student progress.",
        impact: "Improved student understanding through regular practice sessions and simple assessments; created reusable lesson materials for future volunteers; organized a small showcase of student projects to encourage confidence and curiosity.",
      projects: [
        {
          // name: "",
          link: '#',
          image: "assets/img/ngo.jpg",
        },
      ],
      tech: [
  {
    name: "MS Word",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019–present%29.svg"
  },
  {
    name: "MS Excel",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
  },
  {
    name: "MS PowerPoint",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019–present%29.svg"
  },
  {
    name: "Paint",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Microsoft_Paint.svg"
  },
  {
    name: "Notepad",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Notepad_Win11.svg"
  },
  {
    name: "Vedic Maths",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Math.svg"
  },
  {
    name: "Computer Basics (CPU & Components)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Computer.svg"
  }
]

    }
  ]

  education: Array<any> = [
    {
      studied_at: "Lovely Professional University",
      qualified: "Bachelor of Technology",
      time_period: "2023 - Present",
      place: "Jalandhar, Punjab, India",
    },
    {
      studied_at: "Jusco School South Park",
      qualified: "Intermediate",
      time_period: "2021 - 2023",
      place: "Jamshedpur, Jharkhand, India",
    }
  ]
}
