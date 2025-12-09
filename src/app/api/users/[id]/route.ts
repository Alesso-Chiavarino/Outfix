import { UsersService } from "@/services/users.service";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: any) {
    console.log("HOLA")

    const id = params.id;
    const data = await req.formData();

    console.log("data", data)

    const name = data.get("name")?.toString() ?? undefined;
    const role: any = data.get("role")?.toString() ?? undefined;

    await UsersService.updateUser(id, {
        name,
        role,
    });

    // 🔥 Redirect ABSOLUTO (necesario en route handlers)
    return NextResponse.redirect(new URL("/admin/users", req.url));
}