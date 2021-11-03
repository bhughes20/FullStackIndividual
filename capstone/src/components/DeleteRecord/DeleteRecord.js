import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  SimpleGrid,
  GridItem,
  useBreakpointValue
} from "@chakra-ui/react";

export default function DeleteRecord() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const colSpan1 = useBreakpointValue({ base: 2, md: 1 });

  const {
    handleSubmit: handleSubmitDeleteRecord,
    control: controlDeleteRecord,
    formState: { errors: errorsDeleteRecord },
  } = useForm({
    mode: "onBlur",
  });

  const deleteRecord = () => {
    setIsOpen(false);
    const url = `http://localhost:8080/drivers/${id}`;
    axios
      .delete(url)
      .then((response) => {
        console.log(response)
        if (response.status >= 200 && response.status < 300){
          toast.success(`Driver ID ${id} has been deleted.`)
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        if(error.response.status === 404){
          toast.error(`Sorry, Driver ID ${id} does not exist.`)
        } else {
          toast.error("Oops, something went wrong!")
        }
      });
  };

  const handleRegistrationDeleteRecord = (data) => {
    setId(data.deleteDriverId);
    setIsOpen(true);
  };

  const handleErrorDeleteRecord = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Driver Record
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete Driver {id} ? You can't undo this
              action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteRecord(id);
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <form
        onSubmit={handleSubmitDeleteRecord(
          handleRegistrationDeleteRecord,
          handleErrorDeleteRecord
        )}
      >
        <SimpleGrid
          padding={[0, 10]}
          bgColor="grey.300"
          columns={3}
          columnGap={3}
          rowGap={6}
          w="full"
          verticalAlign="bottom"
        >
          <GridItem colSpan={3}>
            <Heading as="h2" size="lg">
              Delete Driver Record
            </Heading>
          </GridItem>
          <GridItem colSpan={colSpan1}>
            <FormControl
              isRequired
              isInvalid={errorsDeleteRecord.deleteDriverId}
            >
              <FormLabel htmlFor="deleteDriverId">Driver ID</FormLabel>
              <Controller
                id="deleteDriverId"
                name="deleteDriverId"
                control={controlDeleteRecord}
                defaultValue=""
                rules={{
                  required: "Driver ID is a required field",
                  pattern: {
                    value: /^[0-9]/i,
                    message: "ID must be numeric digits",
                  },
                }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Please Enter Driver ID"
                  />
                )}
              />
              <FormErrorMessage>
                {errorsDeleteRecord.deleteDriverId &&
                  errorsDeleteRecord.deleteDriverId.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan1}>
            <Button type="submit" size="md">
              Delete
            </Button>
          </GridItem>
        </SimpleGrid>
      </form>
    </>
  );
}
