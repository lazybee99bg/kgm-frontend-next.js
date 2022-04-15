import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownLayout = ({ children }) => {
  return (
    <div>
      <ReactMarkdown
        className="markdown"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
        components={{
          // Map `h1` (`# heading`) to use `h2`s.
          h1: "h2",
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
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownLayout;
