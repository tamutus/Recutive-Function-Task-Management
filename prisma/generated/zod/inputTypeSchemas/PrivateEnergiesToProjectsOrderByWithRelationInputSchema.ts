import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';

export const PrivateEnergiesToProjectsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsOrderByWithRelationInputSchema;
