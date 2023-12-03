import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema';
import { TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema } from './TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema';

export const PrivateEnergiesToTaskWorksUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateInput> = z.object({
  startingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  endingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema).optional(),
  work: z.lazy(() => TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksUpdateInputSchema;
