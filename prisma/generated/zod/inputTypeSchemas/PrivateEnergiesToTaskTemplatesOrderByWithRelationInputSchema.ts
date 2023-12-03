import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';

export const PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema;
