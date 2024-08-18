import React from 'react';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/DB';
import { AIOutput } from '@/utils/Schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import { TEMPLATE } from '../_components/TemplateListSection';

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();
  return (
    <div className='h-full bg-slate-100'>History</div>
  )
}

export default History;