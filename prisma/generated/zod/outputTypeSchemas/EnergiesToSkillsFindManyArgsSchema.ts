import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/EnergiesToSkillsIncludeSchema'
import { EnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereInputSchema'
import { EnergiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToSkillsOrderByWithRelationInputSchema'
import { EnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereUniqueInputSchema'
import { EnergiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToSkillsScalarFieldEnumSchema'
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToSkillsSelectSchema: z.ZodType<Prisma.EnergiesToSkillsSelect> = z.object({
  skillId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  notes: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export const EnergiesToSkillsFindManyArgsSchema: z.ZodType<Prisma.EnergiesToSkillsFindManyArgs> = z.object({
  select: EnergiesToSkillsSelectSchema.optional(),
  include: EnergiesToSkillsIncludeSchema.optional(),
  where: EnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToSkillsOrderByWithRelationInputSchema.array(),EnergiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToSkillsScalarFieldEnumSchema,EnergiesToSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToSkillsFindManyArgsSchema;
