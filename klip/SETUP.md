# Klip Setup Guide

## Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- FFmpeg installed on your system
- A free Hugging Face API key

## Local Development Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/klip.git
cd klip
\`\`\`

### 2. Install FFmpeg

**macOS (using Homebrew):**
\`\`\`bash
brew install ffmpeg
\`\`\`

**Linux (Ubuntu/Debian):**
\`\`\`bash
sudo apt-get update
sudo apt-get install ffmpeg
\`\`\`

**Windows (using Chocolatey):**
\`\`\`bash
choco install ffmpeg
\`\`\`

Or download manually from https://ffmpeg.org/download.html

### 3. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 4. Setup Environment Variables

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit \`.env.local\` and add:

\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:3000
HUGGINGFACE_API_KEY=your_api_key_here
FFMPEG_PATH=/usr/bin/ffmpeg
UPLOAD_DIR=./public/uploads
\`\`\`

### 5. Create Upload Directory

\`\`\`bash
mkdir -p public/uploads
mkdir -p public/exports
\`\`\`

### 6. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

## Vercel Deployment

### 1. Push to GitHub

\`\`\`bash
git push origin main
\`\`\`

### 2. Connect to Vercel

Visit https://vercel.com/new and import your repository.

### 3. Add Environment Variables

In Vercel Project Settings → Environment Variables, add:

- \`HUGGINGFACE_API_KEY\`: Your API key from https://huggingface.co/settings/tokens
- \`NEXT_PUBLIC_API_URL\`: Your Vercel deployment URL
- \`FFMPEG_PATH\`: \`/usr/bin/ffmpeg\`

### 4. Deploy

Click "Deploy" and wait for the deployment to complete.

## Getting API Keys

### Hugging Face

1. Sign up at https://huggingface.co
2. Go to https://huggingface.co/settings/tokens
3. Create a new token
4. Copy and add to \`.env.local\`

## Troubleshooting

### FFmpeg Not Found

If you get "ffmpeg not found" error:

1. Check FFmpeg is installed:
   \`\`\`bash
   ffmpeg -version
   \`\`\`

2. Update \`.env.local\` with correct path:
   \`\`\`bash
   which ffmpeg  # Linux/Mac
   where ffmpeg  # Windows
   \`\`\`

### API Rate Limits

If hitting Hugging Face rate limits, consider:

1. Getting a paid API key
2. Using cached results (already implemented)
3. Implementing your own transcription backend

## Testing

\`\`\`bash
npm run test
npm run test:coverage
\`\`\`

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Docker Setup

\`\`\`bash
docker-compose up
\`\`\`

Access at http://localhost:3000

---

For more help, open an issue on GitHub!
