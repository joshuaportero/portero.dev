import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// ⚠️ TEMPORARY — hardcoded webhook
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1454568770839380133/UC5-oqKmFS3b2jWOaWAkbHQ-JLBAdOk7kJiUtd-pKekopdCIMEpEphvIGBJq7JP-QWRR";

function firstForwardedFor(xff: string | null): string | null {
  if (!xff) return null;
  return xff.split(",")[0]?.trim() || null;
}

export async function POST(req: NextRequest) {
  const h = req.headers;

  const ip =
    h.get("cf-connecting-ip") ||
    firstForwardedFor(h.get("x-forwarded-for")) ||
    h.get("x-real-ip") ||
    "unknown";

  const country =
    h.get("cf-ipcountry") || h.get("x-vercel-ip-country") || "unknown";

  const payload = {
    content: `📡 **New Visitor**
IP: \`${ip}\`
Country: \`${country}\`
Time: <t:${Math.floor(Date.now() / 1000)}:F>`,
  };

  await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json({ ok: true });
}
