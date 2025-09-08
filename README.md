# 🤬 Insult Generator

A modern web application that generates creative insults in multiple languages. Built with React, TypeScript, and Tailwind CSS.

![Insult Generator Screenshot](src/assets/img/insult.png)


## Live Preview
Check out the live demo: [Insult Generator](https://insult-generator-psi.vercel.app/)

## Features

- Generate witty insults in multiple languages
- Copy insults to clipboard
- View insult history
- Responsive design
- Animated UI elements


## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **UI Components:** Shadcn/ui
- **Animations:** Canvas Confetti
- **API Integration:** Evil Insult Generator API


### Installation

1. Clone the repository:
```bash
git clone https://github.com/RaHasib/insultGenerator.git
cd insult-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```bash
VITE_API_BASE_URL=https://evilinsult.com
VITE_MAX_HISTORY=5
VITE_DEFAULT_LANGUAGE=en
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Available Languages

- English (en)
- Spanish (es)
- French (fr)
- German (de)

## Acknowledgments

- [Evil Insult Generator API](https://evilinsult.com) for providing the insult generation service

---
