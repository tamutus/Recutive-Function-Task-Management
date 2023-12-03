import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToTaskTemplatesUpdatelinksInputSchema } from './EnergiesToTaskTemplatesUpdatelinksInputSchema';

export const EnergiesToTaskTemplatesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUncheckedUpdateManyInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesUncheckedUpdateManyInputSchema;
