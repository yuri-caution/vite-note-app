import { db } from '../firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function List() {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        const q = query(collection(db, "notes"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({
                    ...doc.data(),
                    id: doc.id,
                });
            });
            setNotes(items)
        });

        return () => unsubscribe()
    }, [])

    console.log(notes)


  return (
    <ul className="list">
        {notes.map(note => (
            <li>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="extra">
                <div>2023-12-30</div>
                <div className="btns">
                <span>수정</span>
                <span>삭제</span>
                </div>
            </div>
            </li>
        ))}
  </ul>

  )
}
