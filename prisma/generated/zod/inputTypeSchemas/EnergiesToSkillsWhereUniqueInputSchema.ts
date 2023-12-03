import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema } from './EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema';
import { EnergiesToSkillsWhereInputSchema } from './EnergiesToSkillsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergiesToSkillsWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToSkillsWhereUniqueInput> = z.object({
  skillId_energyId: z.lazy(() => EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_energyId: z.lazy(() => EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToSkillsWhereInputSchema),z.lazy(() => EnergiesToSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToSkillsWhereInputSchema),z.lazy(() => EnergiesToSkillsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToSkillsWhereUniqueInputSchema;
