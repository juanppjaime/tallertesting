import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Like";

test("Párrafo por defecto", ()=>
{
    render(<Like/>);
    const parrafo = screen.getByTestId("parrafo")
    expect(parrafo).toHaveTextContent("Likes: 0");
})

test("Incrementar likes", ()=>
{
    render(<Like/>);   
    fireEvent.click(screen.getByText("Like"))
    const parrafo = screen.getByTestId("parrafo")
    expect(parrafo).toHaveTextContent("Likes: 1")
})
test("Decrementar likes", ()=>
{
    render(<Like/>);
    fireEvent.click(screen.getByText("Dislike"))
    const parrafo = screen.getByTestId("parrafo")
    expect(parrafo).toHaveTextContent("Likes: -1")
})



