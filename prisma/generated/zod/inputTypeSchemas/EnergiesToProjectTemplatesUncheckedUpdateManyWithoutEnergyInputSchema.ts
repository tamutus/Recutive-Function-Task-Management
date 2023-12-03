import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { EnergiesToProjectTemplatesUpdatelinksInputSchema } from './EnergiesToProjectTemplatesUpdatelinksInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdatelinksInputSchema),z.string().array() ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema;
