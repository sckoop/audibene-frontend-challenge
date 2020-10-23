import { initialState } from "../store";
import { ApiRedditPost, ApplicationState, Status } from "../types";
import { ActionTypes, reducer } from "./reducer";

describe("store/reducer", () => {
  it("Throw error for invalid action", () => {
    const type = "INVALID_ACTION" as any;
    expect(() => reducer({} as ApplicationState, { type })).toThrowError();
  });
  it("Change status to loading when fetching api data", () => {
    const type = ActionTypes.FetchRedditPostLoad;

    const { status } = reducer(initialState, { type });
    expect(status).toBe(Status.Loading);
  });

  it("Change status to failure in case the api has an error", () => {
    const apiError = new Error("Oh no it's broken");

    const { status, error } = reducer(initialState, {
      type: ActionTypes.FetchRedditPostFailure,
      error: apiError,
    });
    expect(status).toBe(Status.Failure);
    expect(error).toBe(apiError);
  });

  it("Loaded api loaded without comments", () => {
    const apiRedditPost = { title: "hey" } as ApiRedditPost;

    const { status, redditPost } = reducer(initialState, {
      type: ActionTypes.FetchRedditPostSuccess,
      redditPost: apiRedditPost,
    });

    expect(status).toBe(Status.Success);
    expect(redditPost).toEqual({ ...apiRedditPost, comments: [] });
  });

  it("Structure comments", () => {
    const root = {
      created_utc: 1570697457,
      depth: 0,
      id: "1",
    };

    const rootFirstChild = {
      created_utc: 1570697457,
      depth: 1,
      id: "2",
      parent_id: "1",
    };
    const rootSecondChild = {
      created_utc: 1570697457,
      depth: 1,
      id: "3",
      parent_id: "1",
    };

    const rootFirstFirstChild = {
      created_utc: 1570697457,
      depth: 2,
      id: "4",
      parent_id: "2",
    };

    const rootFirstSecondChild = {
      created_utc: 1570697457,
      depth: 2,
      id: "6",
      parent_id: "2",
    };
    const anotherRoot = {
      created_utc: 1570697457,
      depth: 0,
      id: "7",
    };

    const apiComments = [
      rootFirstChild,
      root,
      rootFirstSecondChild,
      anotherRoot,
      rootFirstFirstChild,
      rootSecondChild,
    ];
    const apiRedditPost = { comments: apiComments } as ApiRedditPost;

    const { redditPost } = reducer(initialState, {
      type: ActionTypes.FetchRedditPostSuccess,
      redditPost: apiRedditPost,
    });

    const comments = redditPost!.comments!;

    expect(comments[0].id).toEqual(anotherRoot.id);
    expect(comments[1].id).toEqual(root.id);

    const firstComments = comments[1].comments;
    expect(firstComments[0].id).toEqual(rootSecondChild.id);
    expect(firstComments[1].id).toEqual(rootFirstChild.id);

    const firstFirstComments = firstComments[1].comments;

    expect(firstFirstComments[0].id).toEqual(rootFirstFirstChild.id);
    expect(firstFirstComments[1].id).toEqual(rootFirstSecondChild.id);
  });

  it("Sorting comments", () => {
    const root = {
      created_utc: 1,
      depth: 0,
      id: "1",
    };
    const rootChild = {
      created_utc: 42,
      depth: 1,
      id: "2",
      parent_id: "1",
    };

    const anotherRoot = {
      created_utc: 10,
      depth: 0,
      id: "3",
    };

    const anotherRootChild = {
      created_utc: 22,
      depth: 1,
      id: "4",
      parent_id: "3",
    };

    const apiComments = [root, rootChild, anotherRoot, anotherRootChild];

    const apiRedditPost = { comments: apiComments } as ApiRedditPost;

    const { redditPost } = reducer(initialState, {
      type: ActionTypes.FetchRedditPostSuccess,
      redditPost: apiRedditPost,
    });

    const comments = redditPost!.comments!;

    expect(comments[0].id).toBe(root.id);
    expect(comments[1].id).toBe(anotherRoot.id);
  });
});
