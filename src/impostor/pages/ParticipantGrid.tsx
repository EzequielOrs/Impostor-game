import { useState } from 'react'
import { ParticipantItem } from './ParticipantItem.tsx'

type Participant = {
  id: number
  name: string
}



export const ParticipantGrid = () => {
    const [name, setName] = useState('')
    const [participants, setParticipants] = useState<Participant[]>([])

    const addParticipant = () => {
        const trimmed = name.trim()
        if (!trimmed) return
        setParticipants(prev => [...prev, { id: Date.now(), name: trimmed }])
        setName('')
    }

    const deleteParticipant = (id: number) => {
        setParticipants(prev => prev.filter(p => p.id !== id))
    }

    const editParticipant = (id: number, newName: string) => {
        const newParticipantsArr = participants.map(p => {
            if (p.id === id) {
                return {...p, name: newName}
            }
            return p
        })
        setParticipants(newParticipantsArr)
    }
    
    return (
        <div className="page-container">
            <h1 className="title">Impostor Game — Participantes</h1>
    
            <div className="form-row">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nombre"
                className="name-input"
            />
            <button onClick={addParticipant} className="btn btn-primary">
                Agregar
            </button>
            </div>
    
            <div className="participants-grid">
            {participants.map(p => { 
                return <ParticipantItem 
                    key={p.id} participant={p}
                    onDelete={deleteParticipant}
                    onEdit={editParticipant}
                    />
                }
            )}
            </div>
        </div>
    )
}