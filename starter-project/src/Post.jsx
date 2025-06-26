import {useState } from 'react';

export default function Post({author, content}) {
    const [likes, setLikes] = useState(0);

    function handleLikeClick() {
        setLikes(likes + 1);
    }
    return (
        <div style={{
            border: `ipx solid #ccc`,
            padding: `irem`,
            marginBotton: `irem`,
            borderRadius: `6px`,
            backgroundColor: `#f9f9f9`
        }}>
            <strong>{author}</strong>
            <p>{content}</p>
            <button onClick = {handleLikeClick} style = {{
                marginTop: `0.5rem`,
                backgroundColor: `#ffc107`,
                color: `black`,
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadisu: '4px',
                cursor: 'pointer'
            }}>
                Like ({likes})
                </button>
        </div>
    );
}