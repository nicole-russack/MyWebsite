import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from '/Users/nicolerussack/nicole-russack-webpage/src/customHooks/useOnScreen.js';
import { NavContext } from '/Users/nicolerussack/nicole-russack-webpage/src/context/NavContext.js';

export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};