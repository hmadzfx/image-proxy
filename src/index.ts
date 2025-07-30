import { Hono } from "hono";
interface CloudflareBindings {}
const app = new Hono<{ Bindings: CloudflareBindings }>();
function extractDomain(url: string): string {
  const match = url.match(/^(https?:\/\/[^\/]+)/i);
  return match ? match[1] : '';
}
app.get('/:url{.*}', async (c) => {
  try {
    const url = decodeURIComponent(c.req.param('url'));
    try {
      new URL(url);
    } catch {
      return c.text('Invalid URL', 400);
    }
    const domain = extractDomain(url);
    if (!domain) {
      return c.text('Invalid URL format', 400);
    }
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': domain,
        'Origin': domain
      }
    });
    if (!response.ok) {
      return c.text('Failed to fetch image', 500);
    }
    const contentType = response.headers.get('content-type');
    const arrayBuffer = await response.arrayBuffer();
    return new Response(arrayBuffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=31536000',
      }
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return c.text('Failed to proxy image', 500);
  }
});
export default app;

//should work just fine...