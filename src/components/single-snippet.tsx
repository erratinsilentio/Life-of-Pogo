import type { FC } from "react";

interface BlogSnippetProps {
  data: any;
}

const singleSnippet: FC<BlogSnippetProps> = (data) => {
  console.log(data);
  return <div>data</div>;
};

export default singleSnippet;
