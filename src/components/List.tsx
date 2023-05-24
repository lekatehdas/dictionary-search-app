interface Props {
    children: string[];
    title: string;
    onSelectItem: (item: string) => void;
}

const ResultList: React.FC<Props> = ({children, title, onSelectItem}: Props) => {
    return (
        <>
            <h2>{title}</h2>
            {children.length === 0 && <p>No results</p>}
            <ul className="listGroup">
                {children.map((item) => (
                    <li
                        key={item}
                        onClick={() => {
                            onSelectItem(item)
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