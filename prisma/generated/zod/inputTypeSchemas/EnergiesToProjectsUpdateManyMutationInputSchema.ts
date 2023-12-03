import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToProjectsUpdatelinksInputSchema } from './EnergiesToProjectsUpdatelinksInputSchema';

export const EnergiesToProjectsUpdateManyMutationInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateManyMutationInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsUpdatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToProjectsUpdateManyMutationInputSchema;
