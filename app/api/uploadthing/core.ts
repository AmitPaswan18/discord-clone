import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { auth } from "@clerk/nextjs"

const f = createUploadthing();

const handleauthentication = () => {
    const { userId } = auth()
    if (!userId) throw new Error("Unauthorized user")
    return { userId: userId }
}

export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => handleauthentication())
        .onUploadComplete(() => { })
    ,
    messageFile: f(["image", "pdf"])
        .middleware(() => handleauthentication())
        .onUploadComplete(() => { })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;