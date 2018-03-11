import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = {
    card: {
        minWidth: 345,
        width: '100%',
        margin:'auto'
    }
};

let id = 0;
function createData(key, value) {
    id += 1;
    return { key, value };
}

const data = [
    createData('Material', 'Polycarbonate'),
    createData('Fitting', 'iPhone 8 plus'),
];


function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="display1">
                        The Marsupial Case Vol.I
                    </Typography>
                    <Typography variant="subheading">
                        We want you to go out with just one item in your pocket. No keys, no wallet bothering you.
                        Just you, your iPhone and the Kangaroo case. <br/> Store up to 3 credit cards and 3 keys in a new
                        vision of a phone case.
                    </Typography>
                    <br/>
                    <Paper style={{width: '25%', margin:'auto'}}>
                        <Table>
                            <TableBody style={{ width: '25%' }}>
                                {data.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell>{n.key}</TableCell>
                                            <TableCell numeric>{n.value}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>
                <CardActions>
                    <a href="https://google.com">
                    <Button size="large" color="primary" style={{margin:'auto'}}>
                        Pre-Order on Kickstarter
                    </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);