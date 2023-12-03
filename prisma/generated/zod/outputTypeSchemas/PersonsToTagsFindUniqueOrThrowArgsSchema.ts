import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsIncludeSchema } from '../inputTypeSchemas/PersonsToTagsIncludeSchema'
import { PersonsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereUniqueInputSchema'
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

export const PersonsToTagsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonsToTagsFindUniqueOrThrowArgs> = z.object({
  select: PersonsToTagsSelectSchema.optional(),
  include: PersonsToTagsIncludeSchema.optional(),
  where: PersonsToTagsWhereUniqueInputSchema,
}).strict()

export default PersonsToTagsFindUniqueOrThrowArgsSchema;
