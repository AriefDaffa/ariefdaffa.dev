import { usePathname } from 'next/navigation';
import type { FC } from 'react';

const Navigation: FC = () => {
  const pathname = usePathname();

  const menuArr = [
    { path: '/projects', name: 'Projects' },
    { path: '/blog', name: 'Blog' },
    { path: '/about', name: 'About' },
  ];

  return (
    <div className=" dark:border-gray-800 md:max-w-[450px]">
      <div className="flex flex-row px-8 py-4 justify-between flex-1">
        <div className="text-gray-500">Navigate</div>
        <div className="self-end text-right flex flex-col gap-2">
          <a
            href={'/'}
            className={`cursor-pointer hover:text-primary ${
              pathname === '/' && 'font-bold text-primary'
            }`}
          >
            Home
          </a>
          {menuArr.map((item, idx) => (
            <a
              href={item.path}
              key={idx}
              className={`cursor-pointer hover:text-primary ${
                pathname.includes(item.path) && 'font-bold text-primary'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
