import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsIncludeSchema'
import { PrioritiesToPrivateTagsUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsUpdateInputSchema'
import { PrioritiesToPrivateTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsUncheckedUpdateInputSchema'
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereUniqueInputSchema'
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

export const PrioritiesToPrivateTagsUpdateArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateArgs> = z.object({
  select: PrioritiesToPrivateTagsSelectSchema.optional(),
  include: PrioritiesToPrivateTagsIncludeSchema.optional(),
  data: z.union([ PrioritiesToPrivateTagsUpdateInputSchema,PrioritiesToPrivateTagsUncheckedUpdateInputSchema ]),
  where: PrioritiesToPrivateTagsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToPrivateTagsUpdateArgsSchema;
