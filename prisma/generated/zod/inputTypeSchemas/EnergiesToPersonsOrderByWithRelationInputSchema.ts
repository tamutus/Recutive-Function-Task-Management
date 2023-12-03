import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';
import { EnergyMeasurementOrderByRelationAggregateInputSchema } from './EnergyMeasurementOrderByRelationAggregateInputSchema';

export const EnergiesToPersonsOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToPersonsOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional(),
  measurements: z.lazy(() => EnergyMeasurementOrderByRelationAggregateInputSchema).optional()
}).strict();

export default EnergiesToPersonsOrderByWithRelationInputSchema;
