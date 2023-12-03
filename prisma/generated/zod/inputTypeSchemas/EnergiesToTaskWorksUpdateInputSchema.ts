import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema';
import { TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema } from './TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema';

export const EnergiesToTaskWorksUpdateInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateInput> = z.object({
  startingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  endingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema).optional(),
  work: z.lazy(() => TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema).optional()
}).strict();

export default EnergiesToTaskWorksUpdateInputSchema;
