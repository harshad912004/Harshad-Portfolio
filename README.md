# Harshad Portfolio

## Project Overview
A modern, premium developer portfolio built with Next.js 16 (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Prerequisites
- Node.js 20+ (recommended)
- npm 10+ (or Yarn)

## Setup
```bash
# Install dependencies
npm install
```

## Development
```bash
# Start the dev server (automatic hot‑reload)
npm run dev
```
The app will be available at `http://localhost:3000` (or the next free port if 3000 is in use).

## Production Build
```bash
npm run build   # builds with webpack (no SWC native binaries on Windows)
npm start       # serves the built app
```

## Important Notes
- The `--webpack` flag is no longer needed in the scripts; they have been cleaned up.
- If you encounter the "not a valid Win32 application" warning for `@next/swc-win32-x64-msvc`, it is safe to ignore on Windows when using the `--webpack` build mode, as the build falls back to WASM.
- Hot reload should now reflect any changes you make to source files immediately.

## Clean Build (if you run into stale caches)
```bash
# Remove Next.js cache and reinstall deps
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```
