import { defineConfig } from 'vitepress'
export default defineConfig({
  "title": "AI Career Atlas",
  "description": "Explore emerging AI careers, skills, and portfolio projects.",
  "base": "/ai-career-atlas/",
  "lastUpdated": true,
  "themeConfig": {
    "logo": "/compass.svg",
    "nav": [
      {
        "text": "Explore roles",
        "link": "/roles/"
      },
      {
        "text": "Build your path",
        "link": "/learning-path"
      },
      {
        "text": "Research",
        "link": "/sources"
      }
    ],
    "sidebar": [
      {
        "text": "Start here",
        "items": [
          {
            "text": "Career landscape",
            "link": "/landscape"
          },
          {
            "text": "Compare roles",
            "link": "/roles/"
          },
          {
            "text": "Learning path",
            "link": "/learning-path"
          },
          {
            "text": "Portfolio lab",
            "link": "/portfolio"
          }
        ]
      },
      {
        "text": "Role field guides",
        "items": [
          {
            "text": "Forward Deployed Engineer",
            "link": "/roles/forward-deployed-engineer"
          },
          {
            "text": "AI / Applied AI Engineer",
            "link": "/roles/ai-engineer"
          },
          {
            "text": "AI Solutions Architect",
            "link": "/roles/solutions-architect"
          },
          {
            "text": "AI Evaluation Engineer",
            "link": "/roles/evaluation-engineer"
          },
          {
            "text": "Machine Learning Engineer",
            "link": "/roles/ml-engineer"
          },
          {
            "text": "AI Security Engineer",
            "link": "/roles/security-engineer"
          },
          {
            "text": "AI Product Manager",
            "link": "/roles/product-manager"
          },
          {
            "text": "Agent / Automation Engineer",
            "link": "/roles/agent-engineer"
          }
        ]
      },
      {
        "text": "Research desk",
        "items": [
          {
            "text": "Sources & methodology",
            "link": "/sources"
          },
          {
            "text": "Job research worksheet",
            "link": "/job-research"
          }
        ]
      }
    ],
    "search": {
      "provider": "local"
    },
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/chaseac-cpu/ai-career-atlas"
      }
    ],
    "editLink": {
      "pattern": "https://github.com/chaseac-cpu/ai-career-atlas/edit/main/docs/:path"
    },
    "footer": {
      "message": "Independent research. Titles vary; read the responsibilities.",
      "copyright": "Research reviewed November 5, 2026."
    }
  }
})