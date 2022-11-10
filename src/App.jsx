import { useState, useEffect } from 'react';
import './App.css';
import Start from '../components/Start';
import Questions from '../components/Questions';

function App() {
	return (
		<div className='app'>
			{/* <Start /> */}
			<Questions />
		</div>
	);
}

export default App;
