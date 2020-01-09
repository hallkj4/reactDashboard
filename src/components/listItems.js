import React from 'react';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AppsIcon from '@material-ui/icons/Apps';
import BillingIcon from '@material-ui/icons/Payment';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import Container from '@material-ui/core/Container';
import { Typography, Grid, Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Link } from '@reach/router';


export const ListItemOverride = ({ item, url }) => (
  <ListItem button >
    <ListItemText >
      <Typography >
        <Box fontSize={14}>
          <nav>
            <Link to={url}>{item}</Link>
          </nav>
          </Box>
      </Typography>
    </ListItemText>
  </ListItem>
);

export const AdminServicesList = (
  <div>
    <Grid container direction="row" alignItems="center">
        <Grid item>
            <AppsIcon fontSize="large"/>
        </Grid>
        <Grid item>
            <Typography component="div">
              <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                  Application Management
              </Box>
            </Typography>
        </Grid>
    </Grid> 
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"overview"}></ListItemOverride>
        <ListItemOverride item={"SSO / MFA"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"PRIVELEGED ACCOUNT"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"CERTIFICATES"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"IDM - ACCESS MANAGEMENT"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"CREATE / UPDATE"} url={"/"}></ListItemOverride>
        </Grid>
      </ListItem>
  </div>
);

export const BillingAndUsage = (
  <div >
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <BillingIcon fontSize="large"/>
      </Grid>
      <Grid item>
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            Billing and Usage
          </Box>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"dashboard"}>Test</ListItemOverride>
        <ListItemOverride item={"ASSET RELATIONSHIP"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"USAGE DATA"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const AccessManagement = (
  <div >
    <Grid container direction="row" alignItems="center" alignContent="center" justify="flex-start">
      <Grid item >
        <FolderSharedIcon fontSize="large"/>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            Access Management
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"dashboard"}></ListItemOverride>
        <ListItemOverride item={"APPLICATION ACCESS"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"REMOTE / PRIVELEGED ACCES"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"EMAIL / COLLABORATION"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const PasswordManagement = (
  <div>
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <PersonIcon fontSize="large"/>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            Password Management
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"dashboard"}>Test</ListItemOverride>
        <ListItemOverride item={"PASSWORD RESET"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const Certificates = (
  <div>
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <CreateIcon fontSize="large"/>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            Certificates
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"dashboard"}>Test</ListItemOverride>
        <ListItemOverride item={"EMAIL SIGNATURE"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"EMAIL ENCRYPTION"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const IAMResources = (
  <div>
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <SupervisorAccountIcon fontSize="large"/>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            IAM Resources
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"API ACCESS / DOCUMENTATION"} url={"dashboard"}>Test</ListItemOverride>
        <ListItemOverride item={"INTEGRATION"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"ENVIRONMENT MGMT"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const miscellaneous = (
  <div>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"CLOUD SERVICES"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"BUSINESS INTELLIGENCE"} url={"/"}></ListItemOverride>
        <ListItemOverride item={"CONTINUOUS MONITORING"} url={"/"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <List disablePadding>
      <ListItem button>
        <ListItemIcon>
          <AppsIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Application Management" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BillingIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Billing and Usage" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FolderSharedIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Access Management" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Password Management" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CreateIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Certificates" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccountIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="IAM Resources" />
      </ListItem>
      <ListItem button divider>
        <ListItemIcon>
          <HelpIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon fontSize="large" color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </div>
);
