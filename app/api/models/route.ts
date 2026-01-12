import { NextResponse } from "next/server";
import prisma from "../../../app/lib/db";
import { promises as fs } from "fs";
import path from "path";

// CREATE Model
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const model_name = formData.get("model_name") as string;
    const model_age = formData.get("model_age") as string;
    const model_location = formData.get("model_location") as string;
    const model_desc = formData.get("model_desc") as string;

    console.log("Received data:", { model_name, model_age, model_location, model_desc });

    if (!model_name || !model_age || !model_location || !model_desc) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const parsedAge = parseInt(model_age, 10);
    if (isNaN(parsedAge)) {
      return NextResponse.json(
        { error: "Age must be a valid number" },
        { status: 400 }
      );
    }

    let imageUrl = null;

    // Upload image if provided
    if (file && file.type.startsWith("image/")) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = path.join(process.cwd(), "public/uploads/models");
      await fs.mkdir(uploadDir, { recursive: true });

      const fileName = `model-${Date.now()}.${file.type.split("/")[1]}`;
      const filePath = path.join(uploadDir, fileName);
      await fs.writeFile(filePath, buffer);
      imageUrl = `/uploads/models/${fileName}`;
    }

    // Create model in database
    const model = await prisma.model.create({
      data: {
        model_name,
        slug: model_name.toLowerCase().replace(' ', '-'),
        model_age: parsedAge,
        model_location,
        model_desc,
        model_image: imageUrl,
      },
    });

    return NextResponse.json({
      success: true,
      model,
    });
  } catch (error) {
    console.error("Create model error:", error);
    return NextResponse.json({ error: "Failed to create model" }, { status: 500 });
  }
}

// READ All Models
export async function GET() {
  try {
    const models = await prisma.model.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      models,
    });
  } catch (error) {
    console.error("Fetch models error:", error);
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}