import { ActionTypes, ApplicationState, RedditPost, Status } from "./types";

export const reducer = (
  state: ApplicationState,
  action: any
): ApplicationState => {
  switch (action.type) {
    case ActionTypes.FetchRedditPostLoad:
      return {
        ...state,
        status: Status.Loading,
        redditPost: undefined,
        error: undefined,
      };
    case ActionTypes.FetchRedditPostSuccess:
      const redditPost = action.data as RedditPost;

      return {
        ...state,
        status: Status.Success,
        redditPost,
        error: undefined,
      };
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
