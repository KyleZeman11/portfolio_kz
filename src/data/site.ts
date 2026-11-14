// Everything on the site that is not a project lives here.
// Edit this file to change contact details, experience, skills or the About text.

export const site = {
  name: 'Kyle Zeman',
  title: 'Kyle Zeman, mechanical engineering',
  description:
    'Mechanical engineering student at the University at Buffalo. SolidWorks modeling, finite element analysis and computational fluid dynamics, with quality and process experience in precision manufacturing.',
  intro:
    "I'm a senior mechanical engineering student passionate about design, manufacturing, and process optimization, with a particular interest in aerospace and defense.",
  email: 'kylezeman05@gmail.com',
  phone: '(585) 280-3285',
  phoneHref: '+15852803285',
  linkedin: 'https://www.linkedin.com/in/kyle-zeman',
  linkedinLabel: 'linkedin.com/in/kyle-zeman',
  url: 'https://kylezeman.vercel.app',
  resume: '/Kyle_Zeman_Resume.pdf',
};

// The drawing-style title block under the hero.
export const titleBlock = [
  { label: 'Discipline', value: 'Mechanical engineering' },
  { label: 'School', value: 'University at Buffalo' },
  { label: 'Graduating', value: 'May 2027' },
  { label: 'Based in', value: 'Buffalo, New York' },
  { label: 'Seeking', value: 'Full-time position or graduate internship' },
  { label: 'Citizenship', value: 'U.S. citizen, clearance eligible' },
];

export const experience = [
  {
    org: 'Handshake AI Fellowship',
    role: 'AI evaluation and training fellow',
    place: 'Remote',
    dates: '2026 to present',
    points: [
      'Evaluate AI-generated engineering and technical content for accuracy against structured criteria.',
      'Design prompts and scoring rubrics for large language models and give annotated feedback.',
    ],
  },
  {
    org: 'Vishay Thin Film',
    role: 'Quality / process engineering intern',
    place: 'Niagara Falls, New York',
    dates: 'June 2026 to August 2026',
    points: [
      'Independently led Layered Process Audits (LPA) across 8 manufacturing processes, the first step of a plant-wide effort to find noncompliances, driving corrective actions that improved efficiency and reduced defects.',
      'Ran meetings with operators and engineers to plan how each improvement would be put in place and to eliminate recurring nonconformances.',
    ],
  },
  {
    org: 'PayQuicker',
    role: 'Tax documentation specialist',
    place: 'Remote',
    dates: 'July 2023 to May 2026',
    points: [
      'Reviewed and approved high volumes of tax documentation for accuracy and regulatory compliance.',
      'Built Microsoft Power BI reports to track documentation status and analyze processing trends.',
    ],
  },
];

export const education = {
  school: 'University at Buffalo, The State University of New York',
  degree: 'Bachelor of Science in Mechanical Engineering, expected May 2027',
  coursework: [
    'Manufacturing Processes',
    'Design Process & Methods',
    'Machines & Mechanisms',
    'Additive Manufacturing',
    'Dynamic Systems',
    'Fluid Mechanics & Lab',
    'Numerical Methods',
  ],
  tutoring: 'Peer tutor for Mechanics of Materials and SolidWorks design courses.',
};

export const skills = [
  {
    group: 'CAD',
    items: [
      'SolidWorks (parts, assemblies, surfacing, drawings)',
      'Geometric dimensioning and tolerancing (GD&T)',
      'Autodesk Fusion 360',
    ],
  },
  {
    group: 'Analysis',
    items: [
      'Finite element analysis (SolidWorks Simulation)',
      'Computational fluid dynamics (SolidWorks Flow Simulation)',
      'Hydraulic calculations',
      'Reverse engineering',
    ],
  },
  {
    group: 'Quality and manufacturing',
    items: ['Layered Process Audits (LPA)', 'Corrective action', 'Nonconformance reduction'],
  },
  {
    group: 'Fabrication and inspection',
    items: ['3D printing', 'Machine shop tools', 'Measurement and inspection tools'],
  },
  {
    group: 'Programming and data',
    items: ['MATLAB', 'Python', 'Arduino IDE', 'Excel', 'Microsoft Power BI'],
  },
  {
    group: 'Certifications',
    items: ['Certified SolidWorks Associate (CSWA), in progress'],
  },
];

// About section: three short panels. Keep it engineering first; one panel for life outside work.
export const about = [
  {
    heading: 'How I work',
    text: 'I like the part of engineering where a model meets the real part: measuring something, finding out why it does not match the drawing, and fixing the cause instead of the symptom. A summer of process audits at Vishay Thin Film taught me how much of that work is listening to the people who run the process every day.',
  },
  {
    heading: 'At the University at Buffalo',
    text: 'I spend most of my time in SolidWorks, building assemblies and checking them with finite element analysis and computational fluid dynamics. My senior capstone is an adjustable-deadrise keel for a military and Coast Guard shore-approach craft.',
  },
  {
    heading: 'Outside of work',
    text: "When I'm not working or studying, I'm outside learning more about the world through skiing and hiking. Time on a trail or a mountain is how I reset, and it's where I do some of my best thinking. I also collect CDs and vinyl records, so there's usually music playing when I'm home.",
  },
];
