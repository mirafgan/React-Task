import {createContext, useEffect, useState} from "react";

interface Props {
	children: React.ReactNode;
}

interface Listobj {
	id: number;
	attributes: {
		contact: string;
		created_at: string;
		description: string;
		job_type: string;
		location: string;
		published: boolean;
		published_at: string;
		telecommute: boolean;
		title: string;
		updated_at: string;
	};
	relationships: {
		employer: {
			data: {
				name: string;
			};
		};
	};
}

const Context = createContext<Listobj[]>([]);

function ContextProvider({children}: Props) {
	const [state, setState] = useState<Listobj[]>([]);
	const [pass, setPass] = useState<boolean>(false);
	useEffect(() => {
		fetch("/assets/jobs.json")
			.then((res) => res.json())
			.then((res) => {
				setState(res.data);
				setPass(true);
			})
			.catch((res) => setPass(res));
	}, [pass]);

	return (
		<>
			{pass ? (
				<Context.Provider value={state}>{children}</Context.Provider>
			) : (
				<div className="flex justify-center items-center h-screen">
					<div className="lds-ellipsis">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</>
	);
}

export {ContextProvider, Context};
