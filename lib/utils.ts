import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-ZA', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}

export function viewsText(value: number) {
	return value > 1 ? 'views' : 'view';
}
