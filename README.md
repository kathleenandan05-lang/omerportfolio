# Omer El Awad Portfolio

Professional portfolio website for **Omer El Awad**, Operations & Automation Specialist.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
cd portfolio-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
portfolio-app/
├── app/
│   ├── page.tsx                  # Homepage (all sections)
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── globals.css               # Global styles + print styles
│   ├── resume/
│   │   └── page.tsx              # Resume page (print-friendly)
│   └── projects/
│       ├── page.tsx              # All projects listing
│       └── [slug]/
│           ├── page.tsx          # Dynamic case study page
│           └── CaseStudyContent.tsx  # Client-side animated content
├── components/
│   ├── Navbar.tsx                # Sticky nav with mobile menu
│   ├── Hero.tsx                  # Hero section
│   ├── ValueProposition.tsx      # 3-card value section
│   ├── Results.tsx               # Impact metrics grid
│   ├── FeaturedProjects.tsx      # Project cards with filters
│   ├── ProjectCard.tsx           # Individual project card
│   ├── Services.tsx              # Services section
│   ├── Tools.tsx                 # Tech stack badges
│   ├── ExperienceTimeline.tsx    # Work history timeline
│   ├── About.tsx                 # About section
│   ├── Contact.tsx               # Contact section
│   ├── Footer.tsx                # Footer
│   ├── SectionHeader.tsx         # Reusable section heading
│   └── ResumeView.tsx            # Resume layout (shared by resume page + print)
├── data/                         # ⬅️ EDIT THESE to update site content
│   ├── profile.ts                # Personal info, bio, education, certifications
│   ├── projects.ts               # Case studies and portfolio projects
│   ├── experience.ts             # Work history
│   ├── skills.ts                 # Tools and core skill cards
│   └── results.ts                # Impact metrics
└── lib/
    └── utils.ts                  # Utility helpers
```

---

## How to Add a New Project

1. Open [`data/projects.ts`](data/projects.ts)
2. Copy the template comment block at the bottom of the file
3. Fill in all fields, then paste the object into the `projects` array
4. Set `featuredOnHome: true` to show it on the homepage
5. Set `resumeVisible: true` to show it on the resume page
6. Save. The site updates automatically everywhere

**Key fields:**

| Field | Description |
|---|---|
| `slug` | URL-safe ID, e.g. `"my-project-name"` |
| `title` | Project display title |
| `category` | One of: `Automation`, `CRM`, `Dashboard`, `SOP`, `Operations`, `Data Cleanup`, `Email Marketing`, `Integration` |
| `shortSummary` | 1–2 sentences shown on homepage cards |
| `problem` | Client challenge description (case study) |
| `solution` | What you built (case study) |
| `process` | Array of `{ heading, body }` steps |
| `tools` | Array of tool names |
| `results` | Array of outcome bullet points |
| `metrics` | Array of `{ value, label }` stat cards |
| `featuredOnHome` | `true` to show on homepage |
| `resumeVisible` | `true` to include on resume |

---

## How to Update Resume Content

The resume page at `/resume` is fully data-driven. To update:

- **Personal info, summary, education, certifications** → edit [`data/profile.ts`](data/profile.ts)
- **Work history** → edit [`data/experience.ts`](data/experience.ts)
- **Skills and tools** → edit [`data/skills.ts`](data/skills.ts)
- **Impact metrics** → edit [`data/results.ts`](data/results.ts)
- **Featured projects on resume** → set `resumeVisible: true` in [`data/projects.ts`](data/projects.ts)

All changes are reflected immediately on both the `/resume` page and the downloadable PDF version.

---

## How to Export the Resume as PDF

1. Navigate to [http://localhost:3000/resume](http://localhost:3000/resume)
2. Click the **"Download PDF"** button in the top bar
3. In the browser print dialog:
   - Set **Destination** to **"Save as PDF"**
   - Set **Paper size** to **A4**
   - Set **Margins** to **None** or **Default**
   - Enable **Background graphics** if you want the color accents
4. Click Save

The page uses CSS `@media print` styles that hide navigation, sidebars, and UI chrome. Only the resume content is printed.

---

## How to Add a New Experience Entry

Open [`data/experience.ts`](data/experience.ts) and add a new object to the `experience` array:

```typescript
{
  id: "unique-id",
  company: "Company Name",
  role: "Your Job Title",
  type: "remote",            // "remote" | "on-site" | "hybrid"
  startDate: "2025-01",      // YYYY-MM
  endDate: "Present",        // YYYY-MM or "Present"
  current: true,
  location: "Remote",
  summary: "One-sentence overview of this role",
  responsibilities: ["Responsibility 1", "Responsibility 2"],
  achievements: ["Achievement with a metric", "Another achievement"],
  tools: ["Tool1", "Tool2"],
  relatedProjects: [],       // Optional: slugs from projects.ts
},
```

---

## Deployment on Vercel

1. Push the repository to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js, no configuration needed
4. Set root directory to `portfolio-app` if needed

The site is fully static-export compatible and builds with zero environment variables required.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Geist | Typography |

---

## Design System

- **Background:** `slate-50` (#F8FAFC)
- **Cards:** `white` with `slate-100` borders and soft shadows
- **Primary text:** `slate-800`
- **Secondary text:** `slate-500`
- **Accent:** `blue-600` (#2563EB)
- **Font:** Geist Sans (via Next.js Google Fonts)
