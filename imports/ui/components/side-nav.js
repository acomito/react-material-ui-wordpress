import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';


export function SideNav({isOpen, close}){
  return <div>
          <Drawer open={isOpen} docked={false} onRequestChange={close}>
            <Link to="/about"   onClick={close} > <MenuItem>About</MenuItem> </Link>
            <Link to="/posts"   onClick={close} > <MenuItem>Blog</MenuItem> </Link>
            <Link to="/contact" onClick={close} > <MenuItem>Contact</MenuItem> </Link>
          </Drawer>
        </div>
};

