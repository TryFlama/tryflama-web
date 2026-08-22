import type { APIRoute } from 'astro'
import { REVIEWS, type Review } from '../../data/reviews'

const BUSINESS_UNIT_ID = '6a7948fc06172e18ffc2c613'

async function fetchTrustpilotReviews(): Promise<Review[]> {
  const res = await fetch(
    `https://www.trustpilot.com/api/categoriespages/${BUSINESS_UNIT_ID}/reviews?sort=latest&pageSize=3`,
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
    }
  )
  if (!res.ok) throw new Error(`Trustpilot responded ${res.status}`)
  const data = await res.json()
  return (data?.reviews ?? []).slice(0, 3).map((r: any) => ({
    name: r.consumer?.displayName ?? 'Anónimo',
    stars: r.rating ?? 5,
    date: r.dates?.publishedDate ?? '',
    text: r.reviewContent?.headline
      ? `${r.reviewContent.headline} — ${r.reviewContent.text ?? ''}`
      : (r.reviewContent?.text ?? ''),
    country: r.consumer?.country ?? '',
    source: 'Trustpilot' as const,
  }))
}

export const GET: APIRoute = async () => {
  let reviews = REVIEWS
  try {
    const live = await fetchTrustpilotReviews()
    if (live.length) reviews = [...live, ...REVIEWS]
  } catch {}

  return new Response(JSON.stringify(reviews), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
