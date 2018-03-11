import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import hf from './../resources/Happy-Family-Summer-Package.jpg'

const styles = theme => ({
    card: {
        minWidth: 345,
    },
    title: {
        marginBottom: 16,
        fontSize: 40,
    },
    media: {
        minHeight: 500,
    },
});

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="headline"> About Us
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={hf}
                    title="The Team"
                />
                <CardContent>
                    <Typography variant="headline" component="h1">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);