import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementWhereInputSchema } from './EnergyMeasurementWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnergiesToPersonsRelationFilterSchema } from './EnergiesToPersonsRelationFilterSchema';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';

export const EnergyMeasurementWhereUniqueInputSchema: z.ZodType<Prisma.EnergyMeasurementWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => EnergyMeasurementWhereInputSchema),z.lazy(() => EnergyMeasurementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyMeasurementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyMeasurementWhereInputSchema),z.lazy(() => EnergyMeasurementWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  measurement: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  experience: z.union([ z.lazy(() => EnergiesToPersonsRelationFilterSchema),z.lazy(() => EnergiesToPersonsWhereInputSchema) ]).optional(),
}).strict());

export default EnergyMeasurementWhereUniqueInputSchema;
