import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 여기서 DB 조회 등 할 수 있다
  return NextResponse.json({ test: "hi" }, { status: 200 });
}

export async function HEAD() {}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}

export async function PATCH() {}

export async function OPTIONS() {}
