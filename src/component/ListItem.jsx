import moment from 'moment'
import 'moment/locale/ko'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function ListItem({ note }) {
  const navigate = useNavigate()

  async function removeNote(id) {
    if (confirm('삭제 하시겠습니까?')) {
      await deleteDoc(doc(db, 'notes', id))
    }
  }

  function editNote() {
    navigate('/edit', { state: note })
  }


  return (
    <li>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className='extra'>
        {/* <div className='date'>{note.date.toDate().toLocaleString()}</div> */}
        <div className='date'>
          {moment(note.date.toDate()).format('YYYY-MM-DD hh:mm:ss')}
        </div>
        <div className='btns'>
          <span onClick={editNote}>수정</span>
          <span onClick={() => removeNote(note.id)}>삭제</span>
        </div>
      </div>
    </li>
  )
}