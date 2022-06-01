import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const MarkdownLayout = ({ children }) => {
  const [markdown, setMarkdown] = React.useState("");
  useEffect(() => {
    if (children) {
      const _markdown = children.replaceAll("</br>", "</br>\n");
      setMarkdown(_markdown);
    }
  }, [children]);
  return (
    <ReactMarkdown
      className="markdown"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
      components={{
        // Map `h1` (`# heading`) to use `h2`s.
        h1: (props) => <h2 {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-3xl" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-2xl" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-xl" {...props} />,
        h5: ({ node, ...props }) => <h5 className="text-lg" {...props} />,
        h6: ({ node, ...props }) => <h6 className="text-md" {...props} />,

        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        p: ({ node, ...props }) => (
          <p
            style={{
              // fontSize: "18px",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-400 hover:text-blue-500" {...props} />
        ),
        table: ({ node, ...props }) => (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead
            style={{
              border: "solid 1px black",
              backgroundColor: "gray",
              textAlign: "center",
            }}
            {...props}
          />
        ),
        tr: ({ node, ...props }) => (
          <tr
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        tbody: ({ node, ...props }) => (
          <tbody
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        th: ({ node, ...props }) => (
          <th
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),

        img: ({ node, ...props }) => (
          <div className="w-full flex justify-center">
            <img {...props} />
          </div>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownLayout;
