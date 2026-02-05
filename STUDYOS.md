# StudyOS - Personal Productivity & Study System

## Product Vision
StudyOS is a minimalist, Apple-inspired personal operating system for a single user, designed to unify study planning, daily organization, a smart knowledge library, and AI-powered productivity actions. It is a mobile-first web application with fast, fluid interactions, low visual clutter, and a clear hierarchy of information.

## Core Experience
- **Home Dashboard**: Daily overview, priority tasks, study time tracking, subjects in focus, AI quick actions, agenda, and weekly progress snapshot.
- **Study Module**: Subject management, AI-powered explanations, smart summaries, topic checklists, and study plan generation.
- **Organizer Module**: Task manager, habit tracker, routines, goals, and smart prioritization with quick reorganize actions.
- **Smart Library**: Upload/paste content, store study materials, searchable notes, AI summaries, and structured merged summaries.
- **AI Action Center**: Button-only AI actions (no chat), focused on summaries, explanations, planning, and organization.
- **Settings**: Language switch (Portuguese/English), theme toggle, and basic preferences.

## Design Principles
- Minimal, modern, Apple-inspired UI
- Large cards with a clear visual hierarchy
- Low visual clutter and calm spacing
- Smooth micro-animations for key interactions
- Light and dark modes
- Mobile-first responsive layout
- Bottom navigation with five sections (Home, Study, Organizer, Library, AI)

## Technical Stack
- **Frontend**: Next.js + React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: React hooks + context
- **Persistence**: Local storage helpers (ready for Supabase or Firebase)
- **AI**: OpenAI API integration placeholder

## Folder Structure
```
app/
  page.tsx
  study/page.tsx
  organizer/page.tsx
  library/page.tsx
  ai/page.tsx
  settings/page.tsx
  layout.tsx
  globals.css
components/
  ai-actions/QuickActions.tsx
  layout/AppShell.tsx
  layout/BottomNav.tsx
  ui/Button.tsx
  ui/Card.tsx
  ui/SectionHeader.tsx
hooks/
  usePreferences.tsx
lib/
  ai/openai.ts
  database/local.ts
  utils/format.ts
types/
  index.ts
```

## User Flow
1. User opens the app and sees the Home dashboard.
2. Uses AI quick actions to organize the day or summarize content.
3. Jumps to Study for explanations and plan generation.
4. Saves summaries into the Smart Library.
5. Returns daily for planning and execution.

## AI Action Buttons (No Chat)
- Summarize content
- Explain subject
- Create study plan
- Organize daily schedule
- Create revision checklist
- Transform text into structured notes

## Notes on Persistence & AI
- Current implementation uses local storage helpers and an AI prompt builder placeholder.
- Supabase or Firebase can be wired into the `lib/database` layer for local persistence without auth.
- OpenAI API calls can be connected via the `lib/ai` layer.

## Run Locally
```bash
npm install
npm run dev
```
