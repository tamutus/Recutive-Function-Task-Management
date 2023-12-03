import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema';

export const PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateWithoutWorkInput> = z.object({
  startingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  endingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema;
