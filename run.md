# Harshad Dhongade - Software Engineer Portfolio

A premium, production-quality Software Engineering portfolio built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. 

The portfolio is designed to showcase core backend reliability, clean architecture, API engineering, relational database design, and systems scalability, optimized to attract product-based hiring managers.

---

## 🛠️ Technology Stack
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styles**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Email Backend**: [Resend SDK](https://resend.com/)

---

## 🚀 How to Run the Application

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or higher is recommended).

### 2. Installation
Clone the repository, navigate to the directory, and install the required dependencies:
```bash
npm install
```

### 3. Local Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

*Note: The script runs in Webpack mode (`next dev --webpack`) to bypass platform-specific SWC Turbopack binary issues on Windows systems.*

### 4. Build for Production
Create an optimized production bundle:
```bash
npm run build
```

### 5. Start Production Server Locally
Serve the compiled production bundle locally:
```bash
npm run start
```

---

## 🔍 How to Find and Debug Errors

### 1. TypeScript Validation
Validate type-safety and compile rules across the codebase:
```bash
npx tsc --noEmit
```
This check ensures there are no unresolved imports, missing types, or type conflicts in pages and components.

### 2. ESLint Checks
Scan for syntax issues, code quality alerts, and formatting concerns:
```bash
npm run lint
```
To automatically fix common linting issues, run:
```bash
npx eslint . --fix
```

### 3. Debugging Contact Form API Errors
The contact form submits payloads to `/api/send`.
- **In Development**: If no `RESEND_API_KEY` environment variable is defined, the API logs the submitted message structure directly to your terminal console and returns a mock success status. This allows form debugging without requiring actual email dispatches.
- **In Production**: Check server logs in your hosting panel (e.g., Vercel Logs) for runtime error structures. Common issues include:
  - `400 Bad Request`: Missing form values or malformed email patterns.
  - `500 Internal Server Error`: Incorrect `RESEND_API_KEY` configuration.

---

## 🌐 Deployment Guide

### Option A: Deploying on Vercel (Recommended - Serverless API Support)
Since the portfolio utilizes Next.js API Routes for the contact form backend, **Vercel** is the recommended hosting platform as it provides native out-of-the-box serverless function support.

1. Create a free account on [Vercel](https://vercel.com).
2. Connect your GitHub account and click **Add New** > **Project**.
3. Import the `Harshad-Portfolio` repository.
4. In the **Environment Variables** section, add your keys:
   - `RESEND_API_KEY`: Obtain a free API key from your [Resend Dashboard](https://resend.com).
   - `CONTACT_RECEIVER_EMAIL`: The destination email where messages should be sent (defaults to `harshaddhongade9124@gmail.com`).
5. Click **Deploy**. Vercel will automatically build the site and deploy your serverless endpoint.

### Option B: Deploying on GitHub Pages (Static Hosting)
GitHub Pages hosts static files (HTML, CSS, JS) and **does not** run server-side Node.js code natively. Therefore, the `/api/send` Next.js endpoint will not execute on GitHub Pages.

To deploy to GitHub Pages:
1. **Redirect API Form Actions**: Modify the `onSubmit` handler in `src/components/Contact.tsx` to route submissions through a third-party static forms provider like [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/) instead of calling `/api/send`.
2. **Configure Static Export**: Update `next.config.ts` to output static assets:
   ```typescript
   import type { NextConfig } from "next";
   const nextConfig: NextConfig = {
     output: 'export', // Outputs HTML/CSS/JS to the 'out/' directory
     images: {
       unoptimized: true, // Required for static exports using Next.js Image
     },
   };
   export default nextConfig;
   ```
3. **Run Static Build**:
   ```bash
   npm run build
   ```
   This generates an `out/` folder.
4. **Deploy**: Push the contents of the `out/` folder to the `gh-pages` branch of your repository. You can use packages like `gh-pages` or set up a GitHub Actions workflow to automate this build-and-deploy cycle.
