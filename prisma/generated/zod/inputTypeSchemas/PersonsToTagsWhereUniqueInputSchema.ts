import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema } from './PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema';
import { PersonsToTagsWhereInputSchema } from './PersonsToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const PersonsToTagsWhereUniqueInputSchema: z.ZodType<Prisma.PersonsToTagsWhereUniqueInput> = z.object({
  followerId_tagId: z.lazy(() => PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  followerId_tagId: z.lazy(() => PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PersonsToTagsWhereInputSchema),z.lazy(() => PersonsToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTagsWhereInputSchema),z.lazy(() => PersonsToTagsWhereInputSchema).array() ]).optional(),
  followerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  follower: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict());

export default PersonsToTagsWhereUniqueInputSchema;
