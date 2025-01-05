module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.ts',
	],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.test.json',
			},
		],
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^@/app/(.*)$': '<rootDir>/app/$1',
		'^@types/(.*)$':
			'<rootDir>/app/utils/types/$1',
		'^@stores/(.*)$':
			'<rootDir>/app/lib/stores/$1',
		'^@providers/(.*)$':
			'<rootDir>/app/lib/providers/$1',
	},
};
