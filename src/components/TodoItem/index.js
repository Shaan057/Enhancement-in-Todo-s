/* eslint-disable no-nested-ternary */
import './index.css'

const Todo = props => {
  const {
    todo,
    onDelete,
    onEditButtonClicked,
    onSaveButtonClicked,
    onClickCheckedInput,
    isCompleted,
    editClicked,
    onUpdateTodo,
  } = props
  const {id, title} = todo

  const onClickedEditButton = () => {
    onEditButtonClicked(id)
  }

  const onChangedInput = event => {
    const newTodo = event.target.value
    onUpdateTodo(newTodo)
  }

  const onClickedSaveButton = () => {
    onSaveButtonClicked()
  }

  const onCheckedInput = event => {
    const isChecked = event.target.checked
    onClickCheckedInput(id, isChecked)
  }

  const onDeleteUser = () => {
    onDelete(id)
  }

  const classname =
    editClicked && isCompleted
      ? 'title active-input'
      : isCompleted
      ? 'title striked-title'
      : editClicked
      ? 'title active-input'
      : 'title'

  return (
    <li className="list">
      <input
        value={id}
        type="checkbox"
        className="input-check-box"
        onChange={onCheckedInput}
        disabled={editClicked}
      />
      {editClicked ? (
        <input
          type="text"
          className={classname}
          value={title}
          onChange={onChangedInput}
        />
      ) : (
        <p className={isCompleted ? 'title-para striked-title' : 'title-para'}>
          {title}
        </p>
      )}

      <div className="buttons-container">
        {/* <button
          className="save-edit-button"
          type="button"
          onClick={editClicked ? onClickedSaveButton : onClickedEditButton}
        >
          {!editClicked ? 'Edit' : 'Save'}
        </button> */}
        {editClicked ? (
          <button
            className={title === '' ? 'warning-button' : 'save-edit-button'}
            type="button"
            onClick={onClickedSaveButton}
            disabled={title === ''}
          >
            Save
          </button>
        ) : (
          <button
            className="save-edit-button"
            type="button"
            onClick={onClickedEditButton}
          >
            Edit
          </button>
        )}
        <button className="delete-button" type="button" onClick={onDeleteUser}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default Todo
