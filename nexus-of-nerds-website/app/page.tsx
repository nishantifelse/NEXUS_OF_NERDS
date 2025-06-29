"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, ExternalLink, Target, Eye, Mail, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NexusOfNerdsWebsite() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const themeClasses = darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
  const cardClasses = darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
  const sectionBgClasses = darkMode ? "bg-gray-900" : "bg-white"

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-sm bg-opacity-95 ${darkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Nexus of Nerds Logo" width={40} height={40} className="rounded" />
            <h1 className="text-xl font-bold">NEXUS OF NERDS</h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-green-500 hover:bg-green-500 hover:text-white"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <Image src="/logo.jpg" alt="Nexus of Nerds Logo" width={200} height={200} className="mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">NEXUS OF NERDS</h1>
          <p className="text-xl md:text-2xl text-green-400 mb-2 font-light tracking-wider">
            I N N O V A T E & C R E A T E
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to LEVEL UP your tech journey? Join Nexus of Nerds — where India's top student innovators, coders,
            designers & builders unite!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-500 text-black hover:bg-green-400 font-semibold px-8 py-3 border-2 border-green-500"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfikiu-si9bogAYe7tlxnuZvfeqLAVfOFB-3m43rxQ0tX4wxg/viewform?usp=header"
                target="_blank"
              >
                Join Now <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-green-300 mt-4 text-sm font-medium">Be a part of something big. Be a Nerd.</p>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 ${sectionBgClasses}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-500">ABOUT</span>
            </h2>
            <Card className={`${cardClasses} p-8 shadow-xl border-2 border-green-500/20`}>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Nexus of Nerds is a dynamic student-driven tech community formed to bridge the gap between passionate
                  learners and real-world opportunities. Born out of a shared struggle — the difficulty of finding
                  compatible team members for hackathons — we've grown into a collaborative space where innovation
                  thrives.
                </p>
                <p className="text-lg leading-relaxed">
                  In just two months, we've united 300+ tech enthusiasts from 15+ universities, connected by a strong
                  competitive spirit and a love for building, learning, and leading. Our core mission is to democratize
                  access to hackathons, mentorship, and tech culture — especially for students in tier-2, tier-3, and
                  rural colleges who are often left out of mainstream tech circuits.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-green-500 border-l-4 border-green-500 pl-4">
                  We're more than a community. We're a movement to level the tech playing field for every student with
                  potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card
              className={`${cardClasses} p-8 shadow-xl border-2 border-green-500/30 hover:border-green-500 transition-colors`}
            >
              <CardContent>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold">MISSION</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To build an inclusive tech community that empowers students across all regions with access to
                  hackathons, mentorship, and opportunities — turning passion into innovation.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`${cardClasses} p-8 shadow-xl border-2 border-green-500/30 hover:border-green-500 transition-colors`}
            >
              <CardContent>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold">VISION</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To be India's leading student tech network — igniting innovation through access, mentorship, and
                  collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Reach */}
      <section className={`py-16 ${sectionBgClasses}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-green-500">The Reach</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "300+", label: "REGISTRATIONS" },
              { number: "200+", label: "SHORTLISTED" },
              { number: "100+", label: "SPEAKERS, AMBASSADORS & TEAM" },
              { number: "50+", label: "UNIVERSITIES/COLLEGES CONNECTIONS" },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`${cardClasses} p-6 text-center shadow-lg border-2 border-green-500/20 hover:border-green-500 transition-all hover:scale-105`}
              >
                <CardContent>
                  <div className="text-3xl font-bold text-green-500 mb-2">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-green-500">What We Offer</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Hackathon & Event Alerts",
                description:
                  "Daily and early updates on the best hackathons, tech competitions, and events — with help in registration and team-building.",
              },
              {
                title: "Mentorship from Experts",
                description:
                  "Doubt sessions, guidance, and career talks by SDEs, rankers, IITians, Industry experts and startup mentors — to help you grow fast and smart.",
              },
              {
                title: "Pan-University Networking",
                description:
                  "A powerful network to connect with coders, creators, and innovators across India — for collaborations, team-ups, and more.",
              },
              {
                title: "Skill-Building Workshops",
                description:
                  "Hands-on learning through workshops, coding challenges, live sessions, and speaker panels to grow your technical and soft skills.",
              },
              {
                title: "Organizing Tech Events",
                description:
                  "We actively organize tech events, meetups, and competitions to foster a vibrant and inclusive tech ecosystem — driven by students, for students.",
              },
              {
                title: "Leadership & Recognition",
                description:
                  "Opportunities to become a campus ambassador, volunteer, or speaker — plus community rewards, merch, and a growing personal brand.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${cardClasses} p-6 shadow-lg border-2 border-green-500/20 hover:border-green-500 transition-all hover:scale-105`}
              >
                <CardContent>
                  <h3 className="text-lg font-semibold mb-3 text-green-500 border-b border-green-500/30 pb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className={`py-16 ${sectionBgClasses}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-green-500">Why Join?</span> (Perks & Benefits)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Stay ahead",
                description: "Get first access to top tech events, internships, and learning opportunities.",
              },
              {
                title: "Build your dream team",
                description: "Never go solo in a hackathon again; find the right teammates fast.",
              },
              {
                title: "Boost your skills",
                description: "With mentorship, workshops, and projects, you'll learn more than any textbook can offer.",
              },
              {
                title: "Grow your network",
                description: "Meet students, mentors, and leaders from 50+ colleges and counting.",
              },
              {
                title: "Stand out",
                description:
                  "Take up leadership roles, represent your college, earn recognition, and grab exclusive tech goodies!",
              },
              {
                title: "Learn, Build, & Grow",
                description: "Together",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${cardClasses} p-6 shadow-lg border-2 border-green-500/20 hover:border-green-500 transition-all`}
              >
                <CardContent>
                  <h3 className="text-lg font-semibold mb-3 text-green-500">• {item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-green-500">Our Mentors</span>
          </h2>
          <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
            At Nexus of Nerds, mentorship isn't just about solving coding doubts — it's about shaping careers. Our
            mentors include IITians, SDEs from top tech firms, competitive programmers, and startup founders who bring
            real-world experience to the table.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mr. Sourabh Kishor Tiwari",
                title: "Software Engineer III",
                company: "at Walmart Global Tech India",
                experience: "5+ Years Experience in tech profession",
                image: "/mentor1.png",
              },
              {
                name: "Mr. Satish Jangid",
                title: "Certified Innovation Ambassador",
                company: "President IIC VGU",
                experience: "Director ACIC-VGU Foundation",
                image: "/mentor2.png",
              },
              {
                name: "Ms. Khyati Sahu",
                title: "Associate Placement Coordinator IIT Bombay",
                company: "M. tech IITB",
                experience: "GATE (AG) AIR-26",
                image: "/mentor3.png",
              },
            ].map((mentor, index) => (
              <Card
                key={index}
                className={`${cardClasses} p-6 text-center shadow-xl border-2 border-green-500/20 hover:border-green-500 transition-all hover:scale-105`}
              >
                <CardContent>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{mentor.name}</h3>
                  <p className="text-green-500 font-medium mb-1">{mentor.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{mentor.company}</p>
                  <p className="text-sm text-gray-500">{mentor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 ${sectionBgClasses}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-green-500">CONTACT US</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card
              className={`${cardClasses} p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-green-500/20 hover:border-green-500`}
            >
              <CardContent>
                <Link href="https://www.linkedin.com/company/nexusofnerds" target="_blank" className="block">
                  <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">www.linkedin.com/company/nexusofnerds</p>
                </Link>
              </CardContent>
            </Card>

            <Card
              className={`${cardClasses} p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-green-500/20 hover:border-green-500`}
            >
              <CardContent>
                <Link href="https://www.instagram.com/nexus.ofnerds" target="_blank" className="block">
                  <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">www.instagram.com/nexus.ofnerds</p>
                </Link>
              </CardContent>
            </Card>

            <Card
              className={`${cardClasses} p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-green-500/20 hover:border-green-500`}
            >
              <CardContent>
                <Link href="mailto:communityhackathon54@gmail.com" className="block">
                  <Mail className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">communityhackathon54@gmail.com</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">This isn't just a community.</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            It's a movement to reimagine what tech culture can be when it's inclusive, decentralized, and driven by
            students.
          </p>
          <p className="text-2xl font-bold text-green-400 mb-8">Be part of India's smartest nerd squad.</p>
          <Button
            asChild
            size="lg"
            className="bg-green-500 text-black hover:bg-green-400 font-semibold px-8 py-3 border-2 border-green-500"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfikiu-si9bogAYe7tlxnuZvfeqLAVfOFB-3m43rxQ0tX4wxg/viewform?usp=header"
              target="_blank"
            >
              Registration now open <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-black text-white border-green-500/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Nexus of Nerds Logo" width={32} height={32} className="rounded" />
            <span className="font-bold text-xl">NEXUS OF NERDS</span>
          </div>
          <p className="text-sm text-green-400 mb-2 font-medium">INNOVATE & CREATE</p>
          <p className="text-xs text-gray-400">
            #NexusOfNerds #HackathonLife #TechCommunity #StudentStartups #LearnBuildGrow #jointhemovement
          </p>
        </div>
      </footer>
    </div>
  )
}
