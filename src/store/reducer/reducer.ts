import {
  ApiRedditPost,
  ApplicationState,
  RedditComment,
  RedditPost,
  Status,
} from "../types";
import { createRedditComments } from "./util";

export enum ActionTypes {
  FetchRedditPostLoad = "FETCH_REDDIT_POST_LOAD",
  FetchRedditPostSuccess = "FETCH_REDDIT_POST_SUCCESS",
  FetchRedditPostFailure = "FETCH_REDDIT_POST_FAILURE",
}

export interface Action {
  type: ActionTypes;
  redditPost?: ApiRedditPost;
  error?: Error;
}

export const reducer = (
  state: ApplicationState,
  action: Action
): ApplicationState => {
  switch (action.type) {
    case ActionTypes.FetchRedditPostLoad:
      return {
        ...state,
        status: Status.Loading,
        redditPost: undefined,
        error: undefined,
      };
    case ActionTypes.FetchRedditPostSuccess: {
      const { redditPost: apiRedditPost } = action;

      const redditPost = { ...apiRedditPost }! as RedditPost;

      redditPost.comments = createRedditComments(redditPost.comments);

      return {
        ...state,
        status: Status.Success,
        redditPost,
        error: undefined,
      };
    }

    case ActionTypes.FetchRedditPostFailure:
      return {
        ...state,
        status: Status.Failure,
        redditPost: undefined,
        error: action.error,
      };
    default:
      throw new Error();
  }
};
