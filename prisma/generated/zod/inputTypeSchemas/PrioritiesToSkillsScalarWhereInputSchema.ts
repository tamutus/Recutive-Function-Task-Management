import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToSkillsScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToSkillsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToSkillsScalarWhereInputSchema;
