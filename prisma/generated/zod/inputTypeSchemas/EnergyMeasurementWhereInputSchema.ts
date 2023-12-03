import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { EnergiesToPersonsRelationFilterSchema } from './EnergiesToPersonsRelationFilterSchema';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';

export const EnergyMeasurementWhereInputSchema: z.ZodType<Prisma.EnergyMeasurementWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergyMeasurementWhereInputSchema),z.lazy(() => EnergyMeasurementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyMeasurementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyMeasurementWhereInputSchema),z.lazy(() => EnergyMeasurementWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  measurement: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  experience: z.union([ z.lazy(() => EnergiesToPersonsRelationFilterSchema),z.lazy(() => EnergiesToPersonsWhereInputSchema) ]).optional(),
}).strict();

export default EnergyMeasurementWhereInputSchema;
