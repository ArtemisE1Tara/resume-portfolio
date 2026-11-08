import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


export default function Home() {
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

        </div>
      </div>

      {/* Summary */}
      <div className="text-left space-y-2">
        <h2 className="text-lg font-semibold">Mechanical Engineering Student</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Hi! I'm a second year Mechanical Engineering student with experience in end-to-end product development. 
          I've led multiple projects from ideation to deliverable prototypes, while working in every aspect of the design process. 
          I am looking to work in the civil, automotive, energy, robotic, or aviation sectors.
          At SMC, I gained experience both in the design of pneumatic actuators and the manufacturing process by splitting my time there between the production floor and the engineering offices. 
          I used a global Solidworks PDM system to collaborate with other engineers to create and modify existing actuator designs and shipped new product numbers with Infor Syteline.
          At Kinetic Vision, I have used Abaqus and LSDyna finite element analysis solvers to create simulations for clients, mainly in the consumer food and packaging industry. 
        </p>
      </div>

      <Separator />

      {/* Contact */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="flex space-x-3">
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="mailto:secenah@mail.uc.edu" target="_blank">Email</a>
          </Button>
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="https://www.linkedin.com/in/ahmedsecen/" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild style={{backgroundColor: 'white'}}>
            <a href="/Ahmed_Secen_Resume_October_2026.pdf" download>Resume</a>
          </Button>
        </div>
      </div>

      <Separator />

      {/* Education */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Education</h3>
        <div className="text-base text-muted-foreground space-y-1">
          <p><span style={{fontWeight: 'bold'}}>• University:</span> University of Cincinnati</p>
          <p><span style={{fontWeight: 'bold'}}>• Degree:</span> Mechanical Engineering, Bachelor of Science (BS)</p>
          <p><span style={{fontWeight: 'bold'}}>• Expected Graduation:</span> May 2030</p>
          <p><span style={{fontWeight: 'bold'}}>• GPA:</span> 3.62/4.00</p>
          <p><span style={{fontWeight: 'bold'}}>• Relevant Coursework:</span> Engineering Design Thinking II, Engineering Applications II, Calculus II, Physics I</p>
        </div>
      </div>

      <Separator />

      {/* Experience */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        <ul className="space-y-4 list-none pl-0">
          {/* Kinetic Vision */}
          <li className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Simulation Engineering Co-op</h4>
                <p className="text-base text-muted-foreground">Kinetic Vision - Cincinnati, OH</p>
              </div>
              <span className="text-base text-muted-foreground">Aug 2026 - Present</span>
            </div>
            <ul className="text-base text-muted-foreground space-y-1.5 list-none pl-6">
              <li>• Creating finite element simulations of consumer products with LS-DYNA and Abaqus solvers.</li>
            </ul>
          </li>

          {/* SMC */}
          <li className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Actuator Engineering Intern</h4>
                <p className="text-base text-muted-foreground">SMC - Noblesville, IN</p>
              </div>
              <span className="text-base text-muted-foreground">May 2026 - Aug 2026</span>
            </div>
            <ul className="text-base text-muted-foreground space-y-1.5 list-none pl-6">
              <li>• Performed root cause analysis and repair of pneumatic cylinders across 10+ product lines, supporting product reliability and customer issue resolution.</li>
              <li>• Led the design of custom pneumatic actuators for customer-specific applications in SolidWorks, generating manufacturing drawings, BOMs, and cost estimates for production release.</li>
              <li>• Utilized SolidWorks PDM to manage CAD models, maintain revision control, and ensure documentation accuracy throughout the product lifecycle.</li>
              <li>• Generated and released 5+ new production part numbers in Aras Innovator PLM based on customer-driven design modifications and requirements.</li>
              <li>• Collaborated with lead engineers to standardize and migrate 500+ legacy part numbers using Infor SyteLine and Tacton, improving product data management efficiency.</li>
              <li>• Obtained Certified SolidWorks Associate (CSWA) certification.</li>
            </ul>
          </li>

          {/* Beltways - Affiliated */}
          <li className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">CAD Designer</h4>
                <p className="text-base text-muted-foreground">Beltways - Affiliated</p>
              </div>
              <span className="text-base text-muted-foreground">Oct 2025 - Nov 2025</span>
            </div>
            <ul className="text-base text-muted-foreground space-y-1.5 list-none pl-6">
              <li>• Used Autodesk Fusion 360 to model a prototype wind turbine system, focusing on structural integration and load distribution.</li>
              <li>• Designed and iterated on turbine components (blades, hub, housing) using parametric modeling to improve manufacturability and efficiency.</li>
              <li>• Generated detailed part and assembly drawings with dimensions, tolerances, and annotations for fabrication and review.</li>
            </ul>
          </li>
        </ul>
      </div>

      <Separator />

      {/* Projects */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        <ul className="space-y-4 list-none pl-0">
          <li className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Contentful.AI</h4>
                <p className="text-base text-muted-foreground">Next.js, React, Supabase, Clerk</p>
              </div>
              <span className="text-base text-muted-foreground">Jul 2024 - Sep 2025</span>
            </div>
            <ul className="text-base text-muted-foreground space-y-1.5 list-none pl-6">
              <li>• Built a full-stack web app to transform long-form articles into platform-optimized social media posts using integrated AI models.</li>
              <li>• Implemented Clerk OAuth for authentication and Supabase for user data management.</li>
            </ul>
          </li>

          <li className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">HotSeat</h4>
                <p className="text-base text-muted-foreground">Python, React, Raspberry Pi, 3D Printing</p>
              </div>
              <span className="text-base text-muted-foreground">Aug 2024 - May 2025</span>
            </div>
            <ul className="text-base text-muted-foreground space-y-1.5 list-none pl-6">
              <li>• Developed a real-time web interface with Raspberry Pi to display library occupancy with ±3 person accuracy via OpenAI Vision analysis.</li>
              <li>• Designed and 3D-printed wall-mounted circuit board and camera housing assemblies.</li>
            </ul>
          </li>
        </ul>
      </div>

      <Separator />

      {/* Skills */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="text-base text-muted-foreground space-y-1">
          <p><span style={{fontWeight: 'bold'}}>• Programming:</span> Python, TypeScript, MATLAB</p>
          <p><span style={{fontWeight: 'bold'}}>• CAD & Simulation:</span> HyperMesh, CATIA, Siemens NX, SolidWorks, Blender, Revit, Fusion 360, LS-DYNA, Abaqus</p>
          <p><span style={{fontWeight: 'bold'}}>• PLM & Data:</span> SolidWorks PDM, Aras Innovator, Infor SyteLine, Tacton</p>
        </div>
      </div>

      <Separator />

      {/* Licenses & Certifications */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Licenses & Certifications</h3>
        <div className="text-base text-muted-foreground space-y-1">
          <p><span style={{fontWeight: 'bold'}}>• </span>Certified SolidWorks Associate (CSWA)</p>
        </div>
        <div className="text-base text-muted-foreground space-y-1">
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
        <div className="text-base text-muted-foreground space-y-1">
          <p>
            <span style={{fontWeight: 'bold'}}>• </span>
            <a
              href="https://www.linkedin.com/learning/certificates/1529be885afe5ce3eba7d9a4b2a78e10eb0df837d7a249d9923851a50c5d77a8?u=2133849"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline"
            >
              Fusion 360: Design for Mechatronics
            </a>
          </p>
        </div>
      </div>

      <Separator />

      {/* Awards */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Awards</h3>
        <ul className="text-base text-muted-foreground space-y-3 list-none pl-0">
          <li className="space-y-1">
            <div className="flex justify-between items-start">
              <span className="font-medium">Dean’s List</span>
              <span>Fall 2025</span>
            </div>
            <p>University of Cincinnati</p>
          </li>
          <li className="space-y-1">
            <div className="flex justify-between items-start">
              <span className="font-medium">Design Competition Winner, Architectural Engineering Institute</span>
              <span>Oct. 2025</span>
            </div>
            <p>University of Cincinnati</p>
          </li>
          <li className="space-y-1">
            <div className="flex justify-between items-start">
              <span className="font-medium">HotSeat Project - Design Competition</span>
              <span>April 2025</span>
            </div>
            <p>University of Cincinnati - Team of 5</p>
          </li>
        </ul>
      </div>

      <Separator />
    </main>
  );
}
