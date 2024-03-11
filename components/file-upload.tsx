import { UploadDropzone } from "@/lib/upoadthing";
import { X } from "lucide-react";
import Image from "next/image";

import "@uploadthing/react/styles.css";

interface Upload {
  onChange: (url?: string) => void;
  value: String;
  endPoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endPoint }: Upload) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="h-20 w-20 relative">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1  rounded-full absolute top-0 right-0 shadow-sm"
          type="button">
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
