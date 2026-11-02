import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const datos = {
    "m.homeserver": {
        "base_url": "https://chatmatrix.tryflama.com:8443"
    }
  };

  return new Response(
    JSON.stringify(datos), 
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
