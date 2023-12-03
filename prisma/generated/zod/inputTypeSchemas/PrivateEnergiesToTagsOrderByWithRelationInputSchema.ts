import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';

export const PrivateEnergiesToTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsOrderByWithRelationInputSchema;
