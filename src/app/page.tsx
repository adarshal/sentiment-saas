"use server"

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default function HomePage() {
  const session = await auth();

  const quota = await db.apiQuota.findUniqueOrThrow({
    where: {
      userId: session?.user.id,
    },
  });
  
  return (
    <div>

    </div>
  );
}
