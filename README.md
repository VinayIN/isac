# ISAC-BTU Website

[![Deployment](https://github.com/VinayIN/isac/actions/workflows/merge.yml/badge.svg)](https://github.com/VinayIN/isac/actions/workflows/merge.yml)

**Live Website:** https://isacottbus-btu.web.app/

---

## Quick Start

### For Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` in your browser.

### For Production Build
```bash
npm run build
npm run deploy
```

---

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Firebase Firestore
- **Hosting:** Firebase Hosting
- **UI Components:** PrimeReact
- **Styling:** Tailwind CSS

---

## Updating Content via Firebase

### 1. **Teams Data**
Navigate to Firestore Console → `teams/{year}/{teamName}`

**Structure:**
```
teams/
├── 2024/
│   ├── admin/
│   │   ├── doc1: { name, title, href (storage path) }
│   │   ├── doc2: { ... }
│   ├── finance/
│   ├── events/
│   ├── socialmedia/
│   └── advisory/
├── 2025/
│   └── ... (same structure)
```

**Steps:**
1. Go to [Firebase Console](https://console.firebase.google.com/) → ISAC project
2. Navigate to Firestore Database
3. Add documents with fields: `name`, `title`, `href`
4. `href` should be the path to the image in Firebase Storage (e.g., `teams/2024/admin/john_doe.jpg`)

### 2. **Resources Data**
Navigate to Firestore Console → `resources/{section}`

**Available sections:**
- admission-procedure
- accommodation
- city-registration
- emergency-contacts
- finding-accommodation
- reaching-cottbus
- bank-account

**Document Fields:**
- `title` (string)
- `content` (string - supports Markdown)

### 3. **Events & Gallery**
Update via Firestore collections:
- `events/{eventId}` - Add event details
- `gallery/{imageId}` - Add gallery images with metadata

### 4. **Image Storage**
Upload images to Firebase Storage:
- Path: `teams/2024/admin/image_name.jpg`
- Public read access required in security rules

---

## Git Workflow

1. **Never push directly to `main`**
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "description"`
4. Push and create a Pull Request to `dev` branch
5. After review and GitHub Actions success, merge to `main`
6. `main` branch auto-deploys to production

---

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to Firebase Hosting |
| `npm run lint` | Check code linting |

---

## Project Structure

```
isac/
├── app/                 # Next.js App Router
│   ├── teams/          # Teams page
│   ├── events/         # Events page
│   ├── gallery/        # Gallery page
│   ├── resources/      # Resources page
│   └── ...
├── app/_hooks/         # Custom React hooks
├── app/_lib/           # Utilities & config
├── public/             # Static assets
└── package.json
```

---

## Firebase Setup (Admin Only)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize:**
   ```bash
   firebase login
   firebase init
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Setup Instructions

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- Git
- Firebase account (for admin setup)

### Installation
```bash
git clone <repo-url>
cd isac
npm install
```

---

For issues or questions, create an issue in the GitHub repository.
