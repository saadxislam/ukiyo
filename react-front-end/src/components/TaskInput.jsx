import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/TaskInput.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function TaskInput(props) {
  const classes = useStyles();


  const handleChange = (event) => {
    props.setTask(event.target.value);
  };


  return (
    <>
      <form className={classes.root}>
        <div className="task-container">
          <div className="task-textarea">
            <h4 className="task-question">
              What is the one thing that if you got done today, you will go to
              bed content?
            </h4>
            <TextField
              id="standard-multiline-flexible"
              name="question-one"
              multiline
              rowsMax={4}
              value={props.task}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
