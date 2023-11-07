import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

interface pageProps {}

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & open-source text similarit API',
};
const page = async ({}) => {
  const user = await getServerSession(authOptions);
  //fix me
  if (!user) return notfound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">{apiKey ? <></> : <></>}</div>
  );
};

export default page;
