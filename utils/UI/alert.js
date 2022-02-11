import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export function Success() {
  return (
    <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'>
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Image submitted!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>Your image has been submitted.</AlertDescription>
    </Alert>
  );
}
