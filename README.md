# [Speech Guard](https://github.com/sohamnandi77/speech-guard) &middot; [![Author Soham](https://img.shields.io/badge/Author-Soham-%3C%3E)](https://www.sohamnandi.com)

Detecting toxic content has always been slow and expensive. Not anymore. Introducing SpeechGuard, a fast and free profanity filter for your web apps.

### Why Choose SpeechGuard?

- **Fast and Cost-Effective:** Much faster and cheaper to run than AI-based solutions.
- **Accurate:** Reliable detection of profanity and toxic language.

### Key Features

- **Real-Time Results:** Instant profanity detection for seamless integration.
- **Customizable Filters:** Tailor the profanity filter to your specific needs.
- **Scalable:** Handles large volumes of requests efficiently.

### Example Usage

#### API Endpoint:

```
POST https://speech-guard.sohamnandi77.workers.dev
```

#### Example Request:

```javascript
const res = await fetch("https://speech-guard.sohamnandi77.workers.dev", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "this is definitely not a swear word" }),
});

const data = await res.json();
console.log(data); // Results will be shown here
```

### Use Case

Let SpeechGuard API do the dirty work of keeping your user input clean. Detect profanity efficiently to maintain a safe and respectful environment for your platform.

---

## Getting Started

This project is built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.
