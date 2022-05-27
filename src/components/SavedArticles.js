import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import { db, auth } from '../firebase'
import NewsList from './NewsList'

const SavedArticles = () => {

  const [user] = useAuthState(auth);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    if (user) {
      const _articles = [];

      getDocs(collection(db, 'users', user.uid, 'articles'))
        .then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            _articles.push(doc.data())
          });
        })
        .then(() => setSavedArticles(_articles))
    }
  }, [user])

  return (
    <div className="container">
      {user ? <NewsList title="Bookmarked Articles" articles={savedArticles}/> : <p>Please sign in to view your bookmarks</p>}
    </div>
  )
}

export default SavedArticles