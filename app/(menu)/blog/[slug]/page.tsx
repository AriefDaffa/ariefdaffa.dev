import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';

import { getAllPosts, getPostBySlug } from '@/app/_lib/blogApi';
import { renderMd } from '@/app/_lib/renderMd';
import { formatDate } from '@/app/_utils/formatDate';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  const post = getAllPosts();

  return post.map((item) => ({ slug: item.slug }));
};

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params;

  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Arief Daffa Personal Website`;

  return {
    title,
  };
};

const Page: FC<PageProps> = async ({ params: paramsAsync }) => {
  const params = await paramsAsync;

  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await renderMd(post.content);

  return (
    <div className="w-full flex">
      <div className={`w-full mx-auto px-4 `}>
        <div className="flex flex-col items-center space-y-10 pt-10">
          <div className="text-center max-w-screen-md">
            <div className="text-4xl font-bold">{post.title}</div>
            <div className="text-sm text-gray-text">
              {formatDate(post.date)} - Arief Daffa
            </div>
          </div>
          <div className="w-full rounded-md overflow-hidden max-w-screen-xl">
            <Image
              src={post.image}
              alt="x"
              width={960}
              height={960}
              className="size-full object-cover"
              loading="eager"
            />
          </div>
        </div>
        <div className="w-full py-10 gap-8 relative md:flex md:justify-center">
          <div
            className="w-full prose max-w-screen-lg dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: content.value }}
          />
          {/* <main className="">{content.value}</main> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
