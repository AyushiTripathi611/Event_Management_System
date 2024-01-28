// // Updated MediaCard.js
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard({ event }) {
//   return (
//     <Card sx={{ maxWidth: 275, display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         sx={{ height: 0, paddingTop: '56.25%' }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title={event.title}
//       />
//       <CardContent sx={{ flex: '1 0 auto' }}>
//         <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'wrap' }}>
//           {event.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           Description: {event.description}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Date: {event.date}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Time: {event.time}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function MediaCard({ event }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 275, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ height: 0, paddingTop: '56.25%' }}
          image={event.image || "/static/images/cards/contemplative-reptile.jpg"}
          title={event.title}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'wrap' }}>
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Description: {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {event.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {event.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Learn More</Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{event.title}</DialogTitle>
        <DialogContent>
        <CardMedia
          sx={{ height: 0, paddingTop: '56.25%' }}
          image={event.image || "/static/images/cards/contemplative-reptile.jpg"}
          title={event.title}
        />
          <Typography variant="body2" color="text.secondary">
            Description: {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {event.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {event.time}
          </Typography>
          {/* Add more details as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
