import React, { useRef } from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";

const NewMeetupForm = (props) => {
  const titleRef = useRef(undefined);
  const imageRef = useRef(undefined);
  const addressRef = useRef(undefined);
  const descriptionRef = useRef(undefined);

  const submitHandler = (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };

    titleRef.current = "";
    imageRef.current = "";
    addressRef.current = "";
    descriptionRef.current = "";

    props.onAddMeetup(meetupData);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl fullWidth>
        <TextField
          variant="standard"
          label="Title"
          inputRef={titleRef}
          value={titleRef.current}
        />
        <TextField
          variant="standard"
          label="Image"
          inputRef={imageRef}
          value={imageRef.current}
        />
        <TextField
          variant="standard"
          label="Address"
          inputRef={addressRef}
          value={addressRef.current}
        />
        <TextField
          variant="standard"
          label="Description"
          inputRef={descriptionRef}
          multiline
          minRows={5}
          value={descriptionRef.current}
        />
      </FormControl>
      <Box component="div" style={{ marginTop: 50 }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default NewMeetupForm;
