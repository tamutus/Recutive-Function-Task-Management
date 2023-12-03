import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergyMeasurementUncheckedCreateInputSchema: z.ZodType<Prisma.EnergyMeasurementUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date().optional(),
  measurement: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  personId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default EnergyMeasurementUncheckedCreateInputSchema;
