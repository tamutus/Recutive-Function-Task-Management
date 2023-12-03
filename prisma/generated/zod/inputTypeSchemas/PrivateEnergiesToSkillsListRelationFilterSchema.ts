import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereInputSchema } from './PrivateEnergiesToSkillsWhereInputSchema';

export const PrivateEnergiesToSkillsListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToSkillsWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsListRelationFilterSchema;
