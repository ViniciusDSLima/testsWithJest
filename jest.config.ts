import type {Config} from '@jest/types'

const jestConfig: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true
}

export default jestConfig;

