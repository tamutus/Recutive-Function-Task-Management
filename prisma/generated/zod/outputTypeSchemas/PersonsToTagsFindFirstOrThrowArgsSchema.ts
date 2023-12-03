import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsIncludeSchema } from '../inputTypeSchemas/PersonsToTagsIncludeSchema'
import { PersonsToTagsWhereInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereInputSchema'
import { PersonsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToTagsOrderByWithRelationInputSchema'
import { PersonsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereUniqueInputSchema'
import { PersonsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToTagsScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToTagsSelectSchema: z.ZodType<Prisma.PersonsToTagsSelect> = z.object({
  followerId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  follower: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const PersonsToTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonsToTagsFindFirstOrThrowArgs> = z.object({
  select: PersonsToTagsSelectSchema.optional(),
  include: PersonsToTagsIncludeSchema.optional(),
  where: PersonsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTagsOrderByWithRelationInputSchema.array(),PersonsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToTagsScalarFieldEnumSchema,PersonsToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToTagsFindFirstOrThrowArgsSchema;
