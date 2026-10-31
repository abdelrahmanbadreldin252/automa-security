import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SAMPLE_BLOG_POSTS } from "@/lib/mock-data";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";
import { PublicBadge } from "@/components/public/public-badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = SAMPLE_BLOG_POSTS.find((post) => post.slug === slug && post.published);
  const title = article?.title ?? "Article not found";
  const description = article?.excerpt ?? "No article has been published at this address.";
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = SAMPLE_BLOG_POSTS.find((p) => p.slug === slug && p.published);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
      <Link href={ROUTES.blog} className="inline-flex min-h-10 items-center gap-2 text-xs font-mono text-automa-green hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Security Briefings
      </Link>
      <div className="space-y-4">
        <PublicBadge variant="emerald">{article.category}</PublicBadge>
        <h1 className="font-display text-3xl font-bold text-automa-text sm:text-4xl">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-automa-muted">
          <span>{article.author}</span><span>•</span><span>{article.publishedAt}</span><span>•</span><span>{article.readTime}</span>
        </div>
      </div>
      <CyberCard className="space-y-4 text-base text-automa-text/90 leading-relaxed">
        {article.content.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
      </CyberCard>
    </article>
  );
}
