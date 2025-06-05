import { Metadata } from 'next';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BiFilterAlt } from 'react-icons/bi';
import type { FC } from 'react';

// import BlogCard from './_components/BlogCard';
import { getAllPosts } from '../../_lib/blogApi';
import { formatDate } from '../../_utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Post | Arief Daffa Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const Page: FC = () => {
  const blogs = getAllPosts();

  return (
    <div className="w-full flex">
      <div className={`w-full max-w-screen-xl mx-auto px-4`}>
        <div className="flex justify-center items-center gap-3 pt-6">
          <div className="flex w-full max-w-[600px] h-12 border-[1px] rounded-xl items-center px-4 gap-2">
            <FaMagnifyingGlass className="text-gray-400" size={20} />
            <input
              className="size-full bg-transparent px-1 rounded-sm  focus:outline-none"
              placeholder="Search posts..."
            />
          </div>
          <div className="border-[1px] h-12 w-12 flex items-center justify-center rounded-xl text-gray-400">
            <BiFilterAlt />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, idx) => (
            <Link
              href={`blog/${item.slug}`}
              key={idx}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative w-full h-72 ">
                <Image
                  src={item.image}
                  alt=""
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs">{formatDate(item.date)}</div>
                <div className="text-xl font-semibold min-h-14 line-clamp-2 group-hover:text-primary">
                  {item.title}
                </div>
                <div className="text-sm line-clamp-2">{item.desc}</div>
              </div>
              <div className="flex gap-2">
                {item.tags.map((el, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="border-[1px] py-1 px-2 rounded-full text-xs"
                  >
                    {`${el.charAt(0).toUpperCase()}${el.substring(1)}`}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="w-full flex gap-4 pb-2 pt-8">
          <div className="w-full space-y-6">
            {blogs.map((item, idx) => (
              <BlogCard
                key={idx}
                url={`blog/${item.slug}`}
                title={item.title}
                date={formatDate(item.date)}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
