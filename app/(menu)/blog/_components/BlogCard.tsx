import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

interface BlogCardProps {
  url: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

const BlogCard: FC<BlogCardProps> = ({ date, desc, image, title, url }) => {
  return (
    <Link
      href={url}
      className="group flex gap-4 w-full h-60 cursor-pointer border-b-[1px] border-gray-200 dark:border-gray-600 pb-6"
    >
      <div className="md:w-4/6 flex flex-col justify-between">
        <div>
          <div className="text-xs text-gray-text dark:text-gray-400">
            {date}
          </div>
          <div className="text-2xl font-bold pt-1 group-hover:text-primary">
            {title}
          </div>
          <div className="line-clamp-2 pt-2 text-gray-text dark:text-gray-400">
            {desc}
          </div>
        </div>
        <div className="text-sm font-semibold flex justify-end">
          <div className="hover:underline">Read More</div>
        </div>
      </div>
      <div className="w-2/6 rounded-md overflow-hidden hidden md:block">
        <Image
          src={image}
          alt="x"
          className="size-full object-cover"
          width={300}
          height={300}
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
