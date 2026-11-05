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
        "text": "Start your career",
        "link": "/opportunities/getting-started"
      },
      {
        "text": "Real jobs",
        "link": "/opportunities/"
      },
      {
        "text": "Roles",
        "link": "/roles/"
      },
      {
        "text": "Research",
        "link": "/sources"
      }
    ],
    "sidebar": [
      {
        "text": "Internships & job examples",
        "items": [
          {
            "text": "Start here: beginner hub",
            "link": "/opportunities/getting-started"
          },
          {
            "text": "Browse all 22 examples",
            "link": "/opportunities/"
          },
          {
            "text": "Internships & co-ops",
            "link": "/opportunities/internships"
          },
          {
            "text": "Entry level & early career",
            "link": "/opportunities/entry-level"
          },
          {
            "text": "Mid-level examples",
            "link": "/opportunities/mid-level"
          },
          {
            "text": "Senior & staff examples",
            "link": "/opportunities/senior"
          },
          {
            "text": "Compare experience levels",
            "link": "/opportunities/levels"
          },
          {
            "text": "Emerging titles",
            "link": "/opportunities/emerging-titles"
          }
        ]
      },
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
