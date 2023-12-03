import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';

export const EnergiesToProjectTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesOrderByWithRelationInputSchema;
