"use client";
import React, { useEffect, useState } from "react";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/Schema";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import { TEMPLATE } from "../_components/TemplateListSection";
import { useUser } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

function History() {
  const {user} = useUser();
  const [loading, setLoading] = useState<boolean>(true);
  const [history, setHistory] = useState<HISTORY[]>([]);

  useEffect(() => {
    user && getUserHistory();
  }, [user]);

  const getUserHistory = async () => {
    setLoading(true);
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      // @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(AIOutput.id));
    setHistory(result);
    setLoading(false);
  };

  const getTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates.find((template) => template.slug === slug);
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500 pt-2">
        Search your previously generated AI content
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-7 font-bold rounded-lg bg-slate-100 mt-5 p-3">
        <h2 className="sm:col-span-2">TEMPLATE</h2>
        <h2 className="sm:col-span-2">AI RESPONSE</h2>
        <h2 className="hidden sm:block">DATE</h2>
        <h2 className="hidden sm:block">WORDS</h2>
        <h2 className="ml-8">COPY</h2>
      </div>
      {loading ? <div className="flex items-center justify-center pt-5"><Loader2Icon width={72} className="animate-spin" /></div> : history.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-7 my-5 p-3">
            <h2 className="sm:col-span-2 flex gap-3 items-center">
              <Image
                src={String(getTemplateName(item?.templateSlug)?.icon)}
                alt="template"
                width={25}
                height={25}
              />
              {getTemplateName(item?.templateSlug)?.name}
            </h2>
            <h2 className="sm:col-span-2 line-clamp-3">{item?.aiResponse}</h2>
            <h2 className="hidden sm:block">{item.createdAt}</h2>
            <h2 className="hidden sm:block">{item?.aiResponse.length}</h2>
            <h2 className="ml-5">
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => {
                  navigator.clipboard.writeText(item?.aiResponse);
                }}
              >
                Copy
              </Button>
            </h2>
          </div>
          <hr className="my-5 border" />
        </>
      ))}
    </div>
  );
}

export default History;
