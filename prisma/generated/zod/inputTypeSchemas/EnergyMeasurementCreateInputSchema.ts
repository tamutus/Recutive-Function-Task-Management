import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { EnergiesToPersonsCreateNestedOneWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateNestedOneWithoutMeasurementsInputSchema';

export const EnergyMeasurementCreateInputSchema: z.ZodType<Prisma.EnergyMeasurementCreateInput> = z.object({
  date: z.coerce.date().optional(),
  measurement: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  experience: z.lazy(() => EnergiesToPersonsCreateNestedOneWithoutMeasurementsInputSchema)
}).strict();

export default EnergyMeasurementCreateInputSchema;
