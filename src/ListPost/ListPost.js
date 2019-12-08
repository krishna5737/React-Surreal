import ReactHtmlParser from 'react-html-parser'; 
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class ListPostComponent extends React.Component {

	render() {
		const { _index, _post, classes, selectedNoteIndex } = this.props;
		return (
			<div key={_index}>
				{ReactHtmlParser (_post.body)}
				 <ListItem
					className={classes.listItem}
					selected={selectedNoteIndex === _index}
					alignItems='flex-start'>
					<div >
						<ListItemText 
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
									</Typography>
									{"Likes: " + _post.likeCount}
								</React.Fragment>}
						/>
					</div> 
				</ListItem> 
			</div>
		);
	}

}
export default withStyles(styles)(ListPostComponent);