import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Input from './components/Input';
import Button from './components/Button';
import CheckBox from './components/CheckBox';

describe('test for employee app' ,() => {
test('renders App Component', () => {
  render(<App />);
  expect(screen.getByText(/employee search application/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  const employeesOutput = screen.queryAllByTestId('employees');
  expect(employeesOutput).toHaveLength(4);
})

test('Input Component', () => {
  const handleChange = jest.fn();
  render(<Input handleChange={handleChange} placeholder="Search Employee" inputValue=""/>)
  const searchInput = screen.getByRole('textbox');
  userEvent.type(searchInput,'Jo');
  expect(handleChange).toHaveBeenCalledTimes(2);
})


test('Button Component',() => {
  const handleClick = jest.fn();
  render(<Button handleClick={handleClick} disabled={2}/>);
  const btn=screen.getByRole('button');
  userEvent.click(btn);
  expect(handleClick).toHaveBeenCalledTimes(1);

})

test('CheckBox Component', () => {
  const handleCheck = jest.fn();
  render(<CheckBox value={true} onChange={handleCheck}/>);
  const chkBox=screen.getByRole('checkbox');
  userEvent.click(chkBox);
  userEvent.click(chkBox);
  expect(handleCheck).toHaveBeenCalledTimes(2);
})

test('search input',() => {
  render(<App />);
  const inputBox = screen.getByRole('textbox');
  userEvent.type(inputBox,'Jo');
  const employeesOutput = screen.queryAllByTestId('employees');
  expect(employeesOutput).toHaveLength(1);
  expect(screen.queryByText(/No Records found/)).toBeNull();
})

test('No Records', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox');
  userEvent.type(inputBox,'test');
  expect(screen.queryByText(/No Records found/)).toBeInTheDocument;
})

test('check Active employees', () => {
  render(<App />);
  const chkBox = screen.getByRole('checkbox');
  userEvent.click(chkBox);
  let employeesOutput = screen.queryAllByTestId('employees');
  expect(employeesOutput).toHaveLength(1);
  userEvent.click(chkBox);
  employeesOutput = screen.queryAllByTestId('employees');
  expect(employeesOutput).toHaveLength(4);
})


});
