import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * Greet component should render the text hello if a name is passed into the component
 *
 * It should render hello followed by the name.
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElemet = screen.getByText("Hello");
    expect(textElemet).toBeInTheDocument();
  });

  test("Greet renders name when passed as prop", () => {
    render(<Greet name="Ericjay" />);
    const textElemet = screen.getByText("Hello Ericjay");
    expect(textElemet).toBeInTheDocument();
  });
});
