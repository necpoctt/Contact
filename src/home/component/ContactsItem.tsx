import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import color from '../../common/color';
import Button from '../../shared/Button';
import defaultAvatar from '../../assets/images/svg/default-customer-light.svg';

const FirstName = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  color: color.bgDarkDefault,
  marginRight: 10,
});

const LastName = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  color: color.bgDarkDefault,
});

const Text = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '150%',
  letterSpacing: '0.25px',
  color: color.bgDarkDefault,
});

const NameContainer = styled('div')({
  textAlign: 'left',
  display: 'flex',
});

const JobContainer = styled('div')({
  flex: '1 1 0%',
  textAlign: 'left',
});

const EditButton = styled(Button)({
  height: 28,
  width: 60,
  position: 'absolute',
  right: 8,
  top: 10,
  backgroundColor: color.white,
  color: color.bgDarkDefault,
  border: 'solid 2px',
});

const DeleteButton = styled(Button)({
  height: 28,
  width: 60,
  position: 'absolute',
  right: 8,
  top: 50,
  backgroundColor: color.white,
  color: color.bgDarkDefault,
  border: 'solid 2px',
});

const ImgContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: 40,
  height: 40,
  marginRight: 15,
  marginLeft: 15,
  '& > img': {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: 'transparent',
  },
});

const RowContainer = styled('div')({
  width: '45%',
  justifyContent: 'flex-start',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  margin: 24,
  backgroundColor: color.white,
  border: 'solid 2px',
  height: 100,
});

interface IContactsItem {
  data: IContacts;
  onDelete: Function;
}

const ContactsItem = ({ data, onDelete }: IContactsItem) => {
  const isDesktop = useMediaQuery('(min-width:900px)', { noSsr: true });

  return (
    <RowContainer
      style={{
        width: isDesktop ? '45%' : '100%',
        margin: isDesktop ? 24 : '0 0 8px 0',
      }}
    >
      <ImgContainer>
        <img alt={`${data?.id}`} src={defaultAvatar} />
      </ImgContainer>
      <div>
        <NameContainer>
          <FirstName variant="h6">{data?.first_name}</FirstName>
          <LastName variant="h6">{data?.last_name}</LastName>
        </NameContainer>
        <JobContainer>
          <Text>{data?.job}</Text>
          <Text>{data?.description}</Text>
        </JobContainer>

        <EditButton>Edit</EditButton>
        <DeleteButton onClick={() => onDelete(data.id)}>Delete</DeleteButton>
      </div>
    </RowContainer>
  );
};
export default ContactsItem;
