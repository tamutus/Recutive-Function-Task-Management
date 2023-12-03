import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';

export const EnergiesToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesOrderByWithRelationInputSchema;
