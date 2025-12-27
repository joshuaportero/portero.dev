"use client";
import Link from "next/link";

const projects = [
  {
    name: "portero/nexus",
    url: "https://github.com/joshuaportero/nexus",
    description:
      "A Spring Boot microservices backend that powers the Helium e-commerce platform, providing secure and scalable RESTful APIs for product, order, and user management.",
  },
  {
    name: "portero/helium",
    url: "https://github.com/joshuaportero/helium",
    description:
      "A modern, responsive frontend for the Nexus platform built with Next.js, offering intuitive interfaces for managing e-commerce products, inventory, and user workflows.",
  },
  {
    name: "portero/amazon-job-scraper",
    url: "https://github.com/joshuaportero/amazon-job-scraper",
    description:
      "A command-line Java utility that automates job scraping from Amazon's career site to assist in targeted job discovery.",
  },
  {
    name: "portero/java-reflection-test",
    url: "https://github.com/joshuaportero/java-reflection-test",
    description:
      "A simple Java project demonstrating the use of reflection to dynamically invoke methods and access fields, showcasing the power and flexibility of Java's reflection API.",
  },
  {
    name: "portero/spring-boot-microservices-template",
    url: "https://github.com/joshuaportero/spring-boot-microservices-template",
    description:
      "A template project for building Spring Boot microservices, featuring essential configurations and best practices for rapid development.",
  },
  {
    name: "axieum/authme",
    url: "https://github.com/axieum/authme",
    description:
      "A convenience-focused Minecraft mod that simplifies the process of managing multiple game accounts from within the client.",
  },
];

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    fetch("/api/track", { method: "POST" }).catch(() => {});
  }, []);
  return (
    <main className="min-h-screen bg-whitetransition-colors">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <header className="flex items-start justify-between">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">
              Joshua Portero
            </h1>
            <div className="space-y-4">
              <p className="text-gray-600">
                Hello! I&apos;m <strong>Josh</strong>!, a Computer Science
                student graduating in <strong>May 2026</strong>.
              </p>
              <p className="text-gray-600 space-x-2">
                I love working with code. Whether it&apos;s building apps,
                automating tasks, or exploring new tech, I&apos;m always excited
                to learn and create.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Projects</h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="group">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-900 font-mono text-sm group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {project.description}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-x-6">
              <Link
                href="mailto:joshua@portero.dev"
                className="text-gray-900 font-mono text-sm hover:text-blue-600 transition-colors"
              >
                Email
              </Link>
              <Link
                href="https://github.com/joshuaportero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/joshua-portero/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </Link>
            </div>
            <p className="text-gray-500 text-sm text-center sm:text-right">
              © 2025 Joshua Portero. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
