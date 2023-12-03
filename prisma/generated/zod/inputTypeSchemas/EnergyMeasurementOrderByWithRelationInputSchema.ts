import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EnergiesToPersonsOrderByWithRelationInputSchema } from './EnergiesToPersonsOrderByWithRelationInputSchema';

export const EnergyMeasurementOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergyMeasurementOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  measurement: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  experience: z.lazy(() => EnergiesToPersonsOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergyMeasurementOrderByWithRelationInputSchema;
