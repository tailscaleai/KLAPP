# Klip - Convert Long-Form Videos to Viral Shorts

Convert your long-form videos (podcasts, YouTube, webinars) into engaging short-form clips optimized for TikTok, Instagram Reels, and YouTube Shorts using AI-powered scene detection and automatic captions.

## ✨ Features

- 🎬 **Video Upload & URL Import** - Upload files or paste YouTube/Vimeo links
- 🤖 **AI Scene Detection** - Automatically identifies the most engaging moments
- 📝 **Speech-to-Text** - Free transcription powered by Hugging Face
- 📱 **Vertical Reframing** - Smart crop to 9:16 aspect ratio with face detection
- 📺 **Animated Captions** - Customizable caption styling and animations
- ⚡ **Multi-format Export** - MP4, WebM with quality presets
- 💰 **100% Free** - No payment plans, no limits
- 🔓 **Open Source** - MIT licensed, fully customizable

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- FFmpeg installed on your system

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/klip.git
   cd klip
   \`\`\`

2. **Install FFmpeg**
   
   **macOS:**
   \`\`\`bash
   brew install ffmpeg
   \`\`\`
   
   **Linux:**
   \`\`\`bash
   apt-get install ffmpeg
   \`\`\`
   
   **Windows:**
   \`\`\`bash
   choco install ffmpeg
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

4. **Setup environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your API keys:
   - Get a free Hugging Face API key at https://huggingface.co/settings/tokens

5. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open in browser**
   
   Navigate to http://localhost:3000

## 📦 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/klip&env=HUGGINGFACE_API_KEY,DATABASE_URL)

### Manual Deployment

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project" → Import your repository
4. Add environment variables in Settings:
   - HUGGINGFACE_API_KEY
   - DATABASE_URL (optional)
5. Deploy!

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Node.js, Next.js API Routes
- **Video Processing:** FFmpeg, OpenCV
- **AI/ML:** Hugging Face Transformers
- **Database:** MongoDB Atlas or Firebase (optional)
- **Deployment:** Vercel

## 📁 Project Structure

\`\`\`
klip/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── editor/            # Editor page
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript types
├── public/                # Static files
├── __tests__/             # Test files
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## 🎯 Usage

1. **Upload or Import Video**
   - Drag & drop a video file or paste a YouTube URL
   - Supported formats: MP4, WebM, MOV, AVI
   - Max file size: 5GB, Duration: Up to 1 hour

2. **Process Video**
   - App automatically detects scenes and generates transcript
   - Review detected highlights and edit as needed

3. **Customize Captions**
   - Choose font, size, color, and position
   - Edit individual captions or use AI suggestions

4. **Export**
   - Select format (MP4 or WebM) and quality
   - Download ready-to-upload clip

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This tool is for educational and personal use. Ensure you have the right to edit and redistribute any videos you process. Always respect copyright and intellectual property rights.

## 🙋 Support

- 📧 Email: support@klip.app
- 💬 GitHub Issues: [Report a bug](https://github.com/yourusername/klip/issues)
- 📚 Documentation: See [SETUP.md](./SETUP.md)

---

Made with ❤️ by the Klip Community
