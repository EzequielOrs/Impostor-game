type Participant = {
  id: number
  name: string
}

function ParticipantItem({ participant }: { participant: Participant }) {
  return (
    <div className="participant-item">
      <div className="participant-name">{participant.name}</div>
      <div className="participant-actions">
        <button className="btn btn-edit">Editar</button>
        <button className="btn btn-delete">Borrar</button>
      </div>
    </div>
  )
}

export default ParticipantItem
export { ParticipantItem }
