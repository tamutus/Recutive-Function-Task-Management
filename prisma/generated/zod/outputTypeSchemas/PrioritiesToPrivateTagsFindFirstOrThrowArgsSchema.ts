import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsIncludeSchema'
import { PrioritiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereInputSchema'
import { PrioritiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsOrderByWithRelationInputSchema'
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereUniqueInputSchema'
import { PrioritiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsScalarFieldEnumSchema'
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

export const PrioritiesToPrivateTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsFindFirstOrThrowArgs> = z.object({
  select: PrioritiesToPrivateTagsSelectSchema.optional(),
  include: PrioritiesToPrivateTagsIncludeSchema.optional(),
  where: PrioritiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToPrivateTagsOrderByWithRelationInputSchema.array(),PrioritiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToPrivateTagsScalarFieldEnumSchema,PrioritiesToPrivateTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToPrivateTagsFindFirstOrThrowArgsSchema;
