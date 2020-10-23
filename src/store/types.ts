export interface ApiRedditPost {
  subreddit: string;
  selftext: string;
  title: string;
  subreddit_name_prefixed: string;
  name: string;
  score: number;
  thumbnail: string;
  selftext_html: string;
  id: string;
  permalink: string;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  is_video: boolean;
  author: string;
  ups: number;
  comments?: ApiRedditComment[];
}
export interface ApiRedditComment {
  created_utc: number;
  subreddit_name_prefixed: string;
  subreddit: string;
  depth: number;
  permalink: string;
  body_html: string;
  downs: number;
  body: string;
  author: string;
  id: string;
  ups: number;
  parent_id?: string;
}

export interface RedditPost extends ApiRedditPost {
  comments: RedditComment[];
  totalComments: number;
}

export interface RedditComment extends ApiRedditComment {
  comments: RedditComment[];
}

export enum Status {
  Initial = "INITIAL",
  Loading = "LOADING",
  Success = "SUCCESS",
  Failure = "FAILURE",
}

export interface ApplicationState {
  status: Status;
  redditPost?: RedditPost;
  error?: any;
}

export interface StateContextProps {
  state: ApplicationState;
  fetchRedditPost: (url: string) => void;
}
