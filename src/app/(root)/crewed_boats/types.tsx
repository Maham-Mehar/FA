// types.ts

export interface YachtDetailPageParams {
  slug: string;
}

export interface YachtDetailPageProps {
  params: Promise<YachtDetailPageParams>;
}
