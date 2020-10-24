import { ApiRedditPost, ApplicationState, RedditPost, Status } from "../types";
import { createRedditComments, markCommentAsDeleted } from "./util";

export enum ActionTypes {
  FetchRedditPostLoad = "FETCH_REDDIT_POST_LOAD",
  FetchRedditPostSuccess = "FETCH_REDDIT_POST_SUCCESS",
  FetchRedditPostFailure = "FETCH_REDDIT_POST_FAILURE",
  DeleteRedditComment = "DELETE_REDDIT_COMMENT",
}

export interface Action {
  type: ActionTypes;
  redditPost?: ApiRedditPost;
  error?: Error;
  id?: string;
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
      const apiRedditPost = action.redditPost!;

      const redditPost = {
        ...apiRedditPost,
        totalComments: apiRedditPost.comments
          ? apiRedditPost.comments.length
          : 0,
      }! as RedditPost;

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
    case ActionTypes.DeleteRedditComment:
      const { redditPost, ...oldState } = state;
      const idToDelete = action.id!;
      const { comments, ...oldPostData } = redditPost!;

      const updatedRedditPost = {
        ...oldPostData,
        comments: comments.map((comment) =>
          markCommentAsDeleted(comment, idToDelete)
        ),
      };

      return {
        ...oldState,
        redditPost: updatedRedditPost,
      };
    default:
      throw new Error();
  }
};
