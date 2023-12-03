import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsIncludeSchema'
import { PrioritiesToPrivateTagsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsCreateInputSchema'
import { PrioritiesToPrivateTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsUncheckedCreateInputSchema'
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToPrivateTagsSelectSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export const PrioritiesToPrivateTagsCreateArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateArgs> = z.object({
  select: PrioritiesToPrivateTagsSelectSchema.optional(),
  include: PrioritiesToPrivateTagsIncludeSchema.optional(),
  data: z.union([ PrioritiesToPrivateTagsCreateInputSchema,PrioritiesToPrivateTagsUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToPrivateTagsCreateArgsSchema;
