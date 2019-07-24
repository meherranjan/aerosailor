import React from 'react';
import facebook from '../../../static/social/facebook-dark.svg';
import twitter from '../../../static/social/twitter-dark.svg';
import linkedin from '../../../static/social/linkedin-dark.svg';
import './post-share.scss'

const sharerList = [
    {
        alt: 'Share Article on Facebook',
        icon: facebook,
        url: ''
    },
    {
        alt: 'Tweet Article',
        icon: twitter,
        url: ''
    },
    {
        alt: 'Share Article on Twitter',
        icon: linkedin,
        url: ''
    },
];

const PostSharer =
    () =>
        <span className='post-sharer'>
            {
                sharerList.map((obj, index) =>
                    <a href={obj.url} target="_blank" rel="noopener noreferrer">
                        <img src={obj.icon} alt={obj.alt} />
                    </a>
                )
            }
        </span>

export default PostSharer
