export const profile = {
  name: 'Manas Kummarapurugu',
  email: 'manaskumm@gmail.com',
  phone: '732-527-7053',
  github: 'https://github.com/Manaskumm',
  linkedin: 'https://linkedin.com/in/manas-kumm',
  university: 'Rutgers University–New Brunswick',
  degree: 'B.S. in Computer Science & B.A. in Economics',
  educationDates: 'Sep 2024 – Jan 2028',
  gpa: '3.6',
  resume: '/manasresume.pdf',
}

export const coursework = [
  'Linear Algebra', 'Data Structures', 'Computer Architecture (taught entirely in C)',
  'Computer Algorithms', 'Computer Security', 'Discrete I and II', 'Econometrics',
]

export const experience = [
  {
    id: 'conquest', company: 'Conquest Advisors', role: 'AI Software Engineering Intern',
    dates: 'Aug–Oct 2026', location: 'New York', image: 'conquest.webp',
    bullets: [
      'Built an internal AI workflow platform that automated client research, meeting preparation, document summarization, and follow-up generation for business teams, cutting repetitive administrative work by 35%.',
      'Engineered multi-agent workflows that classified incoming requests, retrieved relevant internal context, invoked external services, and coordinated specialized agents to complete multi-step business tasks end-to-end.',
      'Containerized and deployed backend services on Kubernetes and optimized LLM context reuse, supporting hundreds of automated workflows per week while reducing model API spend by 7%.',
    ],
  },
  {
    id: 'flyrank', company: 'FlyRank AI', role: 'ML Engineering Intern',
    dates: 'Jun–Jul 2026', location: 'Remote', image: 'flyrank.webp',
    bullets: [
      'Fine-tuned transformer-based ranking models on millions of web-content pairs to predict semantic relevance and search intent, improving offline ranking quality by 18% and increasing GPU inference throughput by 30%.',
      'Built an end-to-end ML pipeline for data preprocessing, hard-negative mining, model training, evaluation, and deployment using PyTorch and Hugging Face, cutting experiment turnaround time by 40%.',
      'Developed a FAISS-based semantic retrieval system using sentence-transformer embeddings to search large-scale content corpora, reducing average query latency by 35% while improving top-k retrieval precision by 14%.',
    ],
  },
  {
    id: 'langpal', company: 'Langpal', role: 'Software Engineering Intern',
    dates: 'Feb–May 2026', location: 'Seattle', image: 'langpal.webp',
    bullets: [
      'Built an AI voice agent with ElevenLabs that enabled users to practice real-time conversations in their target language, supporting hundreds of voice sessions per week.',
      'Redesigned onboarding flows in React and Next.js for a platform serving tens of thousands of users, reducing onboarding drop-off by 25% and increasing activation by 15%.',
      'Developed a WebRTC-based video calling system for live language practice, implementing real-time peer-to-peer communication and integrating it into the core user experience.',
    ],
  },
]

export const projects = [
  {
    id: 'hunch', title: 'Hunch', period: 'HackRU 2026 · Built in 24 hours · Team of three',
    image: 'hunch.webp', stack: ['Solana', 'Anchor', 'Rust', 'TypeScript', 'React', 'SPL token', 'Node.js'],
    description: 'An embeddable on-chain prediction market. Games and apps integrate real-time binary markets through a reusable React widget and TypeScript SDK.',
    details: 'An Anchor smart contract uses escrow vaults and a custom SPL token for staking and payouts. A Node.js resolver verifies game-server events before settling markets on-chain.',
    link: 'https://github.com/manangandhi03146/HunchTrading',
  },
  {
    id: 'malware-sandbox', title: 'Malware Sandbox & Analysis Engine',
    period: 'May 2025–present', image: 'malware-sandbox.webp', stack: ['Python', 'FastAPI', 'Docker', 'YARA'],
    description: 'A full-stack malware analysis platform with a FastAPI backend, ephemeral cloud VM runners, and a live scan reporting dashboard.',
    details: 'PE/ELF static analysis uses pefile, pyelftools, and YARA. The executor defaults to static analysis; runtime monitoring is experimental and some paths emit simulated events.',
    link: 'https://github.com/Manaskumm/malware-sandbox',
  },
  {
    id: 'venture-ai', title: 'Venture AI', period: 'Hackathon project', image: 'venture-ai.webp',
    stack: ['Next.js', 'Groq', 'Gemini', 'Prisma', 'PostgreSQL'],
    description: 'A hackathon project that turns trip preferences into an AI-generated travel itinerary.',
    details: '', link: 'https://github.com/Manaskumm/venture',
    demo: 'https://venture-blue-beta.vercel.app/',
  },
  {
    id: 'trading-agent', title: 'Autonomous AI Trading Agent', period: 'In progress', image: 'trading-agent.webp',
    stack: ['Claude', 'Robinhood MCP'], description: 'An autonomous trading agent built with Claude and Robinhood MCP.',
    details: 'Includes a kill switch, position sizing, and trade logging.', link: null,
  },
  {
    id: 'stock-predictor', title: 'S&P 500 Prediction Model', period: 'Freshman year', image: 'stock-predictor.webp',
    stack: ['scikit-learn', 'Random forest'], description: 'An S&P 500 prediction model built with a scikit-learn random forest during freshman year.',
    details: '', link: 'https://github.com/Manaskumm/S-P-Index-Fund-Predictor',
  },
]

export const skillCategories = [
  { title: 'Languages', skills: ['Python', 'Java', 'C', 'Go', 'Rust', 'JavaScript/TypeScript', 'SQL', 'HTML/CSS'] },
  { title: 'ML / AI', skills: ['PyTorch', 'Hugging Face Transformers', 'FAISS', 'scikit-learn', 'NumPy', 'Pandas', 'sentence-transformers'] },
  { title: 'Web / backend', skills: ['React', 'Next.js', 'Node.js', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Prisma', 'Supabase', 'WebRTC'] },
  { title: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Linux', 'Git', 'GitHub Actions'] },
  { title: 'Other', skills: ['Solana', 'ElevenLabs'] },
]
