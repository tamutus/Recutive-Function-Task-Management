import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToTagsIncludeSchema'
import { PrioritiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereInputSchema'
import { PrioritiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToTagsOrderByWithRelationInputSchema'
import { PrioritiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereUniqueInputSchema'
import { PrioritiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToTagsScalarFieldEnumSchema'
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

export const PrioritiesToTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrioritiesToTagsFindFirstOrThrowArgs> = z.object({
  select: PrioritiesToTagsSelectSchema.optional(),
  include: PrioritiesToTagsIncludeSchema.optional(),
  where: PrioritiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTagsOrderByWithRelationInputSchema.array(),PrioritiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToTagsScalarFieldEnumSchema,PrioritiesToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToTagsFindFirstOrThrowArgsSchema;
