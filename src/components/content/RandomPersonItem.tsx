import React from "react";

import { Person } from "../../types";

import classes from "./RandomPersonItem.module.css";

const RandomPersonItem = ({ name, picture, email }: Person) => {

	return (
		<div className={classes.card}> 
			<div className={classes.picture}>
				<img src={picture.large} alt="" />
			</div>
			<div className={classes["person-info"]}>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
					<h1>
						{`${name.first} ${name.last}`}
					</h1>
          <span>{email}</span>
				</div>
			</div>
		</div>
	);
};

export default RandomPersonItem;
