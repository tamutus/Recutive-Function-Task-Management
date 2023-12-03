import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const SkillsToSkillPathsScalarWhereInputSchema: z.ZodType<Prisma.SkillsToSkillPathsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToSkillPathsScalarWhereInputSchema;
