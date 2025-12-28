import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components for MDX
    h1: ({ children }) => (
      <h1 className="text-4xl font-heading font-bold text-primary-900 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-heading font-bold text-primary-800 mb-4 mt-8 pb-2 border-b border-neutral-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-heading font-semibold text-primary-700 mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 hover:text-accent-700 underline"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href || '#'} className="text-accent-600 hover:text-accent-700 underline">
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-500 bg-neutral-50 pl-4 py-3 my-4 italic text-neutral-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-100 text-primary-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-primary-950 text-neutral-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 bg-neutral-50 text-left text-sm font-semibold text-primary-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-neutral-700 border-t border-neutral-200">
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-neutral-200" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-primary-900">{children}</strong>
    ),
    ...components,
  };
}

