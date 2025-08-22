export interface Service {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  slugHeroTitle: string;
  slugHeroDescription: string;
  slugHeroImage: string;
  slugContentImage: string;
  slugContentDescription: string;
  slugAdvantages: {
    title: string;
    description: string;
  }[];
  slugCtaTitle: string;
  slugCtaDescription: string;
  slugCtaButton: string;
  slugCtaImage: string;
}
