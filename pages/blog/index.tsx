import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Blog} from '@/data/types';
import { blogs } from '@/data/blog_data';


const BlogHomePage: React.FC = () => {
  const [filteredBlogs, setFilteredBlogs] = React.useState<Blog[]>(blogs);
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      setFilteredBlogs(blogs.filter((blog) => blog.tags.includes(tag)));
    } else {
      setFilteredBlogs(blogs);
    }
  };

  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

  return (
    <div className="container mx-auto p-4">
      <div className='bg-gray-100 mb-4 p-4 rounded-lg'><h1 className="text-2xl font-bold">Blog</h1></div>

      <div className="mb-4 roboto-regular">
        <button
          className={`mr-2 mb-2 px-4 py-2 rounded ${
            selectedTag === null ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTagFilter(null)}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              selectedTag === tag ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleTagFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} passHref>
            <div className="border rounded p-4 cursor-pointer bg-gray-100 hover:shadow-md transition-shadow h-[300px] flex flex-col"> {/* Fixed height and flex column */}
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1000}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="flex-grow overflow-hidden"> {/* Content wrapper with overflow handling */}
                <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
                <p className="text-gray-600 mb-2">{blog.description}</p>
              </div>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHomePage;