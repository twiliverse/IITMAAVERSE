# 🏛️ IITM Village (Community Architecture Prototype)

> A high-concurrency, Weverse-style digital village designed to transform static campus networks into real-time, highly engaged communities for students and alumni. 

---

## 🚀 Executive Summary
Traditional university networks and alumni portals suffer from static, bulletin-board-style engagement. **IITM Village** solves this by adapting a modern "Digital Village" architecture: prioritizing emotional safety, asynchronous mentorship, and real-time interaction through a dual-feed system. 

This repository serves as a foundational prototype demonstrating **scalable community infrastructure, real-time localized feeds, and role-based access control**, built to handle high-throughput engagement for large-scale campus ecosystems or localized fan communities.

## ✨ Core Architecture & Features

### 1. The Dual-Feed Engine
*   **The Spotlight Feed:** A high-signal, low-noise broadcast channel exclusively for Alumni, Professors, and Student Leaders to post updates, host AMAs, and share insights.
*   **The Quad:** A high-throughput, real-time student wall for peer-to-peer interactions, study groups, and campus culture.

### 2. Verified Identity & Badging
*   Role-based access control (RBAC) ensuring users carry digital trust badges (e.g., "Class of '26", "Tech Society Executive").
*   Gamified participation loops leveraging digital milestones to foster a healthy community ecosystem.

### 3. Ephemeral Event Lounges (Roadmap)
*   WebRTC/WebSocket-driven live chat rooms tailored for real-time campus events (e.g., Paradox fests, hackathons), engineered to handle burst traffic without feed lag.

---

## 🛠️ Technical Stack
*   **Frontend:** React 18, Next.js, Tailwind CSS, Lucide Icons
*   **Backend:** Node.js, Next.js API Routes, WebSockets (Socket.io)
*   **Database:** PostgreSQL (via Prisma ORM), Redis (for high-speed feed caching & rate limiting)
*   **Deployment:** Vercel (Edge Functions for low-latency delivery)

---

## 🌐 The "Weverse Regional" Scalability Concept
While currently styled for the IIT Madras ecosystem, this architecture maps directly to the infrastructure required for hyper-local digital communities (like **Weverse Regional Circles**). 

As global platforms scale into targeted local markets (like India), creating isolated, culturally relevant "digital villages" within a monolithic app is critical for user retention. This prototype demonstrates the engineering capability to build:
*   Localized feed curation without dropping frame rates.
*   Asymmetric engagement hierarchies (e.g., VIP/Admin vs. Standard User).
*   High-concurrency interactions optimized for mobile-first users.

---

## 📦 Local Setup & Installation

```bash
# 1. Clone the repository
git clone [https://github.com/yourusername/iitm-village.git](https://github.com/yourusername/iitm-village.git)

# 2. Install dependencies
cd iitm-village
npm install

# 3. Set up environment variables
cp .env.example .env
# Configure your POSTGRES_URL and REDIS_URL in the .env file

# 4. Push database schema
npx prisma db push

# 5. Run the development server
npm run dev
