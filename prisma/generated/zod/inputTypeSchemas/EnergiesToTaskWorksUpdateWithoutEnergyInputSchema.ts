import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJSLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema } from './TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema';

export const EnergiesToTaskWorksUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateWithoutEnergyInput> = z.object({
  startingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  endingValue: z.union([ z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  work: z.lazy(() => TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema).optional()
}).strict();

export default EnergiesToTaskWorksUpdateWithoutEnergyInputSchema;
