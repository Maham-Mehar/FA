export interface NewsDetailPageParams {
  id: string;
}

export interface NewsDetailPageProps {
  params: Promise<NewsDetailPageParams>; // ✅ Next.js 15 requires params to be a Promise
}
