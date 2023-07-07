import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function Edit() {
  const note = useLocation().state
  const titleRef = useRef()
  const contentRef = useRef()
  const navigate = useNavigate()

  async function editNote(id) {
    const docRef = doc(db, 'notes', id)

    await updateDoc(docRef, {
      title: titleRef.current.value,
      content: contentRef.current.value,
    })

    navigate('/')
  }

  return (
    <div className='container'>
      <h2>글수정</h2>
      <div className='form'>
        <label>제목</label>
        <input type='text' defaultValue={note.title} ref={titleRef} />
        <label htmlFor=''>내용</label>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          defaultValue={note.content}
          ref={contentRef}
        ></textarea>
        <button onClick={() => editNote(note.id)}>수정하기</button>
      </div>
    </div>
  )
}