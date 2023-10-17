import React from "react";
import { IoIosSchool } from "react-icons/io";
import webCertificate from "@/public/web-title.png";
import jsCertificate from "@/public/js-title.png";
import reactCertificate from "@/public/react-title.png";

export const experience = [
  {
    title: "Web Development",
    place: "CoderHouse",
    text: "I learned how to design, style, and structure responsive web pages and how to deploy them on the internet.",
    date: "February 2022 - April 2023",
    certificate: webCertificate,
  },
  {
    title: "JavaScript",
    place: "CoderHouse",
    text: "Here, I learned one of the most used languages in web development and got used to DOM manipulation, web APIs, asynchronous calls, and more.",
    date: "April 2022 - January 2023",
    certificate: jsCertificate,
  },
  {
    title: "React",
    place: "CoderHouse",
    text: "This course covered the basics, including state, hooks, and conditional rendering, and also delved into more advanced topics like state management packages.",
    date: "January 2022 - July 2023",
    certificate: reactCertificate,
  },
  {
    title: "Programming and System Technician",
    place: "Universidad Tecnológica Nacional",
    text: "I decided to gain a deeper understanding of programming fundamentals.",
    date: "2023 - Present",
    certificate: null,
  },
];
