import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown, faTimes, faEdit} from '@fortawesome/free-solid-svg-icons'

import './issue.css';
import IssueForm from '../issueForm/IssueForm';
import { UserContext } from '../../../../../../context/UserProvider';

export default function Issue(props){
    const { issue, upVotes, downVotes, _id } = props;

    const {user: {username}, deleteIssue, editIssue, addLike, dislike} = useContext(UserContext);

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
                    <div className='likes-iss'>
                        <p className='delete-iss rmg like'>{upVotes}<FontAwesomeIcon onClick={() => addLike(_id)} icon={faThumbsUp} /> </p>
                        <p className='delete-iss rmg'>{downVotes}<FontAwesomeIcon onClick={() => dislike(_id)} icon={faThumbsDown} /></p>
                    </div>
                    <h4 style={{fontStyle: '8px'}}>@{username}</h4>
                    <h1 className='issue'>{ issue }</h1>
                </div>
            :
                <div className='cont edt'>
                    <FontAwesomeIcon className='edt-close' onClick={() => setEditToggle(prevToggle => !prevToggle)}  icon={faTimes} />
                    <IssueForm issue={issue} _id={_id} submit={editIssue} />
                </div>
            }
        </>
        
    )
}

