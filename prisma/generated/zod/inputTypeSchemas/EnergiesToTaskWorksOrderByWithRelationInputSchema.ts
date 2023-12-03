import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';
import { TaskWorkOrderByWithRelationInputSchema } from './TaskWorkOrderByWithRelationInputSchema';

export const EnergiesToTaskWorksOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  workId: z.lazy(() => SortOrderSchema).optional(),
  startingValue: z.lazy(() => SortOrderSchema).optional(),
  endingValue: z.lazy(() => SortOrderSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional(),
  work: z.lazy(() => TaskWorkOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToTaskWorksOrderByWithRelationInputSchema;
