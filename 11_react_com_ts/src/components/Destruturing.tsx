import React from 'react'

interface Props {
    title: string
    context: string
    commentsQty: number
    tags: string[]

    // enum
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

const Destruturing = ({title, context, commentsQty, tags, category} : Props) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{context}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag} </span>
                ))}
            </div>
            <h4>Categoria: {category}</h4>
        </div>
    )
}

export default Destruturing