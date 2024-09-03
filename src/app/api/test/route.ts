import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "Hello from the API!", method: "This is a GET request" },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    console.log("Request: ", requestBody);
    return NextResponse.json(
      { message: "Hello from the API!", method: "This is a POST request" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Hello from the API!", method: "This is a POST request" },
      { status: 500 }
    );
  }
}
