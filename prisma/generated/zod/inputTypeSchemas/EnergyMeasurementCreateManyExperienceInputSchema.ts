import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergyMeasurementCreateManyExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementCreateManyExperienceInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date().optional(),
  measurement: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default EnergyMeasurementCreateManyExperienceInputSchema;