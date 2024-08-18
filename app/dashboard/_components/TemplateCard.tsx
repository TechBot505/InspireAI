import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`} key={item.slug}>
      <div className="sm:p-5 p-4 shadow-md rounded-md border bg-white flex flex-col gap-2 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.description}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
