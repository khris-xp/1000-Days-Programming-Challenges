export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface FlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface ArticleI {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: any;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at?: any;
  crossposted_at?: any;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
  flare_tag: FlareTag;
}
