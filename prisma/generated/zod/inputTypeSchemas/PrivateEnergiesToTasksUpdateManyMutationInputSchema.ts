import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToTasksUpdateManyMutationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateManyMutationInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToTasksUpdateManyMutationInputSchema;
