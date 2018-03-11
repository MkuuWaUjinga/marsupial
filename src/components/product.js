import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import opened from './../resources/3.jpg';
import closed from './../resources/1.jpg';
import GridList, { GridListTile,} from 'material-ui/GridList';

const styles = theme => ({
    card: {
        minWidth: 345,
        width: '100%', margin:'auto'
    },
    title: {
        marginBottom: 16,
        fontSize: 40,
    },
    media: {
        minHeight: 500,
    },
    table: {
        textAlign: 'center',
        maxWidth: 400,
    },
});

let id = 0;
function createData(key, value) {
    id += 1;
    return { key, value };
}

const data = [
    createData('Material', 'Polycarbonate'),
    createData('Fitting', 'iPhone 8 plus'),
];

const tileData = [
    {
        img: opened,
        title: 'opened marsupial',
        author: 'Ad'
    },
    {
        img: closed,
        title: 'closed marsupial',
        author: 'Ad'
    }
];

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="headline"> The Product
                    </Typography>
                </CardContent>
                <CardContent>
                    <Paper  style={{width: '100%', margin:'auto'}}>
                        <GridList cellHeight={800}  cols={2}>
                            {tileData.map(tile => (
                                <GridListTile key={tile.img} cols={1}>
                                    <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Paper>
                </CardContent>
                <CardContent>
                    <Typography variant="headline" component="h1">
                        The Marsupial Case Vol.I
                    </Typography>
                    <Typography component="p">
                        We want you to go out with just one item in your pocket. No keys, no wallet bothering you.
                        Just you, your iPhone and the Kangaroo case. <br/> Store up to 3 credit cards and 3 keys in a new
                        vision of a phone case.
                    </Typography>
                    <br/>
                    <Paper style={{width: '25%', margin:'auto'}}>
                        <Table style={{ width: 400, margin: 'auto' }}>
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