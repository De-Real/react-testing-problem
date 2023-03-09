import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Greeting from "./Greeting";

describe("Greeting component", () => {
	test("renders Hello World as a text", () => {
		render(<Greeting />);
		const elText = screen.getByTestId("hello");
		expect(elText).toBeInTheDocument();
	});

	// test("renders see you as a text", () => {
	// 	render(<Greeting />);
	// 	const text = screen.getByText("see you", { exact: false });
	// 	expect(text).toBeInTheDocument();
	// });

	test("renders good to see you if button was NOT clicked", () => {
		render(<Greeting />);

		const outputElement = screen.getByText("good to see you", { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test("renders 'Checked!' if button was clicked", async () => {
		// // Arrange
		// render(<Greeting />);

		// // Act
		// const buttonElement = screen.getByRole("button");
		// fireEvent.click(buttonElement);

		// // Assert
		// const outputElement = screen.getByText("Changed!", { exact: false });
		// expect(outputElement).toBeInTheDocument();
		// Arrange

		render(<Greeting />);
		// Act
		const buttonElement = screen.getByRole("button");
		await userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.getByText("Changed!", { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test("should not renders 'glad to see you' if button was clicked", () => {
		//Arange
		render(<Greeting />);

		// const btn = screen.getByRole("button");
		// fireEvent.click(btn);
		// const outputElement = screen.queryByText("glad to see you");

		// Act

		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

		//Assert

		const outputElement = screen.queryByText("glad to see you", {
			exact: false,
		});
		expect(outputElement).toBeNull();
	});
});
