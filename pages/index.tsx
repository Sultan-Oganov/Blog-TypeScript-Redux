import React from 'react'
import axios from 'axios'
import MainLayout from '../components/MainLayout'
import classes from '../styles/posts.module.scss'
import PostsList from '../components/Posts/PostsList'
import { NextThunkDispatch, wrapper } from '../store'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { FetchPosts } from '../store/action-creators/posts'
import { IPost } from '../types/posts'

interface PostsListProps {
  posts: IPost[]
}
const Index: React.FC<PostsListProps> = () => {
  const { posts, error } = useTypedSelector(state => state.posts)

  if (error) {
    return <MainLayout>
      <h1>{error}</h1>
    </MainLayout>
  }

  return (
    <MainLayout>
      <h2 className={classes.title}> Latest - posts</h2>
      <PostsList posts={posts} />
    </MainLayout >
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await FetchPosts())
})

export default Index