import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergyMeasurementScalarWhereInputSchema: z.ZodType<Prisma.EnergyMeasurementScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergyMeasurementScalarWhereInputSchema),z.lazy(() => EnergyMeasurementScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyMeasurementScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyMeasurementScalarWhereInputSchema),z.lazy(() => EnergyMeasurementScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  measurement: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default EnergyMeasurementScalarWhereInputSchema;
