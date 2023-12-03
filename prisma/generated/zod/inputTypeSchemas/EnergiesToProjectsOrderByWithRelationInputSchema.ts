import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';

export const EnergiesToProjectsOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToProjectsOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToProjectsOrderByWithRelationInputSchema;
