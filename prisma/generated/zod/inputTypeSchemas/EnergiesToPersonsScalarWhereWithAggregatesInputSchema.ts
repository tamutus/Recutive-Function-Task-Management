import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const EnergiesToPersonsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToPersonsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPersonsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default EnergiesToPersonsScalarWhereWithAggregatesInputSchema;
