import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereInputSchema } from './PrioritiesToSkillsWhereInputSchema';

export const PrioritiesToSkillsListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToSkillsListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToSkillsWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToSkillsWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToSkillsWhereInputSchema).optional()
}).strict();

export default PrioritiesToSkillsListRelationFilterSchema;
