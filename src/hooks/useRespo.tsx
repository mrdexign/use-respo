import { Fragment, FC } from 'react';
import useWindowSize from './useWindowSize';

type Config = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BreakPoint = { xs: number; sm: number; md: number; lg: number; xl: number };
const breakpoint: BreakPoint = { xs: 0, sm: 410, md: 960, lg: 1280, xl: 1800 };

export type RespoComponent = FC<{ down?: boolean; up?: boolean; onDown?: Function; onUp?: Function }>;

const getDeviceConfig = (width: number, br: BreakPoint = breakpoint): Config => {
	if (width < br.sm) return 'xs';
	if (br.sm <= width && width < br.md) return 'sm';
	if (br.md <= width && width < br.lg) return 'md';
	if (br.lg <= width && width < br.xl) return 'lg';
	return 'xl';
};

const useRespo = (breakPoint: BreakPoint = breakpoint) => {
	const { width } = useWindowSize();
	const brkPnt = getDeviceConfig(width, breakPoint);

	const Device: (brk: Config) => RespoComponent =
		brk =>
		({ children, down, up, onDown, onUp }) =>
			(
				<Fragment>
					{((down && width < breakpoint[brk] && onDown?.()) || (up && width > breakpoint[brk] && onUp?.()) || brkPnt === brk) &&
						children}
				</Fragment>
			);

	return {
		Tiny: Device('xs'),
		Mobile: Device('sm'),
		Tablet: Device('md'),
		Laptop: Device('lg'),
		Tv: Device('xl'),
	};
};

export default useRespo;
