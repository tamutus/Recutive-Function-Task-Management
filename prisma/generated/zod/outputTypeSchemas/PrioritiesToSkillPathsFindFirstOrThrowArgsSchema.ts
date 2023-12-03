import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsIncludeSchema'
import { PrioritiesToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereInputSchema'
import { PrioritiesToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsOrderByWithRelationInputSchema'
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereUniqueInputSchema'
import { PrioritiesToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsScalarFieldEnumSchema'
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToSkillPathsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillPathsSelect> = z.object({
  skillPathId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export const PrioritiesToSkillPathsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsFindFirstOrThrowArgs> = z.object({
  select: PrioritiesToSkillPathsSelectSchema.optional(),
  include: PrioritiesToSkillPathsIncludeSchema.optional(),
  where: PrioritiesToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillPathsOrderByWithRelationInputSchema.array(),PrioritiesToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToSkillPathsScalarFieldEnumSchema,PrioritiesToSkillPathsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToSkillPathsFindFirstOrThrowArgsSchema;
