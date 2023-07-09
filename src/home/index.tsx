import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { AlertColor } from '@mui/material/Alert';
import ContactsService from '../service/ContactsService';
import ContactsItem from './component/ContactsItem';
import Loading from '../shared/Loading';
import Snackbar from '../shared/Snackbar';
import AlertDialog from '../shared/AlertDialog';

const LoadContainer = styled('div')({
  height: '80vh',
});

const Container = styled('div')({
  padding: 50,
});

const ListContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
});

const Home = () => {
  const [list, setList] = useState<IContacts[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState<AlertColor>('success');
  const [message, setMessage] = useState<string>('');

  const [openAlert, setOpenAlert] = useState(false);
  const [alertProps, setAlertProps] = useState<any>();

  const handleSetSuccess = () => {
    setType('success');
    setMessage('success');
    setOpenSnackbar(true);
  };

  const handleSetError = (errorMessage: string) => {
    setType('error');
    setMessage(errorMessage);
    setOpenSnackbar(true);
  };

  const init = async () => {
    setIsloading(true);

    const res: IContacts[] = await ContactsService.gerContacts();
    setIsloading(false);
    setList(res);
  };

  const handleDelete = async (id: Number) => {
    setOpenAlert(true);

    const deleteContact = async () => {
      try {
        await ContactsService.deleteContactById(id);
        setTimeout(() => {
          setOpenAlert(false);
          handleSetSuccess();
          init();
        }, 500);
      } catch (ex: any) {
        handleSetError(ex.message);
      }
    };

    setAlertProps(() => deleteContact);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Snackbar
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        type={type}
        message={message}
      />
      <AlertDialog
        open={openAlert}
        setOpen={setOpenAlert}
        confirmClick={alertProps}
      />
      {isLoading ? (
        <LoadContainer>
          <Loading />
        </LoadContainer>
      ) : (
        <ListContainer>
          {list.map((d: IContacts) => (
            <ContactsItem key={`${d.id}`} data={d} onDelete={handleDelete} />
          ))}
        </ListContainer>
      )}
    </Container>
  );
};
export default Home;
