import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToTagsIncludeSchema'
import { PrioritiesToTagsUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToTagsUpdateInputSchema'
import { PrioritiesToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToTagsUncheckedUpdateInputSchema'
import { PrioritiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereUniqueInputSchema'
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToTagsSelectSchema: z.ZodType<Prisma.PrioritiesToTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export const PrioritiesToTagsUpdateArgsSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateArgs> = z.object({
  select: PrioritiesToTagsSelectSchema.optional(),
  include: PrioritiesToTagsIncludeSchema.optional(),
  data: z.union([ PrioritiesToTagsUpdateInputSchema,PrioritiesToTagsUncheckedUpdateInputSchema ]),
  where: PrioritiesToTagsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToTagsUpdateArgsSchema;
