import { render, screen } from "@testing-library/react";
import Navbar from "../app/components/Navbar";

test("affiche le titre « Ma Garderie »", () => {
  render(<Navbar />);
  expect(screen.getAllByText(/Ma Garderie/i).length).toBeGreaterThan(0);
});
