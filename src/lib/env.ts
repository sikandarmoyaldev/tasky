import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
    client: {
        NEXT_PUBLIC_SITE_TAGS: z.string().min(1),
        NEXT_PUBLIC_SITE_TITLE: z.string().min(1),
        NEXT_PUBLIC_SITE_DESCRIPTION: z.string().min(1),
    },
    experimental__runtimeEnv: {
        // Public envs
        NEXT_PUBLIC_SITE_TAGS: process.env.NEXT_PUBLIC_SITE_TAGS,
        NEXT_PUBLIC_SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,
        NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    },
});
