import React from "react";
import { useState } from "react";

export default function DataCards(data) {
	const { images, name, url, location, city, date } = data;
	const maps = `https://www.google.com/maps/place/${location}, ${city}`;
	const [intNum, setInt] = useState(0);
	const [goNum, setGo] = useState(0);
	const [voteInt, setVoteInt] = useState(false);
	const [voteGo, setVoteGo] = useState(false);
	let inum = 0;
	let gnum = 0;
	let border1 = voteInt
		? {
				borderColor: "red",
				borderWidth: "3px",
		  }
		: {};
	let border2 = voteGo
		? {
				borderColor: "red",
				borderWidth: "3px",
		  }
		: {};
	const interested = () => {
		setVoteInt(!voteInt);
		if (voteInt) {
			inum = 0;
		} else {
			inum = 1;
		}
		setInt(inum);
	};
	const going = () => {
		setVoteGo(!voteGo);
		if (voteGo) {
			gnum = 0;
		} else {
			gnum = 1;
		}
		setGo(gnum);
	};

	// console.log('images', images);
	return (
		<div className="rounded-2xl overflow-hidden shadow-lg">
			<img className="w-full" alt={name} src={images} />
			<div className="px-6 py-4">
				<h1 className="self-center mb-6 text-xl">{name}</h1>
				<h1 className="self-center mb-6 text-xl">{date}</h1>
				<a className="self-center mb-6 text-xl" href={url}>
					Website
				</a>
				<a className="self-center mb-6 text-xl" href={maps}>
					{location}, {city}
				</a>
			</div>
			<div className="">
				<button
					style={border1}
					className="bg-green-100 mx-auto rounded p-1 w-40  ml-10 "
					onClick={interested}
				>
					interested {intNum}
				</button>
				<button
					style={border2}
					className="bg-green-300 mx-auto rounded ml-10 mt-3 p-1 w-40 mb-2"
					onClick={going}
				>
					going {goNum}
				</button>
			</div>
		</div>
	);
}
