import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsIncludeSchema'
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereUniqueInputSchema'
import { PrivateEnergiesToSkillsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsCreateInputSchema'
import { PrivateEnergiesToSkillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsUncheckedCreateInputSchema'
import { PrivateEnergiesToSkillsUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsUpdateInputSchema'
import { PrivateEnergiesToSkillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsUncheckedUpdateInputSchema'
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

export const PrivateEnergiesToSkillsUpsertArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpsertArgs> = z.object({
  select: PrivateEnergiesToSkillsSelectSchema.optional(),
  include: PrivateEnergiesToSkillsIncludeSchema.optional(),
  where: PrivateEnergiesToSkillsWhereUniqueInputSchema,
  create: z.union([ PrivateEnergiesToSkillsCreateInputSchema,PrivateEnergiesToSkillsUncheckedCreateInputSchema ]),
  update: z.union([ PrivateEnergiesToSkillsUpdateInputSchema,PrivateEnergiesToSkillsUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateEnergiesToSkillsUpsertArgsSchema;
