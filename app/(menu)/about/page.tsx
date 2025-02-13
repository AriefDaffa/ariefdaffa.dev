import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import type { FC } from 'react';

import { getAboutMeBySlug } from '../../_lib/aboutApi';
import { renderMd } from '../../_lib/renderMd';

export const metadata: Metadata = {
  title: 'About Me | Arief Daffa Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const Page: FC = async () => {
  const data = getAboutMeBySlug('about-me');

  if (!data) {
    return notFound();
  }

  const content = await renderMd(data);

  return (
    <div className="w-full flex">
      <div className={`w-full max-w-screen-md mx-auto px-4 `}>
        <div className="w-full flex py-20">
          <div className="flex flex-col justify-center gap-10">
            <div className="flex justify-center ">
              <Image
                src="/images/about/photo.png"
                alt=""
                width={500}
                height={500}
                className="w-3/4 object-cover"
                loading="eager"
              />
            </div>
            <div
              className="prose dark:prose-invert text-justify"
              dangerouslySetInnerHTML={{ __html: content.value }}
            />
            <div className="w-full flex justify-center">
              <Image
                src="/images/about/agni-dark.png"
                alt=""
                width={300}
                height={300}
                className="hidden dark:block"
                loading="eager"
              />
              <Image
                src="/images/about/agni-light.png"
                alt=""
                width={300}
                height={300}
                className="dark:hidden"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
