import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergyMeasurementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergyMeasurementScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergyMeasurementScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergyMeasurementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyMeasurementScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyMeasurementScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergyMeasurementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  measurement: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default EnergyMeasurementScalarWhereWithAggregatesInputSchema;
