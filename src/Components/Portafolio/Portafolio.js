import React from 'react'
import { getNotes } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './Portafolio.css';

export const Portafolio = () => {
    let notes = getNotes();

    const {portafolioId} = useParams();

    const filterNotes = (id) => {
        let selectedProject = false;

        if (id > 0) {
            selectedProject = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedProject;
    }

    const selectedProject = filterNotes(portafolioId);

    const renderNotes = (projects) => (
        <div className='cards'>
            {
                projects.map((projects, key) => (
                    <div key={key} className='card'>
                        <img src={require('../../shared/images/logoCard.png')} alt='logoCard'/>
                        <h5>{projects.title}</h5>
                        <p>{projects.description}</p>
                        <Link className='card-link' to={`/portafolio/${projects.id}`}>Ver</Link>
                        {/* {
                            selectedProject 
                            &&
                            <div>
                                <h3>{projects.title}</h3>
                                <p>{projects.description}</p>
                                
                            </div>
                            

                            
                        } */}
                    </div>
                ))
            }
       
            
        </div>
    )
    return (
        <div className='Portafolio'>
            <h1>Portafolio</h1>
            {renderNotes(selectedProject || notes )}
        </div>
    )
}   
