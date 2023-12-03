import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';

export const SkillLinkOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillLinkOrderByWithRelationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  hourGate: z.lazy(() => SortOrderSchema).optional(),
  precursor: z.lazy(() => SkillOrderByWithRelationInputSchema).optional(),
  successor: z.lazy(() => SkillOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillLinkOrderByWithRelationInputSchema;
