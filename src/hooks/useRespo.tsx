import { Fragment, FC } from 'react';
import useWindowSize from './useWindowSize';

type Config = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BreakPoint = { xs: number; sm: number; md: number; lg: number; xl: number };
const breakpoint: BreakPoint = { xs: 280, sm: 576, md: 992, lg: 1400, xl: 1800 };

export type RespoComponent = FC<{
	down?: boolean;
	up?: boolean;
	onDown?: Function;
	onUp?: Function;
}>;

const getDeviceConfig = (width: number, br: BreakPoint = breakpoint): Config => {
	if (width < br.xs) return 'xs';
	if (br.xs <= width && width < br.sm) return 'sm';
	if (br.sm <= width && width < br.md) return 'md';
	if (br.md <= width && width < br.lg) return 'lg';
	return 'xl';
};

const useRespo = (breakPoint: BreakPoint = breakpoint) => {
	const { width } = useWindowSize();
	const brkPnt = getDeviceConfig(width, breakPoint);

	const Device: (brk: Config) => RespoComponent =
		brk =>
		({ children, down, up, onDown, onUp }) => {
			const isIn = brkPnt === brk;
			const isDown = width < breakpoint[brk];
			const isUp = width > breakpoint[brk];
			const condition = (down && isDown) || (up && isUp) || isIn;

			isUp && onUp?.();
			isDown && onDown?.();

			return <Fragment>{condition && children}</Fragment>;
		};

	return {
		Tiny: Device('xs'),
		Mobile: Device('sm'),
		Tablet: Device('md'),
		Laptop: Device('lg'),
		Tv: Device('xl'),
	};
};

export default useRespo;
