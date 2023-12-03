import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsIncludeSchema'
import { PrivateEnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereInputSchema'
import { PrivateEnergiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsOrderByWithRelationInputSchema'
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereUniqueInputSchema'
import { PrivateEnergiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsScalarFieldEnumSchema'
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

export const PrivateEnergiesToSkillsFindManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsFindManyArgs> = z.object({
  select: PrivateEnergiesToSkillsSelectSchema.optional(),
  include: PrivateEnergiesToSkillsIncludeSchema.optional(),
  where: PrivateEnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToSkillsOrderByWithRelationInputSchema.array(),PrivateEnergiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToSkillsScalarFieldEnumSchema,PrivateEnergiesToSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToSkillsFindManyArgsSchema;
