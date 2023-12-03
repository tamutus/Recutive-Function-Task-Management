import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema'
import { PrioritiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereInputSchema'
import { PrioritiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsOrderByWithRelationInputSchema'
import { PrioritiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereUniqueInputSchema'
import { PrioritiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToSkillsScalarFieldEnumSchema'
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToSkillsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillsSelect> = z.object({
  priorityId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  notes: z.boolean().optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const PrioritiesToSkillsFindManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsFindManyArgs> = z.object({
  select: PrioritiesToSkillsSelectSchema.optional(),
  include: PrioritiesToSkillsIncludeSchema.optional(),
  where: PrioritiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillsOrderByWithRelationInputSchema.array(),PrioritiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToSkillsScalarFieldEnumSchema,PrioritiesToSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToSkillsFindManyArgsSchema;
