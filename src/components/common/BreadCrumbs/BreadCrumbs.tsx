import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import {
  IBreadCrumbs,
  IBreadCrumbsItems,
} from "../../../models/common/IBreadCrumbs";

const BreadCrumbs = ({ items }: IBreadCrumbs) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
        {items?.map((items: IBreadCrumbsItems) => {
          return (
            <>
              {items?.active ? (
                <Typography className={classes.active_link}>
                  {items?.name}
                </Typography>
              ) : (
                <NavLink className={classes.link} to={items?.to}>
                  {items?.name}
                </NavLink>
              )}
            </>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default BreadCrumbs;
