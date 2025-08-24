export type TStrapiQueryParams = {
    filters: any;
    populate?: any;
    pagination?: { limit?: number, start?: number };
    sort?: any;
}

export type TServerImage = {
    id: number;
    name: string;
    url: string;
    width: number;
    height: number;
    size: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    alternativeText: string;
    priority: boolean;
    sizes: string;
    placeholder: string;
    className: string;
    fill: boolean;
}

export type TMember = {
    id: number;
    name: string;
    role: string;
    description: string;
    avatar: TServerImage;
    slug: string;
    descriptions: {
        role: string;
        content: string;
        language: {
            code: string;
        };
    }[];
}

export type TPostType = {
    id: number;
    name: string;
    description?: string;
}

export type TAuthor = {
    id: number;
    name: string;
    slug: string;
    bio?: string;
    avatar?: TServerImage;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type TPost = {
    inherited_feature_metadata: boolean;
    alt_feature_metadata?: string;
    caption_feature_metadata?: string;
    id: number;
    title: string;
    description: string;
    publish_date: string;
    publishedAt: string;
    slug: string;
    feature_media: TServerImage;
    createdAt: string;
    updatedAt: string;
    post_type: TPostType;
    authors: TAuthor[];
    content: string;
    tags: any[];
    categories: any[];
    platform_url: string;
    created_date: string;
};

export type TLighthouseCategory = {
  id: string;
  title: string;
  score: number;
  description: string;
  manualDescription?: string;
  auditRefs: {
    id: string;
    weight: number;
    group: string;
    result: {
      score: number;
      displayValue: string;
      description: string;
      details?: any;
    };
  }[];
};

export type TLighthouseResult = {
  lighthouseVersion: string;
  requestedUrl: string;
  finalUrl: string;
  fetchTime: string;
  categories: {
    performance: TLighthouseCategory;
    accessibility: TLighthouseCategory;
    'best-practices': TLighthouseCategory;
    seo: TLighthouseCategory;
  };
  audits: Record<string, any>;
  timing: {
    entries: any[];
    total: number;
  };
};

export type TLighthouseReport = {
  url: string;
  timestamp: string;
  overallScore: number;
  categories: {
    performance: {
      score: number;
      summary: string;
      recommendations: string[];
    };
    accessibility: {
      score: number;
      summary: string;
      recommendations: string[];
    };
    bestPractices: {
      score: number;
      summary: string;
      recommendations: string[];
    };
    seo: {
      score: number;
      summary: string;
      recommendations: string[];
    };
  };
  executiveSummary: string;
  priorityActions: string[];
};