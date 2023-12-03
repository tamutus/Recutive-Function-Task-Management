import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';

export const PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema;
