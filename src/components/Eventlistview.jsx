import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function EventListView({ events }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant="square" alt={event.title} sx={{ width: 108, height: 108, marginRight: "20px" }} src={event.image || "/static/images/avatar/default.jpg"} />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                   <Typography
                    sx={{ display: "inline", fontWeight: 700, fontSize: "18px"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >{event.title}
                  </Typography>
                  <br></br>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >{"Description: " + event.description}
                  </Typography>
                  <br></br>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >{"Date: " + event.date}
                  </Typography>
                  <br></br>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >{"Time: " + event.time}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default EventListView;
