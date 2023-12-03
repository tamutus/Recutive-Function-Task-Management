import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';

export const EnergyMeasurementCreateWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementCreateWithoutExperienceInput> = z.object({
  date: z.coerce.date().optional(),
  measurement: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default EnergyMeasurementCreateWithoutExperienceInputSchema;
