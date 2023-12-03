import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToSkillPathsScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToSkillPathsScalarWhereInputSchema;
