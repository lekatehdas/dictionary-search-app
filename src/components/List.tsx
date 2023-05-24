import React from "react";

interface Props {
  children: string[];
  title: string;
}

// TODO add redirection to the details page with the word.
const ResultList: React.FC<Props> = ({ children, title }: Props) => {
  return (
      <>
        <h2>{title}</h2>
        {children.length === 0 && <p>No results</p>}
        <ul className="listGroup">
          {children.map((item) => (
              <li key={item}>{item}</li>
          ))}
        </ul>
      </>
  );
}

export default ResultList;