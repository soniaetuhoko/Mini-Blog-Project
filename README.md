# Dev Insights Mini Blog

Internal mini blog for **Dev Insights**, built with **React**, **TypeScript**, and **Vite**. Employees can browse short web-development tips. This is the foundation of the platform from the first three weeks of the module: components, types, styling, and a simple performance/HOC example.

This project was **not** created from a React template. Vite, React, and TypeScript were set up by hand. There is **no Tailwind** and **no JavaScript source files** — the app is TypeScript (`.ts` / `.tsx`) with CSS and styled-components.

## How to install, run, and test

This app is a Vite project. You need [Node.js](https://nodejs.org/) installed.

```bash
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open that URL in your browser.

To confirm a production build works:

```bash
npm run build
npm run preview
```

### What to check

- The header shows the **Dev Insights** logo and a **New Post** link (the link is a placeholder).
- Three sample posts show **title**, **author**, **preview**, and **date**.
- Nmesoma Peter’s post has a different background (featured author).
- The most recent post shows a **New!** badge.
- In the browser console (F12 → Console) you should see `[withLogger] Header mounted`. In React Strict Mode during development this may appear twice (mount → unmount → mount). That is expected.

## Project structure

```text
├── index.html
├── package.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/     Header, PostList, Post
│   ├── hoc/            withLogger
│   ├── styles/         global and App CSS
│   ├── types/          Post interface
│   └── utils/          preview and date helpers
```

## Component type choices

- **Header**, **PostList**, and **App** are **functional components**. They are the default in modern React, they work with hooks, and they stay short for presentational UI.
- **Post** is also a **functional component**, wrapped in `React.memo`. A class component with `PureComponent` could skip extra re-renders in the same way, but the module’s later patterns (hooks, memo) fit functions better. Post has no local state or lifecycle beyond rendering props, so a function is the clearer choice.

## Styling methods

Two required methods are used, plus a small inline example:

1. **External CSS files** — `src/styles/index.css`, `src/styles/App.css`, `Header.css`, and `PostList.css` for layout and the header.
2. **Styled Components** (CSS-in-JS) — the post card in `Post.tsx` (`Card`, `Title`, `Preview`, and related components).

**Conditional styling**

- Posts by **Nmesoma Peter** get a tinted background and a “Featured author” label (`$highlighted` on the styled card).
- Posts from the last **24 hours** show a **New!** badge. That badge uses a small **inline style** so a third method is visible in the code.

No Tailwind is used.

## Optimisation and HOC

- Each list item uses a unique `key={post.id}` so React can match items correctly.
- `Post` is exported as `memo(Post)` so it does not re-render unless its `post` prop changes.
- `withLogger` is a higher-order component that logs when the wrapped component mounts and unmounts. It is applied to **Header**.

## Challenges

At first i did not understand why New Post does not open a form. Then i read the brief again from the intructions and saw that the link does not need to work yet. 

I also found the HOC confusing until i opened the browser console and saw the "Header mounted". Setting up vite without a template was new because i had to add the config files myself.

## External libraries and packages

| Package | Why it is used |
|---|---|
| `react`, `react-dom` | UI library |
| `vite` | Dev server and production bundler |
| `@vitejs/plugin-react` | React support in Vite |
| `typescript` | Type checking |
| `@types/react`, `@types/react-dom` | TypeScript types for React |
| `styled-components` | CSS-in-JS styling for the Post card |

Dev tools only: Vite, TypeScript, React type packages, and the Vite React plugin.
