import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToProjectsUpdatelinksInputSchema } from './EnergiesToProjectsUpdatelinksInputSchema';

export const EnergiesToProjectsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUncheckedUpdateManyInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsUpdatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToProjectsUncheckedUpdateManyInputSchema;
