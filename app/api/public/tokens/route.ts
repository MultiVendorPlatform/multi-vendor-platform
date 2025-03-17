import { dbConnect } from "lib/dbConnects";
import { tokenValidationSchema } from "/types/schemas";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  return Response.json({ message: "message" }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const validateFields = tokenValidationSchema.safeParse(body);
    if (!validateFields.success) {
      return Response.json(
        {
          message: "Invalid fields",
          errors: validateFields.error.flatten().filedErrors,
        },
        {
          status: 200,
        }
      );
    }

    const data = await new token(body).save();
    return NextResponse.json(
      {
        message: "Token created successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
