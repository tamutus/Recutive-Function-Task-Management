import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const SkillsToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesScalarWhereInputSchema;
