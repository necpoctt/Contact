import { render } from '@testing-library/react';
import Snackbar from '../Snackbar';

test('renders Snackbar', () => {
  render(
    <Snackbar
      open={true}
      setOpen={() => {}}
      type="success"
      message={'success'}
    />,
  );
  const ele = document.querySelector('svg');
  expect(ele).toBeInTheDocument();
});
