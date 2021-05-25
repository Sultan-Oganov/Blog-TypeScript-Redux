export interface IPost {
    id?: number
    title: string
    body: string
}
export interface PostsState {
    posts: IPost[]
    error: string
}
export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    ADD_POSTS = 'ADD_POSTS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}
interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
    payload: IPost[]
}

interface AddPostsAction {
    type: PostsActionTypes.ADD_POSTS
    payload: IPost[]
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR
    payload: string
}
export type PostsAction =
    | FetchPostsAction
    | AddPostsAction
    | FetchPostsErrorAction