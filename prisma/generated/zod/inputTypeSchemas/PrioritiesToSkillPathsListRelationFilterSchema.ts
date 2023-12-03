import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereInputSchema } from './PrioritiesToSkillPathsWhereInputSchema';

export const PrioritiesToSkillPathsListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToSkillPathsListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsListRelationFilterSchema;
