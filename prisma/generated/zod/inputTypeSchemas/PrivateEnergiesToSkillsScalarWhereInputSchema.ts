import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrivateEnergiesToSkillsScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToSkillsScalarWhereInputSchema;
