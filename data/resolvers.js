/**
 * Created by j.azza on 27/11/2016.
 */
import { merge } from 'lodash';

import { resolvers as opResolvers} from './op/op-resolvers';
import { resolvers as clientResolvers} from './client/client-resolver';
import { resolvers as fournisseurResolvers} from './fournisseur/fournisseur-resolver';
import { resolvers as aticleResolvers } from './article/article-resolver';
import { resolvers as personResolvers } from './person/person-resolvers'

export const allResolvers = merge(
    opResolvers,
    clientResolvers,
    fournisseurResolvers,
    aticleResolvers,
    personResolvers
);