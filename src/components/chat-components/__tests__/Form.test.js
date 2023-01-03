import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "../Form";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("Form", () => {

  it("calls onSubmit when btn clicked", () => {
    const mockSubmit = jest.fn( (e) => e.preventDefault() );
    render(<Form addMessage={mockSubmit} />);
    const btn = screen.getByText(/Send/);

    fireEvent(
      btn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    //userEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    //expect(mockSubmit).toHaveBeenCalledWith("");
   
   
  });
});


