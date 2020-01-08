import React from 'react';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AppsIcon from '@material-ui/icons/Apps';
import BillingIcon from '@material-ui/icons/Payment';
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import PersonIcon from '@material-ui/icons/Person'
import CreateIcon from '@material-ui/icons/Create'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HelpIcon from '@material-ui/icons/Help'
import SettingsIcon from '@material-ui/icons/Settings'
import Container from '@material-ui/core/Container'
import { Typography, Grid, Box } from '@material-ui/core';
import List from '@material-ui/core/List'


export const ListItemOverride = ({ item, url }) => (
  <ListItem button >
    <ListItemText >
      <Typography >
        <Box fontSize={14}>
          <a href={url}>{item}</a>
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
        <ListItemOverride item={"OVERVIEW"} url={"https://localhost:8080"}></ListItemOverride>
        <ListItemOverride item={"SSO / MFA"}></ListItemOverride>
        <ListItemOverride item={"PRIVELEGED ACCOUNT"}></ListItemOverride>
        <ListItemOverride item={"CERTIFICATES"}></ListItemOverride>
        <ListItemOverride item={"IDM - ACCESS MANAGEMENT"}></ListItemOverride>
        <ListItemOverride item={"CREATE / UPDATE"}></ListItemOverride>
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
        <ListItemOverride item={"OVERVIEW"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"ASSET RELATIONSHIP"}></ListItemOverride>
        <ListItemOverride item={"USAGE DATA"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const AccessManagement = (
  <div >
    <Grid container direction="row" alignItems="center" alignContent="center" justify="flex-start">
      <Grid item justify="flex-start">
        <FolderSharedIcon fontSize="large"/>
      </Grid>
      <Grid item justify="flex-start">
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
            Access Management
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"OVERVIEW"} url={"https://localhost:8080"}></ListItemOverride>
        <ListItemOverride item={"APPLICATION ACCESS"}></ListItemOverride>
        <ListItemOverride item={"REMOTE / PRIVELEGED ACCES"}></ListItemOverride>
        <ListItemOverride item={"EMAIL / COLLABORATION"}></ListItemOverride>
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
        <ListItemOverride item={"OVERVIEW"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"PASSWORD RESET"}></ListItemOverride>
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
        <ListItemOverride item={"OVERVIEW"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"EMAIL SIGNATURE"}></ListItemOverride>
        <ListItemOverride item={"EMAIL ENCRYPTION"}></ListItemOverride>
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
        <ListItemOverride item={"API ACCESS / DOCUMENTATION"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"INTEGRATION"}></ListItemOverride>
        <ListItemOverride item={"ENVIRONMENT MGMT"}></ListItemOverride>
      </Grid>
    </ListItem>
  </div>
);

export const miscellaneous = (
  <div>
    <ListItem>
      <Grid container direction="column">
        <ListItemOverride item={"CLOUD SERVICES"} url={"https://localhost:8080"}>Test</ListItemOverride>
        <ListItemOverride item={"BUSINESS INTELLIGENCE"}></ListItemOverride>
        <ListItemOverride item={"CONTINUOUS MONITORING"}></ListItemOverride>
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
