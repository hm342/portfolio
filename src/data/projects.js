export const selectedProjects = [
  {
    id: "ma-engineering",
    index: "01",
    title: "M.A. Engineering Industries",
    category: "Commercial Web Platform / Industrial Engineering",
    type: "Web Development",
    year: "2024",
    status: "Delivered",
    summary:
      "A tailored commercial web presence engineered for an industrial manufacturing business, highlighting product cataloging, technical specifications, and enterprise client inquiries.",
    details:
      "Engineered with a responsive, high-clarity layout to present precision manufacturing capabilities, machine inventories, and client RFQ workflows with fast loading times and intuitive navigation.",
    technologies: ["PHP", "JavaScript", "HTML5", "Modern CSS", "MySQL"],
    deliverables: [
      "Custom responsive corporate interface",
      "Dynamic product specification showcase",
      "Inquiry and quotation communication system",
      "Optimized cross-browser performance"
    ],
    accentColor: "#d4af37",
    linkText: "Explore Architecture",
    mockupType: "desktop",
    previewAspect: "Industrial Engineering Website"
  },
  {
    id: "universal-exports",
    index: "02",
    title: "Universal Exports",
    category: "Global Trade Platform / Enterprise Web System",
    type: "Platform Development",
    year: "2024",
    status: "Delivered",
    summary:
      "A business platform built for an international trade and export enterprise, structuring multi-category product indices, logistics credentials, and international business queries.",
    details:
      "Focused on structured information hierarchy, brand authority, and seamless exploration of international export compliance standards, product catalogs, and partnership channels.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "CSS3"],
    deliverables: [
      "Enterprise trade catalog architecture",
      "International client contact & RFQ pipeline",
      "Structured product data management",
      "High-contrast editorial typography"
    ],
    accentColor: "#e5c158",
    linkText: "View Case Study",
    mockupType: "desktop",
    previewAspect: "Trade & Export Platform"
  },
  {
    id: "simplifyte",
    index: "03",
    title: "Simplifyte",
    category: "Mobile Application / Digital Product",
    type: "Mobile Engineering",
    year: "2024",
    status: "Active Project",
    summary:
      "A streamlined mobile application designed to simplify daily workflows and digital task execution through a minimalist, gesture-driven touch interface.",
    details:
      "Developed with modern mobile design principles, prioritizing immediate tactile feedback, lightweight state synchronization, and clean visual ergonomics.",
    technologies: ["React Native", "JavaScript", "Supabase", "Mobile UI"],
    deliverables: [
      "Cross-platform responsive mobile UI",
      "Reactive cloud state management",
      "Touch-optimized ergonomics",
      "Lightweight local caching"
    ],
    accentColor: "#c5a059",
    linkText: "Review Product",
    mockupType: "mobile",
    previewAspect: "Mobile Application Interface"
  }
];

export const terraRoverProject = {
  id: "terrarover",
  index: "FLAGSHIP 00",
  title: "TerraRover",
  subheading: "Autonomous Agricultural Rover & Edge Computer Vision System",
  badge: "Hardware & Software Integration",
  year: "2024 — Present",
  tagline: "Bridging physical field robotics, onboard computer vision, and real-time mobile telemetry.",
  overview:
    "TerraRover is an autonomous agricultural rover project that converges physical hardware, embedded microcontrollers, edge computer vision models, and a companion mobile application. It is engineered to traverse crop rows, analyze botanical health in real time, and transmit actionable diagnostic data directly to the operator's mobile device.",
  keyInnovations: [
    {
      title: "Real-Time Botanical Vision",
      description: "Experimentation with convolutional neural network architectures for leaf and crop disease detection directly from live camera frames."
    },
    {
      title: "Closed-Loop Telemetry",
      description: "Bidirectional wireless communication pipeline connecting hardware controllers, GPS coordinates, and mobile supervisory controls."
    },
    {
      title: "Physical Terrain Control",
      description: "Motor driver actuation and sensor-assisted navigation configured for varying field topographies."
    }
  ],
  architectureFlow: [
    {
      step: "01",
      name: "Camera & Sensor Ingestion",
      layer: "Hardware Layer",
      description: "High-resolution camera module captures live foliage imagery alongside ultrasonic distance readings and GPS spatial coordinates."
    },
    {
      step: "02",
      name: "Edge AI Disease Recognition",
      layer: "Machine Learning Layer",
      description: "On-device computer vision model analyzes leaf pathology, classifying early signs of botanical disease and foliage health markers."
    },
    {
      step: "03",
      name: "Mobile Supervision App",
      layer: "Software Interface Layer",
      description: "Custom mobile dashboard renders diagnostic overlays, rover path status, disease heatmaps, and telemetry data."
    },
    {
      step: "04",
      name: "Microcontroller Logic",
      layer: "Embedded Control Layer",
      description: "Onboard microcontroller processes waypoint commands, obstacle proximity thresholds, and fail-safe triggers."
    },
    {
      step: "05",
      name: "Motor & Actuator Drive",
      layer: "Physical Execution Layer",
      description: "H-bridge motor drivers modulate high-torque planetary motors for precise row alignment and terrain traversing."
    }
  ],
  subsystems: [
    { name: "Camera Module", type: "Visual Input", spec: "Live feed capture for disease inspection" },
    { name: "Edge Vision Model", type: "AI Experimentation", spec: "Plant/leaf pathology classification" },
    { name: "Mobile App", type: "Operator Interface", spec: "Telemetry, control & diagnostic display" },
    { name: "Microcontroller", type: "Embedded Brain", spec: "Signal routing, sensor fusion & safety" },
    { name: "Motor Drivers & Motors", type: "Mobility Subsystem", spec: "High-torque four-wheel actuation" },
    { name: "GPS & Sensors", type: "Spatial Telemetry", spec: "Positioning & proximity detection" }
  ],
  technologies: [
    "Computer Vision",
    "Leaf Disease Classification",
    "React Native / Mobile UI",
    "Microcontroller Programming",
    "Motor Driver Control",
    "GPS & Ultrasonic Sensors",
    "Wireless Telemetry"
  ]
};
