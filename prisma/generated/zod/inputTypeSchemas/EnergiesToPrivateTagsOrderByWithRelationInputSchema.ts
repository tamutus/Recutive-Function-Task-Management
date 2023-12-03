import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';

export const EnergiesToPrivateTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsOrderByWithRelationInputSchema;
