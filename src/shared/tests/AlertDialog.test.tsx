import { render } from '@testing-library/react';
import AlertDialog from '../AlertDialog';

test('renders AlertDialog', () => {
  render(
    <AlertDialog open={true} setOpen={() => {}} confirmClick={() => {}} />,
  );
  const ele = document.querySelector('.MuiDialog-container');
  expect(ele).toBeInTheDocument();
});
