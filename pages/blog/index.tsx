import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  slug: string; // Used for routing
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags: string[]; // For filtering
}

const blogs: Blog[] = [
  {
    slug: 'pistachios_vs_almonds',
    title: 'Pistachios vs Almonds: Which is Better for Your Health?',
    description: 'When it comes to healthy snacking, nuts are often at the top of the list. Among the most popular are pistachios and almonds ...',
    date: '2025-03-08',
    imageUrl: '/blog/banner/pistachios_vs_almonds.jpg',
    tags: ['food', 'snack'],
  }
];

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
      <h1 className="text-3xl font-bold mb-4 roboto-regular">My Blog</h1>

      <div className="mb-4 roboto-regular">
        <button
          className={`mr-2 mb-2 px-4 py-2 rounded ${
            selectedTag === null ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTagFilter(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
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
            <div className="border rounded p-4 cursor-pointer hover:shadow-md transition-shadow">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1000} // Set an initial width (will be responsive)
                height={500} // Set an initial height (adjust aspect ratio as needed)
                layout="responsive" // Make the image responsive
                objectFit="cover" // Cover the container area
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
              <p className="text-gray-600 mb-2">{blog.description}</p>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHomePage;