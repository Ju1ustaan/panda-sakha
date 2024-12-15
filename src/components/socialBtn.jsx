import React from 'react';
import clsx from 'clsx';

const SocialBtn = ({ item }) => {
    const { accentColor, icon, title, path } = item;

    return (
        <button
            className={clsx(
                "border-4 px-1 py-2 rounded-full font-medium flex gap-1 group transition-all duration-300", accentColor
            )}
        >
            <div className={clsx(`text-${accentColor}`)}>{icon}</div>
            <a href={path} target='blank'>{title}</a>
        </button>
    );
};

export default SocialBtn;
