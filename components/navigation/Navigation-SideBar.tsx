import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";

import NavigationAction from "./Navigation-action";
import NaviagtionItem from "./navigation-item";
import { ScrollArea } from "@/components/ui/scroll-area";
const NavigationSideBar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="flex flex-col  items-center text-primary  dark:bg-[#1E1F22] h-full inset-y-0 ">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id}>
            <NaviagtionItem
              id={server.id}
              name={server.id}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default NavigationSideBar;
