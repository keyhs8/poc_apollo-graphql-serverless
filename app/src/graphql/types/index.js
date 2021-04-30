import { mergeTypeDefs } from '@graphql-tools/merge';

import movie from './movie.graphql';
import character from './character.graphql';

export default mergeTypeDefs(
    [movie, character],
    { all: true },
);
