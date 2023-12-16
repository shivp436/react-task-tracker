import React from 'react';
import { useState } from 'react';

const AddTask = ({onAdd} ) => {
	const [text, setText] = useState(''); // we want to set the text to an empty string
	const [day, setDay] = useState(''); // we want to set the day to the current day
	const [reminder, setReminder] = useState(false); // default value is false

    const onSubmit = (e) => {
        e.preventDefault() // prevents the form from submitting to a page
        if(!text || !day) { // if there is no text
            alert('Please add a task and time') // alert the user
            return // return nothing
        }
        onAdd({text, day, reminder}) // if there is text, add the task
        setText('') // set the text to an empty string
        setDay('') // set the day to an empty string
        setReminder(false) // set the reminder to false
    }

	return (
		<form className='add-form' onSubmit={onSubmit} >
			<div className='form-control'>
				<label>Task</label>
				<input
					type='text'
					placeholder='Add Task'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label>Day & Time</label>
				<input
					type='text'
					placeholder='Add Day & Time'
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input
					type='checkbox'
                    checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	);
};

export default AddTask;
