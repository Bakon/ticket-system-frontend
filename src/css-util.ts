const baseSpacing: string = '0.5rem';
export const spacing = {
    small: multiply(baseSpacing, 0.5),
    medium: baseSpacing,
    large: multiply(baseSpacing, 2),
    extraLarge: multiply(baseSpacing, 4)
};

export const colors = {
    main: '#3e69ac',
    black: '#001F3F',
    white: '#FFF'
};

export const headerHeight: string = '60px';

export function multiply(unit: string, factor: number): string {
    return parseFloat(unit) * factor + unit.toString().replace(/^\d*\.?\d*/, '');
}
