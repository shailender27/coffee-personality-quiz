import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET() {
  const count = (await redis.get<number>("quiz-completions")) ?? 0;
  return NextResponse.json({ count });
}

export async function POST() {
  const count = await redis.incr("quiz-completions");
  return NextResponse.json({ count });
}
