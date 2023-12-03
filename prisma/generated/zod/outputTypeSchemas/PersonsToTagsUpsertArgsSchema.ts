import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsIncludeSchema } from '../inputTypeSchemas/PersonsToTagsIncludeSchema'
import { PersonsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereUniqueInputSchema'
import { PersonsToTagsCreateInputSchema } from '../inputTypeSchemas/PersonsToTagsCreateInputSchema'
import { PersonsToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToTagsUncheckedCreateInputSchema'
import { PersonsToTagsUpdateInputSchema } from '../inputTypeSchemas/PersonsToTagsUpdateInputSchema'
import { PersonsToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToTagsUncheckedUpdateInputSchema'
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

export const PersonsToTagsUpsertArgsSchema: z.ZodType<Prisma.PersonsToTagsUpsertArgs> = z.object({
  select: PersonsToTagsSelectSchema.optional(),
  include: PersonsToTagsIncludeSchema.optional(),
  where: PersonsToTagsWhereUniqueInputSchema,
  create: z.union([ PersonsToTagsCreateInputSchema,PersonsToTagsUncheckedCreateInputSchema ]),
  update: z.union([ PersonsToTagsUpdateInputSchema,PersonsToTagsUncheckedUpdateInputSchema ]),
}).strict()

export default PersonsToTagsUpsertArgsSchema;
