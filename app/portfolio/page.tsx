'use client'

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const documentLinks = {
  buildAssembly: "/hotseat/20250424_EDD_BuildAssemblyInstruction_team5_v3.docx.pdf",
  criticalDesignReview: "/hotseat/20250424_EDD_Critical%20Design%20Review%20_team5_v1.pptx.pdf",
  designSpec: "/hotseat/20250424_EDD_Design%20Spec_team5_v8.docx.pdf",
  testReport: "/hotseat/20250424_EDD_test%20instruction%20and%20report_team5_v4.docx.pdf",
};

const requirementGroups = [
  {
    title: "Form",
    items: [
      "PETG 3D-printed housing",
      "Total hardware mass target ≤ 200 g",
      "Housing envelope target: 97±3 mm × 67±3 mm × 59±3 mm",
    ],
  },
  {
    title: "Function",
    items: [
      "Detect chair occupancy at 15 ft range",
      "Max response time target: 10,000 ms",
      "Detect at least 2 occupants with ±1 accuracy",
      "Powered by wired 5.1V, 5A supply",
    ],
  },
  {
    title: "Fit",
    items: [
      "Semi-permanent wall mounting via self-tapping screws",
      "Mounting system designed for 3+ year service life",
    ],
  },
];

const performanceHighlights = [
  "Operating range: 30–130°F at 0–50% humidity",
  "MTBF target: at least one week",
  "Sustainability target: <2 kWh/month energy use",
  "Maintainability: remote updates over WiFi and accessible hardware service",
  "Aesthetics: filleted rectangular housing and minimalist web interface",
  "Material constraints: non-toxic, UV-resistant, waterproof PETG",
];

const testResults = [
  "Range: passed at 18 ft against the 15 ft requirement",
  "Average response time: 5,346 ms (within the 10,000 ms requirement)",
  "Occupancy: accurately analyzed up to 3 chairs",
  "Power: stable operation on single 5.1V, 5A supply",
  "Mounting: passed 30-day mount test and simulated extended wear",
  "Environmental and manufacturability checks: all listed criteria marked PASS",
];

const partsList = [
  "5 mm × 2.5 mm circular magnets (8)",
  "PETG case and lid (97 × 68 × 53 mm body envelope)",
  "Raspberry Pi 5 (8GB)",
  "Raspberry Pi 5 Active Cooler",
  "Raspberry Pi Camera Module 3 NoIR (12MP)",
  "22-pin to 15-pin Raspberry Pi camera cable (200 mm)",
  "0.25 in thread-cutting self-tapping screws (8)",
  "USB-C wall power supply and USB cable",
];

const cdrSlides = [
  {
    title: "Team Organization",
    bullets: [
      "Project Manager: Kelly Fulk",
      "Systems Engineer: Olivia Hart",
      "Hardware Engineer: Abram Weller",
      "Software Engineer: Ahmed Secen",
    ],
  },
  {
    title: "System Architecture",
    bullets: [
      "Function block diagram defines sensing, processing, and UI flow",
      "Camera + Raspberry Pi pipeline drives occupancy analysis",
      "Design is optimized for library deployment and user clarity",
    ],
  },
  {
    title: "Technical Drawings",
    bullets: [
      "Mechanical drawings establish housing geometry and fit",
      "Assembly drawing defines component placement",
      "Specification control drawing aligns manufacturing constraints",
    ],
  },
  {
    title: "Electronics Design",
    bullets: [
      "Raspberry Pi 5 electrical schematic",
      "Camera Module 3 electrical schematic",
      "Wiring diagram and PCB layout reviewed",
    ],
  },
  {
    title: "Software Logic",
    bullets: [
      "Programming algorithm flowchart presented",
      "Detection request and response sequence documented",
      "Latency and occupancy outputs integrated with UI",
    ],
  },
  {
    title: "Bill of Materials",
    bullets: [
      "Semester two incremental BOM listed at $12.56",
      "Additions include threaded inserts and camera swivel joint",
      "Core system hardware specified separately in assembly docs",
    ],
  },
  {
    title: "Build and Assembly Record",
    bullets: [
      "Assembly record documented across review slides",
      "Mounting approach updated from PDR phase",
      "Case iterations tracked during hardware refinement",
    ],
  },
  {
    title: "Requirements Review",
    bullets: [
      "Form: PETG housing, dimensions, and mass targets",
      "Fit: semi-permanent mount and service life",
      "Function: range, latency, occupancy detection, and power",
    ],
  },
  {
    title: "Prototype Test Evaluation",
    bullets: [
      "Weight, housing, range, latency, and occupancy tests passed",
      "Operating temperature and lifetime checks passed",
      "Failure-rate and environmental criteria passed",
    ],
  },
  {
    title: "Demonstration",
    bullets: [
      "Live demonstrations presented in multiple scenes",
      "End-to-end occupancy workflow validated",
      "User-facing interaction kept simple and immediate",
    ],
  },
  {
    title: "Reflection",
    bullets: [
      "Mounting system streamlined from keyhole to screw approach",
      "Threaded insert mismatch required corrective iteration",
      "Housing redesign and document cross-references finalized",
    ],
  },
];

