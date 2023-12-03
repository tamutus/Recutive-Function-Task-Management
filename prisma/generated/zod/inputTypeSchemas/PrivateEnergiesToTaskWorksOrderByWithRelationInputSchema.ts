import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';
import { TaskWorkOrderByWithRelationInputSchema } from './TaskWorkOrderByWithRelationInputSchema';

export const PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  workId: z.lazy(() => SortOrderSchema).optional(),
  startingValue: z.lazy(() => SortOrderSchema).optional(),
  endingValue: z.lazy(() => SortOrderSchema).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional(),
  work: z.lazy(() => TaskWorkOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema;
