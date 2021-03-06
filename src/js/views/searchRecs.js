import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const SearchRecs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card float-left m-2" style={{ width: "18rem" }}>
				<img
					src={store.recruitersPage[0].image}
					className="rounded"
					style={{ width: "285px", height: "285px" }}
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">{store.recruitersPage[0].name}</h5>
					<p className="card-text">{store.recruitersPage[0].companyType}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{store.recruitersPage[0].review}</li>
					<li className="list-group-item">{store.recruitersPage[0].siteUrl}</li>
					<li className="list-group-item">{store.recruitersPage[0].companyLkdn}</li>
				</ul>
			</div>
			<div className="container mt-5">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Welcome to GitHub!</h1>
						<p className="lead">
							GitHub is the best place to share code with friends, co-workers, classmates, and complete
							strangers. Over 31 million people use GitHub to build amazing things together across 97+
							million repositories. With all the collaborative features of GitHub, it has never been
							easier for individuals and teams to write faster, better code.
						</p>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Jobs Posted</h1>
						<div className="d-flex">
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={store.recruitersPage[0].image}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Security Analyst - GitHub Security Lab</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Miami, FL</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 5 days ago</small>
							</div>
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={store.recruitersPage[0].image}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Data Scientist - Business Intelligence</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Orlando, FL</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 1 month ago</small>
							</div>
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={store.recruitersPage[0].image}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Software Engineer - Admin Experiences</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Chatanooga, TN</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 2 weeks ago</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
