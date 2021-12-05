import { Grid, Paper, makeStyles } from '@material-ui/core'
import uuid from "react-uuid"
import { NeonDiv } from "./StyledComponents"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DisplayNotes = ({data}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    data.map((savedNote => (
                        <Grid item xs={12} sm={4} key={savedNote.group}>
                            <Paper className={classes.paper}>
                                {savedNote.name.map((string) => (
                                    <NeonDiv as="div" key={uuid()}>{string}</NeonDiv>
                                ))}
                            </Paper>
                        </Grid>
                    )))
                }
            </Grid>
        </div>
    )
}

export default DisplayNotes;