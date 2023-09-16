import Chip from '@mui/material/Chip';
import DownloadPdf from './DownloadPdf';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
				>Remove</button>
				<DownloadPdf text={text} date={date}></DownloadPdf>
			</div>
		</div>
	);
};

export default Note;
