import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereInputSchema } from './EnergiesToSkillsWhereInputSchema';

export const EnergiesToSkillsListRelationFilterSchema: z.ZodType<Prisma.EnergiesToSkillsListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToSkillsWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToSkillsWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToSkillsWhereInputSchema).optional()
}).strict();

export default EnergiesToSkillsListRelationFilterSchema;
