import React from 'react';


const SectionTitle = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <h2 className="title">{title}</h2>
            <div className="subtitle">{subtitle}</div>
            <p>{description}</p>
        </div>
    )
}

export default SectionTitle;