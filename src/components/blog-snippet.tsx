import React, { FC, useEffect, useState } from "react";
import { getCollection } from "astro:content";

interface BlogSnippetProps {
  count: number;
}

const BlogSnippet: FC<BlogSnippetProps> = ({ count = 3 }) => {
  const [posts, setPosts] = useState<any[]>([]); // Adjust the type based on the structure of your data

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogPosts = await getCollection("blog");
        console.log(blogPosts[0]);
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section>
      {posts.slice(0, count).map((post, index) => {
        console.log(post.id);
        return (
          <article key={index}>
            <h1>{post.data.title}</h1>
            <p>{post.data.date.toDateString()}</p>
          </article>
        );
      })}
    </section>
  );
};

export default BlogSnippet;
