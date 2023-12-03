import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereInputSchema } from './SkillLinkWhereInputSchema';

export const SkillLinkListRelationFilterSchema: z.ZodType<Prisma.SkillLinkListRelationFilter> = z.object({
  every: z.lazy(() => SkillLinkWhereInputSchema).optional(),
  some: z.lazy(() => SkillLinkWhereInputSchema).optional(),
  none: z.lazy(() => SkillLinkWhereInputSchema).optional()
}).strict();

export default SkillLinkListRelationFilterSchema;
