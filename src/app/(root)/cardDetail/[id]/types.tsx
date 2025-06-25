// Define the types for the dynamic route page
export interface NewsDetailPageParams {
  id: string;
}
// Make params a Promise as required by Next.js 15.3.3
export interface NewsDetailPageProps {
  params: Promise<NewsDetailPageParams>;
}