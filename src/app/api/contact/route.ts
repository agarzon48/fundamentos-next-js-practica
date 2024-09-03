import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./transporter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { from, text } = body;

    await sendMail({
      from,
      text,
    });

    return NextResponse.json(
      { message: "Hello from the API!", method: "This is a POST request" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Hello from the API!", method: "This is a POST request" },
      { status: 500 }
    );
  }
}
