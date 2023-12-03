import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const PersonsToTagsSelectSchema: z.ZodType<Prisma.PersonsToTagsSelect> = z.object({
  followerId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  follower: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default PersonsToTagsSelectSchema;
