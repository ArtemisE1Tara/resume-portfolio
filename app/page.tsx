'use client'
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Home() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex space-x-4 items-center mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/profile-2.jpg" alt="Ahmed Secen profile picture" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Ahmed Secen</h1>
          <p className="text-lg text-muted-foreground">University of Cincinnati</p>
          <div className="flex items-center space-x-2 pt-1">
            <a href="https://github.com/ArtemisE1Tara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-secen-b3ab4a234/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="text-left space-y-2">
        <h2 className="text-lg font-semibold">Engineering Student, Freelance CAD Designer</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I'm a motivated mechanical engineering student and community leader. I have experience in hardware design, 
          software development, and project management from design to manufacturing phase.
        </p>
      </div>

      <Separator />

      {/* Skills */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p><span style={{fontWeight: 'bold'}}>• Web Technologies:</span> NextJS, Convex, TypeScript, Prisma</p>
          <p><span style={{fontWeight: 'bold'}}>• CAD Design:</span> Fusion 360, Solidworks, AutoCAD</p>
          <p><span style={{fontWeight: 'bold'}}>• 3D Modeling:</span> Blender, Revit, SketchUp</p>
          <p>• Project management & technical writing</p>
        </div>
      </div>

      <Separator />

      {/* Education */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Education</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p><span style={{fontWeight: 'bold'}}>• University:</span> University of Cincinnati</p>
          <p><span style={{fontWeight: 'bold'}}>• Degree:</span> Mechanical Engineering, Bachelor of Science (BS)</p>
          <p><span style={{fontWeight: 'bold'}}>• Expected Graduation:</span> May 2030</p>
        </div>
      </div>

      <Separator />

      {/* Licenses & Certifications */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Licenses & Certifications</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            <span style={{fontWeight: 'bold'}}>• </span>
            <a 
              href="https://www.linkedin.com/learning/certificates/24269c475c07de9a28dfc2ac2ab3312ea5ec77025c848e9d699c9ff92969ca6d?u=2133849" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline"
            >
              SOLIDWORKS: Advanced Engineering Drawings
            </a>
          </p>
        </div>
      </div>

      <Separator />

      {/* Experience */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        <div className="space-y-4">
          {[
            { title: "Freelancer", company: "Upwork", period: "July 2025 - Present", desc: "Small to mid scale CAD models and technical drawings" },
            { title: "Sales Associate", company: "Kohl's", period: "July 2024 - July 2025", desc: "Streamlined Amazon return process, served customers at point of sale" },
            { title: "Engineering Teaching Assistant", company: "Carmel High School", period: "Aug 2024 - Jan 2025", desc: "Aided students with coursework, provided guidance for engineering studies" },
            { title: "Youth Mentor", company: "Bright Indy Youth Organization", period: "Aug 2024 - July 2025", desc: "Taught religious values and Arabic classes to elementary students" },
          ].map((job, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{job.title}</h4>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                {job.period && <span className="text-sm text-muted-foreground">{job.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Contact */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="flex space-x-3">
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="mailto:ahmedsecen2@gmail.com" target="_blank">Email</a>
          </Button>
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="https://www.linkedin.com/in/ahmed-secen-b3ab4a234/" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="https://github.com/ArtemisE1Tara" target="_blank">GitHub</a>
          </Button>
        </div>
      </div>

      <Separator />

      {/* Project Portfolio */}
      <div className="space-y-4">
        <button
          onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold">Project Portfolio</h3>
          <span className="text-sm text-muted-foreground">
            {isProjectsOpen ? '−' : '+'}
          </span>
        </button>
        
        {isProjectsOpen && (
          <div className="space-y-6 pl-4 border-l-2 border-muted">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-medium">HotSeat</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Team:</strong> OKAA Solutions (Kelly Fulk, Olivia Hart, Ahmed Secen, Abram Weller)</p>
                  <p><strong>Date:</strong> August 2024 - May 2025</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm mb-1">Problem Statement</h5>
                  <p className="text-sm text-muted-foreground">
                    Public establishments often lack sufficient seating for all users. The Carmel Library had 1,649 daily visitors in 2023, 
                    with 73% of surveyed students having difficulty finding adequate seating. Our project solves the problem of students 
                    searching for study spaces by providing real-time occupancy data.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-1">Solution</h5>
                  <p className="text-sm text-muted-foreground">
                    A discrete camera-based system that collects and displays occupancy data to help users determine optimal times 
                    to visit public spaces. The system detects up to 10 occupants from 15+ feet away with ±3 accuracy and responds 
                    to requests within one second.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-1">Technical Highlights</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• 3D-printed PETG housing (97×67×59mm, &lt;200g)</p>
                    <p>• Raspberry Pi-powered with camera module</p>
                    <p>• Wall-mounted system designed for 3+ year lifespan</p>
                    <p>• &lt;2 kWh monthly energy consumption</p>
                    <p>• Real-time web interface with instant WiFi updates</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Project Images</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <Image
                      src="/hot-seat.jpg"
                      alt="HotSeat Project Image 1"
                      width={300}
                      height={200}
                      className="rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setExpandedImage("/hot-seat.jpg")}
                    />
                    <Image
                      src="/spec-control.png"
                      alt="HotSeat Project Image 2"
                      width={300}
                      height={200}
                      className="rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setExpandedImage("/spec-control.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={expandedImage}
              alt="Expanded project image"
              width={800}
              height={600}
              className="rounded-lg object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
