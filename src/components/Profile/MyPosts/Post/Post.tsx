import React from 'react';
import s from './Post.module.css';

export const Post = (props: any) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img
                    src={'https://flomaster.top/o/uploads/posts/2023-10/thumbs/1697761728_flomaster-top-p-smeshnoi-betmen-risunok-pinterest-18.jpg'} alt={'picture'}/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};