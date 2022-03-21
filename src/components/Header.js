import React,{useState} from 'react'
import './Header.css'
import africa from './africa.svg'



function Header () {



	return (
		<>
			<div className='Afric'>
				<div className='TopAf'>
						<img src={africa} className='africa'/>
					
					<div className='AfText'>
						<p>Find Job</p>
                		<p>Coaching</p>
                		<p>Sign In</p>
						<button className='but1'>For Employers</button>
                	</div>
				</div>
			</div>
		</>
	)
}


export default Header