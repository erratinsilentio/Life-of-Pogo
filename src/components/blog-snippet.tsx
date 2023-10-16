import { FC, useEffect, useState } from "react";
import { getCollection, getEntry } from "astro:content";

interface BlogSnippetProps {
  count: number;
}

const BlogSnippet: FC<BlogSnippetProps> = (number) => {
  const [posts, setPosts] = useState<unknown>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogPosts = await getCollection("blog");
      console.log(blogPosts);
      setPosts(blogPosts);
    };

    fetchBlogs();
  }, []);

  return <div>blog-snippet</div>;
};

export default BlogSnippet;
