"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (template) => template.slug === props.params["template-slug"]
  );

  const generateAIContent = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col p-5 h-full bg-slate-100">
      <div className="w-5">
      <Link href="/dashboard">
        <Button className="flex gap-2">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => {
            console.log(v);
          }}
        />
        <div className="md:col-span-2 lg:col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
