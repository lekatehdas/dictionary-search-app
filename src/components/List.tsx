import {useNavigate} from "react-router-dom";
import React from "react";

interface Props {
    children: string[];
    title: string;
}

const ResultList: React.FC<Props> = ({children, title}: Props) => {
    const navigate = useNavigate()
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
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ResultList;