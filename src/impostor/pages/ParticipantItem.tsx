import {useState} from 'react'

type Participant = {
  id: number
  name: string
}

type ParticipantItemProps = {
  participant: Participant
  onDelete: (id: number) => void
  onEdit: (id: number, name: string) => void
}

function ParticipantItem({ participant, onDelete, onEdit }: ParticipantItemProps ) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftName, setDraftName] = useState(participant.name)

  const handleSave = () =>{
    const trimmed = draftName.trim()
    if(trimmed === "") return;
    onEdit(participant.id, trimmed)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setDraftName(participant.name)
  }

  if (isEditing) {
    return (
      <div className="participant-item">
        <input
               value={draftName}
               onChange={e => setDraftName(e.target.value)}
               className="name-input"
            />
      <div className="participant-actions">
            <button onClick={handleSave} className="btn btn-primary">
                Guardar
            </button>
        <button onClick={handleCancel} className="btn btn-primary">
                Cancelar
            </button>
      </div>
      </div>
    )
  }

  return (
    <div className="participant-item">
      <div className="participant-name">{participant.name}</div>
      <div className="participant-actions">
        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Editar</button>
        <button className="btn btn-delete" onClick={() => onDelete(participant.id)}>Borrar</button>
      </div>
    </div>
  )
}

export default ParticipantItem
export { ParticipantItem }