export default function PortfolioPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = useMemo(() => cdrSlides[activeSlide], [activeSlide]);

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge>Project Portfolio</Badge>
            <Badge variant="secondary">HotSeat</Badge>
          </div>
          <h1 className="text-3xl font-semibold">HotSeat — Full Project Documentation</h1>
          <p className="text-muted-foreground mt-2">
            Consolidated design, build, testing, and review artifacts from OKAA Solutions (Team 5).
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Summary</CardTitle>
          <CardDescription>From Design Spec (V8) and supporting documents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Public spaces such as libraries experience seating shortages; the Carmel Clay Public Library reported
            high demand with survey feedback indicating frequent difficulty finding seats. HotSeat addresses this by
            using a camera-based occupancy system to provide users with timely seat-availability information.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div><span className="font-medium text-foreground">Team:</span> OKAA Solutions (Kelly Fulk, Olivia Hart, Ahmed Secen, Abram Weller)</div>
            <div><span className="font-medium text-foreground">Program:</span> Engineering Design & Development, Carmel High School</div>
            <div><span className="font-medium text-foreground">Documentation Date:</span> April 24, 2025</div>
            <div><span className="font-medium text-foreground">Primary Platform:</span> Raspberry Pi + Camera Module + Web UI</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={documentLinks.designSpec} target="_blank" rel="noopener noreferrer">Design Spec (V8)</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={documentLinks.buildAssembly} target="_blank" rel="noopener noreferrer">Build & Assembly (V3)</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={documentLinks.testReport} target="_blank" rel="noopener noreferrer">Test Report (V4)</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={documentLinks.criticalDesignReview} target="_blank" rel="noopener noreferrer">Critical Design Review</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Image
          src="/hot-seat.jpg"
          alt="HotSeat hardware"
          width={700}
          height={450}
          className="rounded-xl border object-cover w-full h-full"
        />
        <Image
          src="/spec-control.png"
          alt="HotSeat specification control drawing"
          width={700}
          height={450}
          className="rounded-xl border object-cover w-full h-full"
        />
      </div>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Requirements and Performance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {requirementGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Performance Criteria Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {performanceHighlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Build and Assembly Documentation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Safety and Tooling</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Device is intended for adult installation and handling.</p>
              <p>• Avoid drill-based over-torque on casing screws to prevent breakage.</p>
              <p>• Keep water away from electrical components during installation and operation.</p>
              <p>• Required tools include screwdriver, ruler, scale, and a diagnostics-capable computer.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Parts List Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {partsList.map((part) => (
                  <li key={part}>• {part}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Testing and Validation</h2>
        <Card>
          <CardHeader>
            <CardTitle>Procedure Flow</CardTitle>
            <CardDescription>From Test Instruction & Report (V4)</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>1. Prepare stable test area with power and computer access.</p>
            <p>2. Install software, power the device, and place chairs in camera view.</p>
            <p>3. Run analysis from the UI and log outcomes against pass/fail criteria.</p>
            <p>4. Execute verification procedures across mechanical, electrical, software, and environmental criteria.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Reported Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {testResults.map((result) => (
                <li key={result}>• {result}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-2xl font-semibold">Critical Design Review Carousel</h2>
          <Button asChild size="sm" variant="outline">
            <a href={documentLinks.criticalDesignReview} target="_blank" rel="noopener noreferrer">Open Full CDR PDF</a>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{currentSlide.title}</CardTitle>
            <CardDescription>Slide {activeSlide + 1} of {cdrSlides.length}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {currentSlide.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? cdrSlides.length - 1 : prev - 1))}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % cdrSlides.length)}
                >
                  Next
                </Button>
              </div>
              <div className="flex gap-1">
                {cdrSlides.map((slide, idx) => (
                  <button
                    key={slide.title}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 w-2.5 rounded-full border ${idx === activeSlide ? "bg-foreground border-foreground" : "bg-muted border-border"}`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Referenced Standards and Sources</h2>
        <p className="text-sm text-muted-foreground">
          Documentation references include eCFR 40 CFR 761.20, ISO 10878:2013, ISO 18434-1:2008, Adafruit technical specifications,
          PETG material references, and related reliability/safety sources captured in each document’s references chapter.
        </p>
      </section>
    </main>
  );
}
