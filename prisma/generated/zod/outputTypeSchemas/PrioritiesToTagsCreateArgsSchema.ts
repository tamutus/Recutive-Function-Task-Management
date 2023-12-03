import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToTagsIncludeSchema'
import { PrioritiesToTagsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTagsCreateInputSchema'
import { PrioritiesToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTagsUncheckedCreateInputSchema'
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

export const PrioritiesToTagsCreateArgsSchema: z.ZodType<Prisma.PrioritiesToTagsCreateArgs> = z.object({
  select: PrioritiesToTagsSelectSchema.optional(),
  include: PrioritiesToTagsIncludeSchema.optional(),
  data: z.union([ PrioritiesToTagsCreateInputSchema,PrioritiesToTagsUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToTagsCreateArgsSchema;
