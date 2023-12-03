import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema } from './TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema';

export const PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateWithoutEnergyInput> = z.object({
  startingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  endingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  work: z.lazy(() => TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksUpdateWithoutEnergyInputSchema;
