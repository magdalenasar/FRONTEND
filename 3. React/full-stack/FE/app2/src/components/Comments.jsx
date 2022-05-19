import React from 'react'

const Comments = ({ comments }) => {
    return (
        <div>
            {comments.length > 0 ? <ul>
                {comments.map(({ comment, id }) => (
                    <li key={id}>{comment}</li>
                ))}
            </ul> : <p>No product selected yet.</p>}
        </div>
    );
};

export default Comments