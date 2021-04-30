import { mergeResolvers } from '@graphql-tools/merge';
import movieResolver from './movie';
import characterResolver from './character';

const resolvers = [movieResolver, characterResolver];

export default mergeResolvers(resolvers);
