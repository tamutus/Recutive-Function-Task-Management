import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';

export const PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema;
