import {useNavigate} from "react-router-dom";
import React from "react";

interface Props {
    children: string[];
    title: string;
    word: string
}

const ResultList: React.FC<Props> = ({children, title, word}: Props) => {
    const navigate = useNavigate()

    const highlightText = (text: string, highlight: string) => {
        if (!highlight.trim()) {
            return <span>{text}</span>;
        }
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? <strong key={i}>{part}</strong> : part
        )}</span>;
    }

    return (
        <>
            <h2>{title}</h2>
            {children.length === 0 && <p>No results</p>}
            <ul className="list-group">
                {children.map((item) => (
                    <li
                        className='list-group-item'
                        key={item}
                        onClick={() => {
                            navigate(`/${item}`)
                        }}
                    >
                        {highlightText(item, word)}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ResultList;