import { FC, useEffect, useState } from 'react'
import { Header, Container, Section, BookmarksList } from '../../components'
import { getBookmarks } from '../../localStorage/bookmarksStorage'
import { useTranslation } from '../../shared'
import type { Bookmark } from '../../types'

export const BookmarksScreen: FC = () => {

  const [bookmarks, setBookmarks] = useState <Array<Bookmark>>([])
  const translation = useTranslation()

  useEffect (() => {
    const fetchBookmarks = async () => {
      const result = await getBookmarks();
      result && setBookmarks(result);
    };
    fetchBookmarks();
  }, [bookmarks])

  return (
    <Container>
      <Section>
        <Header title={translation.favorite}/>
        <BookmarksList list={bookmarks}/>
      </Section>
    </Container>
  )
}