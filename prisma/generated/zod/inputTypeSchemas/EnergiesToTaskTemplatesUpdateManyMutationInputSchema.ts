import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToTaskTemplatesUpdatelinksInputSchema } from './EnergiesToTaskTemplatesUpdatelinksInputSchema';

export const EnergiesToTaskTemplatesUpdateManyMutationInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateManyMutationInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesUpdateManyMutationInputSchema;
