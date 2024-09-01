import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article, articles } from "@/data";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | AI in Drug Discovery`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [article.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-[#021373]">
          Article not found
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-[#D94814] hover:text-[#021373] transition-colors duration-200"
        >
          ← Back to Articles
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#021373] mb-4">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600">
          <time dateTime={article.date} className="mr-4">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mr-4">|</span>
          <span className="mr-4">{article.author}</span>
          <span className="mr-4">|</span>
          <span>{article.authorRole}</span>
        </div>
      </header>

      <div className="relative w-full h-64 sm:h-96 mb-8">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {article.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 text-blue-950">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold text-[#021373] mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#021373] text-white px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#021373] mb-4">
          Share this article
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#D94814] hover:bg-[#021373] text-white px-4 py-2 rounded transition-colors duration-200">
            Share on Twitter
          </button>
          <button className="bg-[#D94814] hover:bg-[#021373] text-white px-4 py-2 rounded transition-colors duration-200">
            Share on Facebook
          </button>
          <button className="bg-[#D94814] hover:bg-[#021373] text-white px-4 py-2 rounded transition-colors duration-200">
            Share on LinkedIn
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold text-[#021373] mb-4">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles
            .filter((a) => a.id !== article.id)
            .slice(0, 2)
            .map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <Image
                  src={relatedArticle.imageUrl}
                  alt={relatedArticle.title}
                  width={400}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#021373] mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedArticle.excerpt}</p>
                  <Link
                    href={`/news/${relatedArticle.id}`}
                    className="text-[#D94814] hover:text-[#021373] transition-colors duration-200"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </article>
  );
}
