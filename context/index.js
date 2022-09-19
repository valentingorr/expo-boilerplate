import React, {
	createContext
} from "react";

export const user = createContext();
export default props => {
	return (
		<user.Provider value={props.user}>
			{props.children}
		</user.Provider>
	);
};