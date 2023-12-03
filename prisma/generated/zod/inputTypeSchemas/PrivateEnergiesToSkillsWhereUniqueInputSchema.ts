import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema } from './PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema';
import { PrivateEnergiesToSkillsWhereInputSchema } from './PrivateEnergiesToSkillsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergiesToSkillsWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsWhereUniqueInput> = z.object({
  skillId_energyId: z.lazy(() => PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_energyId: z.lazy(() => PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToSkillsWhereUniqueInputSchema;
