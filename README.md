# Image Proxy

A lightweight and efficient image proxy service built with Cloudflare Workers and Hono. This service helps you bypass CORS restrictions and cache images at the edge.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/madss-dev/imageProxy)

## Features

- Lightning-fast image proxying using Cloudflare's global network
- CORS-enabled for cross-origin requests
- Automatic caching at the edge
- Secure request handling with proper headers
- Supports all image formats
- Built with Hono for optimal performance

## Quick Start

### Prerequisites

- Node.js (Latest LTS version recommended)
- Cloudflare account
- Wrangler CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/madss-dev/imageProxy.git
   cd imageProxy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm run dev
   ```

### Deployment

Deploy to Cloudflare Workers with a single command:

```bash
npm run deploy
```

## Usage

To proxy an image, make a GET request to your worker's URL with the target image URL as a parameter:

```
https://your-worker.workers.dev/https://example.com/image.jpg
```

### Type Generation

Generate TypeScript types for your Worker configuration:

```bash
npm run cf-typegen
```

## 🛠️ Technical Details

The service is built using:
- [Hono](https://hono.dev/) - Fast, Lightweight, Web-standards Web Framework
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless platform
- TypeScript - For type safety and better developer experience

## Configuration

The service includes:
- Automatic image type detection
- Browser cache control headers
- CORS headers for cross-origin access
- Error handling for invalid URLs and failed requests

## License

MIT License - feel free to use this in your own projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you find this project helpful, please give it a star on GitHub!