import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

/**
 * Greet component should render the text hello if a name is passed into the component
 * 
 * It should render hello followed by the name.
 */

test("Greet renders correctly", () =>{
    render(<Greet />)
    const textElemet = screen.getByText("Hello");
    expect(textElemet).toBeInTheDocument()
})
