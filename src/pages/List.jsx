import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import ListItem from '../component/ListItem'

export default function List() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push(doc.data())
      })
      setNotes(items)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ul className='list'>
      {notes.map(note => (
        <ListItem key={note.id} note={note} />
      ))}
    </ul>
  )
}