"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { Loader2Icon } from "lucide-react";
import { TotalUsageContext } from "../../(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

function UsageTracker() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    user && getUserUsageData();
  }, [user, totalUsage]);

  const getUserUsageData = async () => {
    setLoading(true);
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      // @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    getTotalUsage(result);
    setLoading(false);
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((item) => {
      total += Number(item.aiResponse?.length);
    });
    setTotalUsage(total);
  };

  const clickHandler = () => {
    router.push("/dashboard/billing");
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3 cursor-pointer">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full mt-3 rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${(totalUsage / 10000) * 100}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2 flex items-center gap-1">
          {loading ? (
            <Loader2Icon width={18} className="animate-spin" />
          ) : (
            totalUsage
          )}
          /10,000 credit used
        </h2>
      </div>
      <Button
        onClick={clickHandler}
        className="w-full my-3 text-white"
        variant="secondary"
      >
        Upgrade Plan
      </Button>
    </div>
  );
}

export default UsageTracker;
