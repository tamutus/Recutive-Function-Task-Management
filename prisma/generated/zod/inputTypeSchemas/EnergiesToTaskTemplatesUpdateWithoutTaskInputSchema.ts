import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToTaskTemplatesUpdatelinksInputSchema } from './EnergiesToTaskTemplatesUpdatelinksInputSchema';
import { EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesUpdateWithoutTaskInputSchema;
