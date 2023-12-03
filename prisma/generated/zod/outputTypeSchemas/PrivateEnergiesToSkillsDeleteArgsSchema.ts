import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsIncludeSchema'
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereUniqueInputSchema'
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToSkillsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsSelect> = z.object({
  skillId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  notes: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToSkillsDeleteArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsDeleteArgs> = z.object({
  select: PrivateEnergiesToSkillsSelectSchema.optional(),
  include: PrivateEnergiesToSkillsIncludeSchema.optional(),
  where: PrivateEnergiesToSkillsWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToSkillsDeleteArgsSchema;
