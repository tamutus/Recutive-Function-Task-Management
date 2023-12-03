import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInputSchema } from './EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInputSchema';

export const EnergyMeasurementUpdateInputSchema: z.ZodType<Prisma.EnergyMeasurementUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  measurement: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  experience: z.lazy(() => EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInputSchema).optional()
}).strict();

export default EnergyMeasurementUpdateInputSchema;
