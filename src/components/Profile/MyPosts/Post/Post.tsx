import React from 'react';
import s from './Post.module.css';

export type PostType = {
    message: string
    likesCount: number
}

export const Post = ({message,likesCount}: PostType) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img
                    src={'https://flomaster.top/o/uploads/posts/2023-10/thumbs/1697761728_flomaster-top-p-smeshnoi-betmen-risunok-pinterest-18.jpg'}/>
                {message}
                <div>
                    <span>like {likesCount}</span>
                </div>
            </div>
        </div>
    );
};