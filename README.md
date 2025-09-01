# 🌟 Iris AI - Mobile-First Conversation App

> A modern, accessible, and mobile-first React application built with cutting-edge technologies and best practices.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-teal)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple)

---

## 🎯 Project Overview

Iris AI is a sophisticated conversation interface that demonstrates modern React development practices, mobile-first design principles, and accessibility standards. Built as a take-home challenge showcasing professional-grade frontend engineering skills.

---

## 👨‍💻 Developer and Personal Notes (TL,DR It's just a thank you)

Hey team, just wanted to drop a quick thank you for letting me check out both the current design and the old version of the project.

It’s a super interesting project (honestly, nerd-level exciting 😅), and I’d love the chance to be part of it. Really appreciate the trust and the insights you shared!

As for next steps listed bellow, I’d that for sure the Step 0 is definitely getting up to speed with the animation library you’re using — gotta make sure the fuzzy and iris magic keeps running as smooth as butter .

**Part of the process:**

- Start a vite project and setting up Tailwind and Biome for lint.
- Used biome since it drastically cuts down setup and speeds up lint/format tasks.
- Download all the svg icons.
- Add the `vite-plugin-svgr` library, so we can work with the svgs as react components. No need to have both svg (active/deactived) just one and control the styles.
- Build the bottom navigation with a footer and tab component.
- Add `react-router-dom` for clean navigation.
- Add `framer-motion` for some animations and smooth transitions.
- No need for now a library for state management but later with some other features, the idea is to using zustand or redux toolkit.
- Split some components into smaller ones to keep clean code and single responsability approach, there is more places to do it but will need some time, but same idea.

- **Time Investment:** 3 hours focused development
- **Focus Areas:** Architecture, accessibility, mobile UX
- **Key Decisions:** Modern stack, TypeScript, mobile-first approach
- **Proudest Achievement:** Complete accessibility implementation

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js 18+
pnpm (recommended) or npm
```

### Installation & Development

```bash
# Clone the repository
git clone [repository-url]
cd iris-mvp

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ConversationHeader.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── Tab.tsx
├── pages/              # Route components
│   ├── Explore.tsx
│   ├── Insights.tsx
│   ├── Iris.tsx
│   ├── TextConversation.tsx
│   └── VoiceConversation.tsx
├── assets/             # SVG icons and images
├── config/             # Configuration files
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and design tokens
```

---

## 🛣️ Next Steps (If I had more time)

### **Immediate (1-2 weeks)**

1. **Extract design tokens** - Replace hardcoded values with Tailwind variables
2. **Build component library** - Reusable Button, Input, Card components
3. **AI integration** - Connect to OpenAI/Anthropic API for real conversations

### **Short-term (1-2 months)**

4. **Voice functionality** - Web Audio API, speech-to-text, text-to-speech
5. **Persona system** - Different AI personalities (therapist, coach, friend)
6. **Working conversations** - Message history, typing indicators, error handling

### **Long-term (3-6 months)**

7. **Insights dashboard** - Conversation analytics and user progress
8. **Explore scenarios** - Interactive self-awareness exercises
9. **User profiles** - Settings, preferences, conversation history

### **Estimated Timeline**

- **Complete MVP**: 2-3 months full-time
- **Production ready**: 4-6 months full-time

---

**P.S.**

- Those expectations are without AI assistant, so the time could decrease a little
- Would definitely add some tests (unit/integration/e2e) if I had more time
- Any commits after Sunday, August 31st are just me playing around with the code 😊
