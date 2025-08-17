import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
      image: "assets/img/portfolio.png",
      github: "https://github.com/adityathakur-cse",
      view: "",
      status: false,
      date: "August - 2025",
      demo: false,
      personal: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        // {
        //   name: "Flowbite",
        //   image: "assets/img/flowbite.svg",
        // },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Figma",
          image: "assets/img/figma.svg",
        },
      ]
    },
    {
      name: "HabitBuddy",
      description: "HabitBuddy is your daily habit companion for building consistency and smashing your goals. With visual streak tracking (inspired by GitHub’s contribution graphs), a streak graphs, calendars, reminders, focus sessions, and a distraction blocker.",
      image: "assets/img/habitbuddy.png",
      github: "https://github.com/adityathakur-cse/HabitBuddy",
      view: false,
      status: false,
      date: "April - 2025",
      demo: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Mysql",
          image: "assets/img/mysql.svg",
        },
        {
          name: "JS",
          image: "assets/img/js.svg",
        },
        {
          name: "PHP",
          image: "assets/img/php.svg",
        }
      ]
    },
    {
      name: "Chat-Bot",
      description: "Mental-Health-Chatbot is an empathetic AI companion that supports users’ emotional well-being through natural language conversations, offering accessible mental health support with modern tools and techniques.",
      image: "assets/img/chatbot.png",
      github: "https://github.com/adityathakur-cse/Mental-Health-Chatbot",
      view: "https://mental-health-chatbot-murex.vercel.app/",
      status: false,
      date: "February - 2025",
      demo: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
      ]
    },
    {
      name: "Carmania",
      description: "Car Mania is a car rental platform that makes exploring easy and hassle free. With top deals on popular models, transparent pricing, and features like 360° views and reviews, it ensures a smooth and enjoyable rental experience.",
      image: "assets/img/carmania.png",
      github: "https://github.com/adityathakur-cse/Carmania",
      view: "https://carmania-ashy.vercel.app",
      status: false,
      date: "Nov - 2023",
      demo: false,
      personal: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
      ]
    },
    {
      name: "Vaishali",
      description: "Vaishali Store is a modern UI based e-commerce platform offering a sleek, user-friendly shopping experience with fast navigation and a clean, responsive design.",
      image: "assets/img/vaishali.png",
      github: "https://github.com/adityathakur-cse/vaishali",
      view: "https://vaishalistore.vercel.app",
      status: true,
      date: "March - 2024",
      demo: false,
      personal: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
      ]
    }
  ]
}
