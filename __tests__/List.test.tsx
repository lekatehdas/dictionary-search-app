import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ResultList from "../src/components/List";

describe("ResultList", () => {
  const children = ["Result 1", "Result 2", "Result 3"];
  const title = "Test Results";
  const word = "test";

  it("renders the title correctly", () => {
    render(
        <Router>
            <ResultList children={children} title={title} word={word} />
        </Router>
    );
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the correct number of results", () => {
    render(
        <Router>
            <ResultList children={children} title={title} word={word} />
        </Router>
    );
    const resultItems = screen.getAllByRole("listitem");
    expect(resultItems.length).toBe(children.length);
  });

  it("renders 'No results' message when there are no children", () => {
    render(
        <Router>
            <ResultList children={[]} title={title} word={word} />
        </Router>
    );
    const noResultsMessage = screen.getByText("No results");
    expect(noResultsMessage).toBeInTheDocument();
  });

});
