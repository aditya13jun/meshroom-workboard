# Meshroom Workboard

A modern, collaborative workboard application built with Next.js, React, and Convex, leveraging Clerk authentication and the Liveblocks framework for real-time collaboration.

---

## Project Structure

```
meshroom-workboard/
├── app/                # Next.js app directory (pages, layouts)
├── components/         # Reusable React components
├── convex/             # Convex backend logic and functions
├── hooks/              # Custom React hooks
├── lib/                # Shared utility code
├── providers/          # Context and provider setups
├── public/             # Static assets
├── store/              # Zustand state management
├── .gitignore          # Git ignored files
├── components.json     # Component metadata
├── eslint.config.mjs   # Eslint configuration
├── middleware.ts       # Next.js middleware
├── next.config.ts      # Next.js config
├── package.json        # Project manifest
├── postcss.config.mjs  # PostCSS config
├── tsconfig.json       # TypeScript config
└── README.md           # Project documentation
```

---

## Features

- **Real-time Collaboration:** Built using [Liveblocks](https://liveblocks.io/) for live presence and shared editing.
- **Authentication:** User management handled by [Clerk](https://clerk.com/).
- **Modern UI:** Built with React, Tailwind CSS, and Radix UI primitives.
- **State Management:** Utilizes Zustand for simple, scalable state.
- **Database Backend:** Powered by Convex for reactive, type-safe backend logic.
- **TypeScript:** Full TypeScript support for safer development.
- **Linting & Formatting:** ESLint integration for code quality.
- **Theming:** Dark/light mode and theme toggling via Next Themes.

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x or yarn/pnpm
- Convex account (for backend database)
- Clerk account (for authentication)

### Installation

```bash
git clone https://github.com/ChandraBhooshan/meshroom-workboard.git
cd meshroom-workboard
npm install
```

### Setup Environment

1. Set up your Convex project and Clerk project, then add the required environment variables (see `.env.example` if present or check documentation).

2. Configure environment for Next.js, Clerk, Convex, and any integrations as necessary.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```
App will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

---

## Scripts

| Command         | Description             |
|-----------------|------------------------|
| `npm run dev`   | Start the local dev server |
| `npm run build` | Build for production   |
| `npm start`     | Start the production server |
| `npm run lint`  | Run ESLint checks      |

---

## Key Dependencies

- **Next.js 16**: App framework
- **React 19**: User interface library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Convex**: Backend as a service for data and business logic
- **Clerk**: Authentication and user management
- **Liveblocks**: Real-time collaboration/presence
- **Zustand**: State management

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

---

## Author

- [Chandra Bhooshan](https://github.com/ChandraBhooshan)
- [Aditya Harsh](https://github.com/aditya13jun)
---
