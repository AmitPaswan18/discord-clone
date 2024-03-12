"use client";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import ActionToolTip from "@/components/action-tooltip";

interface NavigationItemsProps {
  id: string;
  imageUrl: string;
  name: string;
}

const NaviagtionItem = ({ id, imageUrl, name }: NavigationItemsProps) => {
  const params = useParams();
  const router = useRouter();
  return (
    <ActionToolTip side="right" align="center" label={name}>
      <button onClick={() => {}} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px] " : "h-[8px]"
          )}
        />
      </button>
    </ActionToolTip>
  );
};

export default NaviagtionItem;
