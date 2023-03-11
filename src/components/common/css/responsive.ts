export type ResponsiveValue<T> = {
	xs: T
	sm?: T
	md: T
	lg: T
}

type BaseResponsiveValue = ResponsiveValue<string>

export const bodyFontSize: BaseResponsiveValue = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px'
}

export const navigationLinkFontSize: BaseResponsiveValue = {
	xs: '14px',
	sm: '16px',
	md: '18px',
	lg: '20px'
}

export const gridGap: BaseResponsiveValue = {
	xs: '16px',
	sm: '20px',
	md: '24px',
	lg: '36px'
}

export const padding: BaseResponsiveValue = {
	xs: '12px',
	sm: '16px',
	md: '20px',
	lg: '24px'
}

export const h1FontSize: BaseResponsiveValue = {
	xs: '16px',
	sm: '18px',
	md: '20px',
	lg: '24px'
}

export const h3FontSize: BaseResponsiveValue = {
	xs: '14px',
	sm: '16px',
	md: '18px',
	lg: '20px'
}
