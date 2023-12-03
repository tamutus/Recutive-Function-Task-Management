import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const EnergiesToSkillsScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToSkillsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),z.lazy(() => EnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToSkillsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),z.lazy(() => EnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToSkillsScalarWhereInputSchema;
