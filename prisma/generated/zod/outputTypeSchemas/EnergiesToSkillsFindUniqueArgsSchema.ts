import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/EnergiesToSkillsIncludeSchema'
import { EnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereUniqueInputSchema'
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

export const EnergiesToSkillsFindUniqueArgsSchema: z.ZodType<Prisma.EnergiesToSkillsFindUniqueArgs> = z.object({
  select: EnergiesToSkillsSelectSchema.optional(),
  include: EnergiesToSkillsIncludeSchema.optional(),
  where: EnergiesToSkillsWhereUniqueInputSchema,
}).strict()

export default EnergiesToSkillsFindUniqueArgsSchema;
