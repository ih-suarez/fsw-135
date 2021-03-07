import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown, faTrashAlt, faTimes, faEdit} from '@fortawesome/free-solid-svg-icons'

import './issue.css';
import IssueForm from '../issueForm/IssueForm';
import { UserContext } from '../../../../../../context/UserProvider';

export default function Issue(props){
    const { issue, upVotes, downVotes, _id } = props;

    const {deleteIssue, editIssue} = useContext(UserContext);

    const [editToggle, setEditToggle] = useState(false);

    return (
        <>
            { !editToggle ?
                <div id={_id} className='cont'>
                    <div className='delete-iss'>
                        <FontAwesomeIcon onClick={() => deleteIssue(_id)} icon={faTimes}/>
                    </div>
                    <div className='delete-iss edit-iss'>
                        <FontAwesomeIcon onClick={() => setEditToggle(prevToggle => !prevToggle)}  icon={faEdit} />
                    </div>
                    <h1 className='issue'>{ issue }</h1>
                </div>
            :
                <>
                    <FontAwesomeIcon onClick={() => setEditToggle(prevToggle => !prevToggle)}  icon={faTimes} />
                    <IssueForm issue={issue} _id={_id} submit={editIssue} />
                </>
            }

        </>
        
    )
}

