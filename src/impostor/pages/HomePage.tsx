
import { useState } from 'react'
import { ParticipantItem } from './ParticipantItem.tsx'

type Participant = {
  id: number
  name: string
}

export const HomePage = () => {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<Participant[]>([])

  const addParticipant = () => {
    const trimmed = name.trim()
    if (!trimmed) return
    setParticipants(prev => [...prev, { id: Date.now(), name: trimmed }])
    setName('')
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
        {participants.map(p => (
          <ParticipantItem key={p.id} participant={p} />
        ))}
      </div>
    </div>
  )
}