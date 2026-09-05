# 🌟 Chaithanya A — Senior Software Engineer Portfolio

A high-performance, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🔗 Live Portfolio

👉 **Live Demo:** [https://chaithanya-git-it.github.io/My_Portfolio_website/](https://chaithanya-git-it.github.io/My_Portfolio_website/)

<div align="center">
  <br />
  <a href="https://chaithanya-git-it.github.io/My_Portfolio_website/">
    <img src="public/preview.png" alt="Chaithanya A Portfolio Website Preview" width="100%" style="border-radius: 12px; border: 2px solid #9b6dff;" />
  </a>
</div>

---

## 👨‍💻 About Me

**Senior Software Engineer** with **3.9+ years of experience** at **Digit Insurance**. Honored with the **Master Mind Award** and **3 Honor Awards** for taking complete end-to-end technical ownership—from requirement analysis and backend architecture planning to production execution and release.

- 🏆 **Master Mind Award Winner**: Automated pension payout & facial/liveliness verification (ML Kit + Speech-to-Text).
- 🏆 **Tech Titan Award Winner**: Zero-delay micro-frontend architecture migration using Re.Pack.
- 📱 **Mobile & Web Leadership**: End-to-end Life Insurance Endorsement suite and cross-platform native modules (React Native, Swift, Kotlin).

---

## ✨ Features

- 🎨 **Modern Dark Glassmorphism Design**: Sleek dark aesthetic with custom glowing radial auras and HSL gradients.
- 📱 **Responsive 2-Column Hero**: Mobile-optimized layouts featuring smooth spring physics.
- 📄 **Interactive Resume Modal**: Inline PDF preview, open-in-new-tab support, and direct download option.
- 🏆 **Interactive Award Viewer**: Confetti-boosted modal showcasing awards & achievements.
- 🛠️ **IDE Technical Skills Arsenal**: Interactive tabs grouping Mobile, Web, Native, and AI workflows.
- ⚡ **Optimized Static Export**: Configured with Next.js `output: 'export'` for fast deployment.

---

## 🛠️ Tech Stack & Architecture

- **Core**: [Next.js 16](https://nextjs.org/) (App Router, Static HTML Export)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/)

---

## ⚙️ Environment Variables Setup

Environment variables can be configured using a `.env.local` file. Use `.env.example` as a template:

```bash
# Copy example file
cp .env.example .env.local
```

### Supported Variables

| Variable                    | Description                          | Default                                               |
| :-------------------------- | :----------------------------------- | :---------------------------------------------------- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email address         | `chaithanya.avinash07@gmail.com`                      |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public contact phone number          | Available on Request                                  |
| `NEXT_PUBLIC_RESUME_URL`    | Resume PDF path or Google Drive link | `/Chaithanya_a_4_years_exp_mobile_app_dev_resume.pdf` |
| `NEXT_PUBLIC_SITE_URL`      | Deployed production website URL      | GitHub Pages URL                                      |

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/chaithanya-git-it/My_Portfolio_website.git

# Navigate into the project directory
cd My_Portfolio_website

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🚀 Build & Production Export

```bash
# Generate production static export
npm run build
```

The compiled output will be generated inside the `./out` directory.

---

## 🔒 Security & Privacy Notice

This repository has been audited for public sharing:

- No hardcoded API keys, private credentials, or secrets exist in the repository.
- Sensitive environment configurations are ignored via `.gitignore` (`.env*`).
- Personal contact details can be configured via environment variables.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
